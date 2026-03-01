'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { eduData, certifications } from '@/data/education'
import { formatDateRange } from '@/lib/utils'

export default function EducationSectionHome() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-mono text-xs text-[var(--color-warm)] uppercase tracking-widest mb-3"
            >
              Academic
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl font-semibold text-[var(--color-text-primary)]"
            >
              Education
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
              Full details
              <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
            </Link>
          </motion.div>
        </div>

        {/* Education cards */}
        <div className="flex flex-col gap-5">
          {eduData.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="rounded-xl glass p-6 hover:border-[var(--color-border-accent)] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                    {edu.degree}
                  </h3>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-bright)] transition-colors"
                  >
                    {edu.institution}
                  </a>
                </div>
                <span className="text-xs font-mono text-[var(--color-text-muted)] flex-shrink-0">
                  {formatDateRange(edu.startDate, edu.endDate)}
                </span>
              </div>

              <ul className="flex flex-col gap-1.5 mb-4">
                {edu.highlights.slice(0, 3).map((h, j) => (
                  <li key={j} className="flex gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-[var(--color-border-accent)] flex-shrink-0">—</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {edu.skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + (eduData.length + i) * 0.1, duration: 0.5 }}
              className="rounded-xl glass p-6 hover:border-[var(--color-border-accent)] transition-colors"
            >
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                {cert.name}
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] font-mono">
                {cert.issuer} &middot; {cert.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
