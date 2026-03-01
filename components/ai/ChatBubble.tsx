'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import ChatWidget from './ChatWidget'

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [agentSectionVisible, setAgentSectionVisible] = useState(false)
  const pathname = usePathname()

  // Listen for the agent section visibility event (homepage only)
  useEffect(() => {
    function handleVisibility(e: Event) {
      const detail = (e as CustomEvent).detail
      setAgentSectionVisible(detail.visible)
    }
    window.addEventListener('agent-section-visibility', handleVisibility)
    return () => window.removeEventListener('agent-section-visibility', handleVisibility)
  }, [])

  // Reset visibility state when navigating away from homepage
  useEffect(() => {
    if (pathname !== '/') {
      setAgentSectionVisible(false)
    }
  }, [pathname])

  // On homepage: hide bubble when the embedded section is visible
  // On other pages: always show
  const isHomepage = pathname === '/'
  const showBubble = isHomepage ? !agentSectionVisible : true

  if (!showBubble && !open) return null

  return (
    <>
      {/* Floating panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] max-h-[calc(100vh-8rem)] rounded-2xl border border-[var(--color-border)] shadow-2xl overflow-hidden flex flex-col"
            style={{ background: 'var(--color-canvas)' }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2.5 right-2.5 z-10 p-1 rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)] transition-colors"
            >
              <X size={14} />
            </button>
            <ChatWidget variant="floating" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble button */}
      <AnimatePresence>
        {(showBubble || open) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen((o) => !o)}
            className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-[var(--color-border-accent)] transition-colors"
            style={{ background: open ? 'var(--color-surface)' : 'var(--color-ai)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} className="text-[var(--color-text-primary)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="bot"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Bot size={18} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
