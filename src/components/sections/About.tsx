import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { aboutContent, nextGenContent } from '@/data/site'
import { GlassCard } from '@/components/ui/GlassCard'
import profileImage from '@/assets/profile.png'

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Profile visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-purple/40 via-brand-blue/20 to-brand-cyan/30 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-xl">
            <img
              src={profileImage}
              alt="Chrizvico profile photo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--bg-soft)] px-5 py-2 text-sm font-medium text-[var(--fg)] shadow-lg backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-brand-cyan" />
            AI + Creator
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="mb-3 inline-block rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            About Me
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl">
            {aboutContent.name}
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            {aboutContent.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1 text-xs font-medium text-[var(--muted)] sm:text-sm"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {aboutContent.description.map((p) => (
              <p key={p} className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {p}
              </p>
            ))}
          </div>

          <GlassCard className="mt-8" glow={false}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-[var(--fg)]">
                  {nextGenContent.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {nextGenContent.body}
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
