import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

// ─── Rate limiting (in-memory, resets on cold start) ─────────────────────────

const DAILY_TOKEN_BUDGET = 10_000
const dailyUsage: { tokens: number; resetAt: number } = {
  tokens: 0,
  resetAt: Date.now() + 86_400_000,
}

function checkAndUpdateBudget(tokensUsed: number): { allowed: boolean; remaining: number } {
  const now = Date.now()
  if (now > dailyUsage.resetAt) {
    dailyUsage.tokens = 0
    dailyUsage.resetAt = now + 86_400_000
  }
  dailyUsage.tokens += tokensUsed
  return {
    allowed: dailyUsage.tokens <= DAILY_TOKEN_BUDGET,
    remaining: Math.max(0, DAILY_TOKEN_BUDGET - dailyUsage.tokens),
  }
}

// ─── System prompt ───────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are Rohit's portfolio assistant — a concise, friendly AI agent embedded in his personal website. Help visitors navigate and learn about his work. Keep responses to 2-3 sentences max.

Site pages:
- / — Homepage with hero, experience preview, agentic AI section, featured projects
- /work — Detailed agentic AI work at CloudsineAI + previous role at iTrust/SUTD
- /projects — All 16 projects spanning AI, Software, Engineering, Medtech, Research
- /about — Bio, travel timeline with interactive globe, full experience, education, skills
- /projects/[id] — Individual project detail pages

About Rohit:
- Lead Software Engineer at CloudsineAI (Mar 2025 — Present), Singapore
- Previously Software Engineer at iTrust, Singapore University of Technology and Design (Aug 2024 — Feb 2025)
- SUTD graduate, Bachelor in Computer Science and Design, GPA 4.57/5.0, Honours with Highest Distinction
- AWS Certified Developer Associate
- Published research in IJCIP on ICS attack detection, delivered at Lockedshields CCDCOE (41 nations)

Current work at CloudsineAI:
- Agentic AI governance platform — observability over AI system topology, threat attack graphs
- GenAI security firewall for IoT/RTSP protocols (Go + ModSecurity)
- Agentic AI vulnerability triage system
- Weborion Monitor (flagship product): $150K+ in closed contracts, lead product engineer & DevOps lead
- $60K+ AWS cost savings, 99.95% uptime

Notable projects:
- Elgo — IoT energy savings platform (AWS, Next.js, SageMaker), ~$9K seed funding
- Hungry RAG — LLM-powered restaurant recommendations using RAG + Elasticsearch
- DNS on Chord — Distributed DNS using Chord DHT (Go, open source)
- Prompt Engineering Adversarial Questions — LLM robustness evaluation

Skills: Go, TypeScript, Python, React, Next.js, AWS, Docker, Kubernetes, GenAI, LangGraph, CrewAI

When suggesting pages, use markdown links: [Page Name](/path)
If asked something unrelated to Rohit or his work, politely redirect.`

// ─── Handler ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { reply: "The AI agent is currently offline. Please explore the site manually!", tokensUsed: 0, tokensRemaining: 0 },
        { status: 200 }
      )
    }

    // Check budget before calling
    const preCheck = checkAndUpdateBudget(0)
    if (preCheck.remaining <= 0) {
      return NextResponse.json(
        { reply: "I've reached my daily conversation limit. Feel free to explore the site — check out [Work](/work) or [Projects](/projects)!", tokensUsed: 0, tokensRemaining: 0 },
        { status: 200 }
      )
    }

    const { message, history } = await req.json()

    if (!message || typeof message !== 'string' || message.length > 500) {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: 'gemini-3-flash-preview',
      systemInstruction: SYSTEM_PROMPT,
    })

    // Build chat history
    const chatHistory = (history || []).map((msg: { role: string; text: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }))

    const chat = model.startChat({ history: chatHistory })
    const result = await chat.sendMessage(message)
    const response = result.response
    const text = response.text()

    // Estimate tokens (rough: 1 token ≈ 4 chars)
    const estimatedTokens = Math.ceil((message.length + text.length) / 4)
    const budget = checkAndUpdateBudget(estimatedTokens)

    return NextResponse.json({
      reply: text,
      tokensUsed: estimatedTokens,
      tokensRemaining: budget.remaining,
    })
  } catch (error: unknown) {
    console.error('Chat API error:', error)

    // Handle rate limit errors specifically
    const errMsg = error instanceof Error ? error.message : String(error)
    if (errMsg.includes('429') || errMsg.includes('Too Many Requests') || errMsg.includes('quota')) {
      return NextResponse.json(
        { reply: "I'm a bit busy right now — try again in a moment, or explore [Projects](/projects) and [About](/about) directly!", tokensUsed: 0, tokensRemaining: DAILY_TOKEN_BUDGET },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { reply: "Something went wrong. Try exploring [Projects](/projects) or [About](/about) directly!", tokensUsed: 0, tokensRemaining: 0 },
      { status: 200 }
    )
  }
}
