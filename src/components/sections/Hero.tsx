import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { SocialIcons } from '@/components/ui/SocialIcons'
import { Button } from '@/components/ui/Button'
import { heroContent } from '@/data/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan backdrop-blur-md sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
          </span>
          Creative Growth Strategist &middot; AI Builder
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="gradient-text-animated">{heroContent.headline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-[var(--muted)] sm:text-lg md:text-xl"
        >
          {heroContent.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={() => (window.location.href = heroContent.primaryCta.href)}
            className="w-full sm:w-auto"
          >
            {heroContent.primaryCta.label}
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document.querySelector(heroContent.secondaryCta.href)?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="w-full sm:w-auto"
          >
            {heroContent.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <SocialIcons className="mt-12 justify-center" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--subtle)]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  )
}
