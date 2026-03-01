import Link from 'next/link'

const links = {
  social: [
    { label: 'GitHub', href: 'https://github.com/rmurarishetti' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/rohitmurarishetti' },
    { label: 'Email', href: 'mailto:rmurarishetti@gmail.com' },
  ],
  site: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] mt-24 bg-[var(--color-surface)]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <p className="font-display text-base font-semibold text-[var(--color-text-primary)]">
              Rohit Murarishetti
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Lead Software Engineer building agentic AI systems.
              <br />
              Based in Singapore.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
                Site
              </p>
              <ul className="flex flex-col gap-2">
                {links.site.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest">
                Connect
              </p>
              <ul className="flex flex-col gap-2">
                {links.social.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
          <p className="text-xs font-mono text-[var(--color-text-muted)]">
            &copy; {year} Rohit Murarishetti
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Built with Next.js, Tailwind CSS, and Three.js
          </p>
        </div>
      </div>
    </footer>
  )
}
