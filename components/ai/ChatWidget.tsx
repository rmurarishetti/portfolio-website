'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Terminal, Loader2, AlertCircle } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

const SUGGESTIONS = [
  'What does Rohit build?',
  'Show me projects',
  'Tell me about his work',
]

const MAX_MESSAGES = 10

function parseMarkdownLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const match = part.match(/\[([^\]]+)\]\(([^)]+)\)/)
    if (match) {
      return (
        <a
          key={i}
          href={match[2]}
          className="text-[var(--color-ai)] hover:text-[var(--color-ai-bright)] underline underline-offset-2 transition-colors"
        >
          {match[1]}
        </a>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function ChatWidget({ variant = 'embedded' }: { variant?: 'embedded' | 'floating' }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [budgetExhausted, setBudgetExhausted] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const isEmbedded = variant === 'embedded'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading || budgetExhausted || messages.length >= MAX_MESSAGES) return

    const userMsg: Message = { role: 'user', text: text.trim() }
    const history = [...messages, userMsg]
    setMessages(history)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          history: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', text: m.text })),
        }),
      })

      const data = await res.json()
      setMessages([...history, { role: 'assistant', text: data.reply }])

      if (data.tokensRemaining !== undefined && data.tokensRemaining < 500) {
        setBudgetExhausted(true)
      }
    } catch {
      setMessages([
        ...history,
        { role: 'assistant', text: "I'm having trouble connecting. Try exploring the site directly!" },
      ])
    } finally {
      setLoading(false)
    }
  }, [loading, budgetExhausted, messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const atLimit = messages.length >= MAX_MESSAGES

  return (
    <div
      className={`flex flex-col ${
        isEmbedded
          ? 'rounded-xl border border-[var(--color-border)] overflow-hidden'
          : 'h-full'
      }`}
      style={{ background: 'var(--color-canvas)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]" style={{ background: 'var(--color-surface)' }}>
        <Terminal size={14} className="text-[var(--color-ai)]" />
        <span className="text-xs font-mono text-[var(--color-ai)] font-medium">portfolio-agent</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] animate-pulse ml-auto" />
        <span className={`text-[10px] font-mono text-[var(--color-text-muted)] ${!isEmbedded ? 'pr-6' : ''}`}>online</span>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className={`flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 ${
          isEmbedded ? 'max-h-[320px] min-h-[200px]' : 'min-h-0'
        }`}
      >
        {messages.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-6">
            <p className="text-xs text-[var(--color-text-muted)] font-mono text-center">
              Ask me anything about Rohit&apos;s work
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-ai)] hover:border-[var(--color-ai)] transition-colors font-mono"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[var(--color-accent)] text-white rounded-br-sm'
                  : 'glass text-[var(--color-text-secondary)] rounded-bl-sm'
              }`}
            >
              {msg.role === 'assistant' ? parseMarkdownLinks(msg.text) : msg.text}
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="glass px-3 py-2 rounded-xl rounded-bl-sm flex items-center gap-2">
              <Loader2 size={12} className="animate-spin text-[var(--color-ai)]" />
              <span className="text-xs text-[var(--color-text-muted)] font-mono">thinking...</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Budget exhausted / limit notice */}
      <AnimatePresence>
        {(budgetExhausted || atLimit) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 py-2 flex items-center gap-2 border-t border-[var(--color-border)]"
            style={{ background: 'var(--color-surface)' }}
          >
            <AlertCircle size={12} className="text-[var(--color-warm)] flex-shrink-0" />
            <span className="text-[10px] text-[var(--color-text-muted)] font-mono">
              {budgetExhausted
                ? 'Daily limit reached — explore the site directly!'
                : 'Conversation limit reached. Refresh to start a new chat.'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-3 border-t border-[var(--color-border)]"
        style={{ background: 'var(--color-surface)' }}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={budgetExhausted || atLimit ? 'Chat ended' : 'Ask about Rohit\'s work...'}
          disabled={loading || budgetExhausted || atLimit}
          maxLength={500}
          className="flex-1 bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none font-mono disabled:opacity-40"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading || budgetExhausted || atLimit}
          className="p-1.5 rounded-lg text-[var(--color-ai)] hover:bg-[var(--color-ai)]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  )
}
