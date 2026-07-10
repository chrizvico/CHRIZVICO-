import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { featuredLinks } from '@/data/site'
import { SectionHeading } from '@/components/ui/SectionHeading'

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.003-3.03.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.278c-1.182 0-2.157-1.086-2.157-2.42 0-1.334.955-2.42 2.157-2.42 1.211 0 2.176 1.096 2.157 2.42 0 1.334-.955 2.42-2.157 2.42Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.334.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.946 2.42-2.157 2.42Z" />
    </svg>
  )
}

const platformMeta = {
  x: {
    icon: XIcon,
    name: 'X',
    cta: 'View Post',
    ring: 'from-white/20 to-white/5',
    iconColor: 'text-white',
  },
  discord: {
    icon: DiscordIcon,
    name: 'Discord',
    cta: 'Join Server',
    ring: 'from-[#5865F2]/30 to-[#5865F2]/10',
    iconColor: 'text-[#8b93ff]',
  },
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="View My Work"
          title="Find me on X & Discord."
          description="Direct links to my posts and communities — no fluff, just where the work happens."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredLinks.map((link, i) => {
            const meta = platformMeta[link.platform]
            const Icon = meta.icon
            return (
              <motion.a
                key={`${link.platform}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 backdrop-blur-xl transition-all duration-500 hover:border-brand-cyan/50 hover:bg-[var(--card-bg-hover)] hover:shadow-[0_0_45px_-10px_rgba(124,58,237,0.55)]"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.ring} ${meta.iconColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--subtle)]">
                    {meta.name}
                  </p>
                  <p className="truncate font-heading text-lg font-semibold text-[var(--fg)]">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">{meta.cta}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--subtle)] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-cyan" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
