'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projectsData } from '@/data/projects'
import type { Project, ProjectType } from '@/types'

const typeColors: Record<ProjectType, string> = {
  AI: 'var(--color-type-ai)',
  Software: 'var(--color-type-software)',
  Engineering: 'var(--color-type-engineering)',
  Medtech: 'var(--color-type-medtech)',
  Research: 'var(--color-type-research)',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group flex flex-col rounded-xl glass overflow-hidden hover:border-[var(--color-border-accent)] transition-all duration-300 hover:shadow-lg"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-surface-raised)]">
          <Image
            src={project.thumbnail.href}
            alt={project.thumbnail.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 p-5">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: typeColors[project.type] }}
            />
            <span className="text-xs font-mono text-[var(--color-text-muted)]">{project.type}</span>
          </div>
          <h3 className="text-base font-semibold text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function FeaturedProjectsSection() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 4)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 max-w-[1100px] mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-[var(--color-warm)] uppercase tracking-widest mb-3"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-semibold text-[var(--color-text-primary)]"
          >
            Featured Projects
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-1 group"
          >
            All projects
            <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
          </Link>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
