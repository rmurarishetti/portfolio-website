import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <p className="font-mono text-xs text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
          404
        </p>
        <h1 className="font-display text-4xl font-semibold text-[var(--color-text-primary)] mb-4">
          Page not found
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-accent)] text-white text-sm font-semibold hover:bg-[var(--color-accent-bright)] transition-colors"
        >
          ← Back Home
        </Link>
      </div>
    </div>
  )
}
