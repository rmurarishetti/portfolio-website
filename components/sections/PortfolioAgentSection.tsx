'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import AgentTopology from './AgentTopology'
import ChatWidget from '@/components/ai/ChatWidget'

export default function PortfolioAgentSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Dispatch a custom event when this section leaves the viewport
  // so ChatBubble knows to show/hide
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent('agent-section-visibility', {
            detail: { visible: entry.isIntersecting },
          })
        )
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="portfolio-agent"
      className="py-24 border-b border-[var(--color-border)]"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-[var(--color-ai)] uppercase tracking-[0.2em] mb-3"
          >
            Portfolio Agent
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-semibold text-[var(--color-text-primary)] mb-3"
          >
            Navigate with an agent.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl"
          >
            This portfolio is powered by an agentic system. Ask the chat agent anything about
            my work, projects, or experience — it&apos;ll point you in the right direction.
          </motion.p>
        </div>

        {/* Topology + Chat side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-stretch">
          <AgentTopology />
          <ChatWidget variant="embedded" />
        </div>
      </div>
    </section>
  )
}
