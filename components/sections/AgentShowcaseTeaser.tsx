'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    label: 'Governance Platform',
    description: 'Observability over agentic AI topology and threat attack graph visualization for enterprise clients.',
  },
  {
    label: 'GenAI Security Firewall',
    description: 'Go + ModSecurity based firewall protecting IoT/RTSP protocols from AI-powered attacks.',
  },
  {
    label: 'Vulnerability Triage',
    description: 'Autonomous agent pipeline that classifies and prioritizes security vulnerabilities at scale.',
  },
]

export default function AgentShowcaseTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-[var(--color-surface)]"
    >
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs text-[var(--color-ai)] uppercase tracking-[0.2em] mb-4"
            >
              Agentic AI
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] leading-tight mb-4"
            >
              AI governance for the agent era.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[var(--color-text-secondary)] leading-relaxed mb-6"
            >
              Agentic AI systems can&apos;t govern themselves. At CloudsineAI, I&apos;m building the
              infrastructure that lets enterprise teams understand, monitor, and secure the autonomous
              agents they deploy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ai)] hover:text-[var(--color-ai-bright)] transition-colors group"
              >
                See the full story
                <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
              </Link>
            </motion.div>
          </div>

          {/* Right: highlight cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                className="group flex gap-4 p-5 rounded-xl glass hover:border-[var(--color-border-accent)] transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--color-warm)] flex-shrink-0 mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                    {h.label}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
