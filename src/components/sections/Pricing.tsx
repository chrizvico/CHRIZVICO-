import { motion } from 'framer-motion'
import { Check, Minus, Star } from 'lucide-react'
import { pricing, socials } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent plans."
          description="Start with a free consultation, or go all-in with a custom growth partnership."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                'relative flex h-full flex-col rounded-3xl border p-8 backdrop-blur-xl',
                plan.popular
                  ? 'border-brand-purple/60 bg-gradient-to-b from-brand-purple/10 via-[var(--card-bg)] to-[var(--card-bg)] shadow-[0_0_60px_-15px_rgba(124,58,237,0.5)]'
                  : 'border-[var(--card-border)] bg-[var(--card-bg)]',
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </span>
              )}

              <h3 className="font-heading text-xl font-semibold text-[var(--fg)] sm:text-2xl">
                {plan.name}
              </h3>
              <div className="mt-3 font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
                {plan.price}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[var(--muted)] sm:text-base">
                    <Check className="h-4 w-4 shrink-0 text-brand-cyan" />
                    {f}
                  </li>
                ))}
                {plan.excluded.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[var(--subtle)] sm:text-base">
                    <Minus className="h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                className="mt-8 w-full"
                onClick={() => (window.location.href = `mailto:${socials.email}`)}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
