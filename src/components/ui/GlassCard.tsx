import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean
}

export function GlassCard({ className, glow = true, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 backdrop-blur-xl transition-all duration-500',
        glow &&
          'hover:border-brand-purple/50 hover:bg-[var(--card-bg-hover)] hover:shadow-[0_0_45px_-10px_rgba(124,58,237,0.55)] hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-brand-purple/0 via-brand-blue/0 to-brand-cyan/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-brand-purple/20 group-hover:via-brand-blue/10 group-hover:to-brand-cyan/20 group-hover:opacity-100" />
      )}
      {children}
    </div>
  )
}
