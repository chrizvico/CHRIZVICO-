import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const current = testimonials[index]

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Testimonials" title="What people say." />

        <div className="relative rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 backdrop-blur-xl sm:p-12">
          <Quote className="h-10 w-10 text-brand-purple/40" />

          <div className="relative mt-4 min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1 text-brand-cyan">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 font-heading text-xl font-medium leading-relaxed text-[var(--fg)] sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
                  &mdash; {current.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-brand-cyan' : 'w-2 bg-[var(--card-border)]'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] text-[var(--muted)] transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] text-[var(--muted)] transition-colors hover:border-brand-cyan/60 hover:text-brand-cyan"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
