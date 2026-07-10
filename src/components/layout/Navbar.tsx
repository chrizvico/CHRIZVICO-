import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300 sm:px-6',
          scrolled &&
            'border border-[var(--card-border)] bg-[var(--nav-bg)] py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl',
        )}
      >
        <a
          href="#home"
          className="font-heading text-lg font-bold tracking-tight text-[var(--fg)] sm:text-xl"
        >
          <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan bg-clip-text text-transparent">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <Button size="sm" onClick={() => (window.location.href = '#contact')}>
            Book a Call
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] text-[var(--fg)]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-soft)] p-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-[var(--muted)] hover:text-[var(--fg)]"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full"
                onClick={() => {
                  setOpen(false)
                  window.location.href = '#contact'
                }}
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
