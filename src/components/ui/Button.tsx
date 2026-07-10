import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white shadow-[0_0_25px_-5px_rgba(124,58,237,0.6)] hover:shadow-[0_0_40px_-5px_rgba(124,58,237,0.85)] hover:scale-[1.03]',
        secondary:
          'border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--fg)] backdrop-blur-md hover:border-brand-cyan/60 hover:bg-[var(--card-bg-hover)] hover:scale-[1.03]',
        ghost: 'text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--card-bg)]',
        outline:
          'border border-brand-purple/40 text-[var(--fg)] hover:border-brand-purple hover:bg-brand-purple/10',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-12 px-6 text-sm sm:text-base',
        lg: 'h-14 px-8 text-base sm:text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
