'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const email = 'rmurarishetti@gmail.com'

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="font-mono text-xs text-[var(--color-warm)] uppercase tracking-widest mb-4"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] leading-tight mb-6"
        >
          Let&apos;s build something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-[var(--color-text-secondary)] max-w-lg mx-auto mb-10"
        >
          Open to senior engineering roles, AI/agentic systems, and interesting problems.
          Based in Singapore. Open to remote.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white text-sm font-semibold hover:bg-[var(--color-accent-bright)] transition-colors"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied!' : email}
          </button>
          <a
            href="https://linkedin.com/in/rohitmurarishetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl glass text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rmurarishetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl glass text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all"
          >
            GitHub
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-xs font-mono text-[var(--color-teal)]"
        >
          Singapore &middot; AWS Certified Developer Associate
        </motion.p>
      </div>
    </section>
  )
}
