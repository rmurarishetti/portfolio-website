import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projectsData } from '@/data/projects'
import { formatDateRange } from '@/lib/utils'
import type { ProjectType } from '@/types'

export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = projectsData.find((p) => p.id === id)
  if (!project) return {}
  return {
    title: project.name,
    description: project.subtitle,
  }
}

const typeColors: Record<ProjectType, string> = {
  AI: 'var(--color-type-ai)',
  Software: 'var(--color-type-software)',
  Engineering: 'var(--color-type-engineering)',
  Medtech: 'var(--color-type-medtech)',
  Research: 'var(--color-type-research)',
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projectsData.find((p) => p.id === id)

  if (!project) notFound()

  const hasVideo = project.media.some((m) => m.video)
  const firstVideo = project.media.find((m) => m.video)?.video

  // Convert YouTube links to embed URLs
  function toEmbedUrl(url: string): string {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0]
      return `https://www.youtube.com/embed/${id}`
    }
    if (url.includes('youtube.com/watch')) {
      const vid = new URL(url).searchParams.get('v')
      return `https://www.youtube.com/embed/${vid}`
    }
    return url
  }

  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-12 pt-24 pb-12 md:pt-32 md:pb-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-muted)] mb-10">
        <Link href="/" className="hover:text-[var(--color-text-secondary)] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-[var(--color-text-secondary)] transition-colors">
          Projects
        </Link>
        <span>/</span>
        <span className="text-[var(--color-text-secondary)]">{project.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border"
            style={{
              borderColor: typeColors[project.type],
              color: typeColors[project.type],
              background: `${typeColors[project.type]}15`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: typeColors[project.type] }} />
            {project.type}
          </span>
          {!project.endDate && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--color-accent-dim)] bg-[var(--color-accent-glow)] text-xs font-mono text-[var(--color-accent-bright)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Active
            </span>
          )}
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-text-primary)] leading-tight mb-4">
          {project.name}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed mb-6">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-xs font-mono text-[var(--color-text-muted)]">
            {formatDateRange(project.startDate, project.endDate)}
          </span>
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-bright)] transition-colors"
            >
              {project.link.name}
              <span className="text-xs">↗</span>
            </a>
          )}
        </div>
      </header>

      {/* Two-column: main + sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12">
        {/* Main content */}
        <div className="flex flex-col gap-8">
          {/* Thumbnail */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src={project.thumbnail.href}
              alt={project.thumbnail.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 65vw"
            />
          </div>

          {/* Video embed */}
          {firstVideo && (
            <div>
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                Demo
              </p>
              <div
                className="relative w-full rounded-xl overflow-hidden border border-[var(--color-border)]"
                style={{ paddingBottom: `${100 / (firstVideo.aspectRatio ?? 16 / 9)}%` }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={toEmbedUrl(firstVideo.href)}
                  title={firstVideo.alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Description */}
          {project.description.length > 0 && (
            <div>
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                Overview
              </p>
              <div className="flex flex-col gap-4">
                {project.description.map((para, i) => (
                  <p key={i} className="text-[var(--color-text-secondary)] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Documents */}
          {project.documents.length > 0 && (
            <div>
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                Documents
              </p>
              <div className="flex flex-wrap gap-2">
                {project.documents.map((doc) => (
                  <a
                    key={doc.name}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-accent)] transition-all"
                  >
                    📄 {doc.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-8">
          {/* Tags */}
          <div>
            <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contributors */}
          {project.people.length > 0 && (
            <div>
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                Contributors
              </p>
              <div className="flex flex-col gap-2">
                {project.people.map((person) => (
                  <a
                    key={person.name}
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    <span
                      className="w-6 h-6 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[10px]"
                    >
                      {person.name[0]}
                    </span>
                    {person.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Back link */}
      <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Projects
        </Link>
      </div>
    </div>
  )
}
