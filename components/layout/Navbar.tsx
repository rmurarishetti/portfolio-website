'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { navData } from '@/data/nav'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4">
      <motion.header
        className="pointer-events-auto rounded-2xl"
        animate={{
          maxWidth: scrolled ? 520 : 1100,
          backgroundColor: scrolled
            ? 'var(--glass-bg)'
            : 'transparent',
          borderColor: scrolled
            ? 'var(--glass-border)'
            : 'transparent',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.08)'
            : '0 0px 0px rgba(0,0,0,0)',
        }}
        transition={{
          maxWidth: {
            duration: scrolled ? 0.5 : 0.4,
            ease: scrolled ? [0.22, 1, 0.36, 1] : [0.4, 0, 0.2, 1],
          },
          backgroundColor: { duration: 0.3 },
          borderColor: { duration: 0.3 },
          boxShadow: { duration: 0.3 },
        }}
        style={{
          width: 'calc(100% - 3rem)',
          border: '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        <nav
          className={cn(
            'h-12 flex items-center transition-all duration-600',
            scrolled ? 'px-3 gap-1' : 'px-4 gap-0',
          )}
        >
          {/* Logo — pinned left in expanded, inline in pill */}
          <Link
            href="/"
            className={cn(
              'font-display font-semibold transition-all duration-500 tracking-tight flex-shrink-0',
              scrolled
                ? 'text-base text-[var(--color-text-primary)] hover:text-[var(--color-accent)] px-2.5'
                : 'text-lg text-[var(--hero-text)] hover:opacity-80 px-3',
            )}
          >
            RM
          </Link>

          {/* Spacer — pushes links to center when expanded */}
          <div
            className={cn(
              'hidden md:block transition-all duration-500',
              scrolled ? 'flex-none w-0' : 'flex-1',
            )}
          />

          {/* Separator (pill mode only) */}
          <div
            className={cn(
              'hidden md:block w-px h-5 transition-all duration-500',
              scrolled
                ? 'bg-[var(--color-border-accent)] mx-1 opacity-100'
                : 'bg-transparent mx-0 opacity-0',
            )}
          />

          {/* Desktop nav links — centered when expanded */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navData.map((item) => {
              const isActive = item.link !== '/' ? pathname.startsWith(item.link) : pathname === '/'
              const linkClasses = cn(
                'px-3 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-300 whitespace-nowrap',
                scrolled
                  ? isActive
                    ? 'text-[var(--color-accent)] bg-[var(--color-accent-glow)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-glow)]'
                  : isActive
                    ? 'text-[var(--hero-text)] bg-white/10'
                    : 'text-[var(--hero-muted)] hover:text-[var(--hero-text)]',
              )
              if (item.external) {
                return (
                  <li key={item.title}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(linkClasses, 'flex items-center gap-1')}
                    >
                      {item.title}
                      <span className="text-[9px] opacity-50">&#8599;</span>
                    </a>
                  </li>
                )
              }
              return (
                <li key={item.title}>
                  <Link href={item.link} className={linkClasses}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Spacer — pushes toggle to right when expanded */}
          <div
            className={cn(
              'hidden md:block transition-all duration-500',
              scrolled ? 'flex-none w-0' : 'flex-1',
            )}
          />

          {/* Separator (pill mode only) */}
          <div
            className={cn(
              'hidden md:block w-px h-5 transition-all duration-500',
              scrolled
                ? 'bg-[var(--color-border-accent)] mx-1 opacity-100'
                : 'bg-transparent mx-0 opacity-0',
            )}
          />

          {/* Theme toggle (desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-1 ml-auto">
            <ThemeToggle />
            <button
              className={cn(
                'p-2 rounded-xl transition-all',
                scrolled
                  ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  : 'text-[var(--hero-muted)] hover:text-[var(--hero-text)]',
              )}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className={cn(
              'md:hidden border-t px-2 pb-2 rounded-b-2xl',
              scrolled ? 'border-[var(--color-border)]' : 'border-[var(--hero-border)]',
            )}
            style={{
              background: scrolled ? 'var(--glass-bg)' : 'var(--color-canvas)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <ul className="flex flex-col gap-0.5 pt-2">
              {navData.map((item) => {
                const isActive = item.link !== '/' ? pathname.startsWith(item.link) : pathname === '/'
                if (item.external) {
                  return (
                    <li key={item.title}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-glow)] transition-all"
                      >
                        {item.title}
                        <span className="text-[9px] opacity-50">&#8599;</span>
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      className={cn(
                        'block px-3 py-2 rounded-xl text-sm font-medium transition-all',
                        isActive
                          ? 'text-[var(--color-accent)] bg-[var(--color-accent-glow)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-glow)]',
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </motion.header>
    </div>
  )
}
