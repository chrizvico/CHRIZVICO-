import { motion } from 'framer-motion'
import { Check, Cpu, LineChart, MessageCircle, Sparkles, type LucideIcon } from 'lucide-react'
import { services } from '@/data/site'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const icons: Record<string, LucideIcon> = {
  MessageCircle,
  Cpu,
  Sparkles,
  LineChart,
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to scale."
          description="End-to-end community, content and AI systems built for growth."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlassCard className="h-full">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-purple/25 to-brand-blue/25 text-brand-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[var(--fg)] sm:text-xl">
                      {service.category}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-[var(--muted)] sm:text-base">
                        <Check className="h-4 w-4 shrink-0 text-brand-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
