import { motion } from 'framer-motion'
import { Bot, Clapperboard, TrendingUp, Users, type LucideIcon } from 'lucide-react'
import { whatIDo } from '@/data/site'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const icons: Record<string, LucideIcon> = {
  Users,
  Bot,
  Clapperboard,
  TrendingUp,
}

export function WhatIDo() {
  return (
    <section id="what-i-do" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Growth engines, not vanity metrics."
          description="Four pillars that turn attention into loyal, active communities."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 text-brand-cyan transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
