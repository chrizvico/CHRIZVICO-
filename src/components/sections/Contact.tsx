import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { socials } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { AnimatedBackground } from '@/components/ui/AnimatedBackground'

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

const contactLinks = [
  { key: 'x', label: 'X (Twitter)', value: '@Chriz_211', href: socials.x, icon: XIcon },
  {
    key: 'discord',
    label: 'Discord',
    value: socials.discordHandle,
    href: socials.discordServers[0],
    icon: DiscordIcon,
  },
  { key: 'telegram', label: 'Telegram', value: 't.me/Chriz2111', href: socials.telegram, icon: Send },
  { key: 'email', label: 'Email', value: socials.email, href: `mailto:${socials.email}`, icon: Mail },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl"
        >
          Let&apos;s Build Something{' '}
          <span className="gradient-text-animated">Amazing Together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-base text-[var(--muted)] sm:text-lg"
        >
          Ready to scale your community, automate your workflows and turn attention into loyal
          users? Reach out on any platform below.
        </motion.p>

        <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 text-left backdrop-blur-xl transition-colors hover:border-brand-cyan/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple/25 to-brand-cyan/25 text-brand-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-medium uppercase tracking-wide text-[var(--subtle)]">
                    {link.label}
                  </p>
                  <p className="truncate text-sm font-medium text-[var(--fg)] sm:text-base">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Button size="lg" onClick={() => (window.location.href = `mailto:${socials.email}`)}>
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
