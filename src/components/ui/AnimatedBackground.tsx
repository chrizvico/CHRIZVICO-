import { motion } from 'framer-motion'

/**
 * Full-viewport animated gradient + floating glowing orbs.
 * Purely decorative — sits behind hero content with pointer-events disabled.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base animated gradient wash */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.25),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(34,211,238,0.18),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(37,99,235,0.22),_transparent_50%)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating glowing shapes */}
      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-purple/30 blur-[100px]"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand-blue/25 blur-[120px]"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-cyan/20 blur-[110px]"
        animate={{ y: [0, 30, 0], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]" />

      {/* Noise-ish grain via fine dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:22px_22px] opacity-40" />
    </div>
  )
}
