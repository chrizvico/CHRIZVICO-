import { motion } from 'framer-motion'
import { howIWork } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function HowIWork() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How I Work"
          title="A simple, proven process."
          description="From discovery to scale — a repeatable system for sustainable growth."
        />

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan sm:block lg:left-1/2" />

          <div className="space-y-10 lg:space-y-16">
            {howIWork.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 lg:items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse lg:text-right' : ''
                }`}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-purple/40 bg-[var(--bg-soft)] font-heading text-sm font-bold text-brand-cyan shadow-[0_0_25px_-5px_rgba(124,58,237,0.6)] lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  {step.step}
                </div>

                <div
                  className={`flex-1 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 backdrop-blur-xl lg:w-[calc(50%-3rem)] ${
                    i % 2 === 1 ? 'lg:mr-auto' : 'lg:ml-auto'
                  }`}
                >
                  <h3 className="font-heading text-xl font-semibold text-[var(--fg)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
