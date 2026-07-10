import { site, socials } from '@/data/site'
import { SocialIcons } from '@/components/ui/SocialIcons'

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--card-border)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-heading text-lg font-bold">
            <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan bg-clip-text text-transparent">
              {site.name}
            </span>
          </p>
          <p className="mt-1 text-sm text-[var(--subtle)]">
            &copy; {new Date().getFullYear()} {site.name}. Building communities that actually grow.
          </p>
        </div>

        <SocialIcons />

        <a
          href={`mailto:${socials.email}`}
          className="text-sm text-[var(--muted)] transition-colors hover:text-brand-cyan"
        >
          {socials.email}
        </a>
      </div>
    </footer>
  )
}
