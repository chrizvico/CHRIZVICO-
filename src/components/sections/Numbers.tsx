import { motion } from 'framer-motion'
import { numbers } from '@/data/site'
import { useCountUp } from '@/hooks/useCountUp'

function Counter({
  value,
  suffix,
  label,
  display,
}: {
  value: number
  suffix: string
  label: string
  display?: string
}) {
  const { ref, value: current } = useCountUp(value)

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-bold text-[var(--fg)] sm:text-5xl md:text-6xl">
        <span className="gradient-text">
          {display ?? `${current}${suffix}`}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[var(--muted)] sm:text-base">
        {label}
      </p>
    </div>
  )
}

export function Numbers() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 backdrop-blur-xl sm:p-14 lg:grid-cols-4"
        >
          {numbers.map((n) => (
            <Counter
              key={n.label}
              value={n.value}
              suffix={n.suffix}
              label={n.label}
              display={n.display}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
