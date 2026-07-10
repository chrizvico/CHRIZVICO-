import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import type { Theme } from '@/hooks/useTheme'

export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme
  onToggle: () => void
}) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark and light theme"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--fg)] backdrop-blur-md transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {isDark ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
      </motion.div>
    </button>
  )
}
