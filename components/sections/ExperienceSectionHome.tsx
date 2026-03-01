'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { xpData } from '@/data/experience'
import { formatDateRange } from '@/lib/utils'

export default function ExperienceSectionHome() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const featured = xpData.slice(0, 3)

  return (
    <section
      ref={ref}
      className="py-24 bg-[var(--color-surface)]"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-mono text-xs text-[var(--color-teal)] uppercase tracking-widest mb-3"
            >
              Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl font-semibold text-[var(--color-text-primary)]"
            >
              Where I&apos;ve Worked
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/about#experience"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1 group"
            >
              Full history
              <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
            </Link>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          <div className="absolute left-[7px] top-2 bottom-8 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, var(--color-teal), var(--color-border-accent))' }} />

          {featured.map((xp, i) => {
            const role = xp.roles[0]
            const isCurrent = !role.endDate
            return (
              <motion.div
                key={xp.id}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="relative flex gap-6 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 w-3.5 mt-1">
                  <div
                    className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                    style={{
                      borderColor: isCurrent ? 'var(--color-teal)' : 'var(--color-border-accent)',
                      background: isCurrent ? 'var(--color-teal)' : 'var(--color-surface)',
                    }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-xl glass p-6 hover:border-[var(--color-border-accent)] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                        {role.position}
                      </h3>
                      <a
                        href={xp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-bright)] transition-colors"
                      >
                        {xp.company}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      {isCurrent && (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[var(--color-teal-dim)] text-xs font-mono text-[var(--color-teal)]" style={{ background: 'var(--color-teal-dim)' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-teal)] animate-pulse" />
                          Now
                        </span>
                      )}
                      <span className="text-xs font-mono text-[var(--color-text-muted)]">
                        {formatDateRange(role.startDate, role.endDate)}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                    {Array.isArray(role.description) ? role.description[0] : role.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {role.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-gold-dim)] text-[var(--color-gold)]"
                        style={{ background: 'var(--color-gold-dim)' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
