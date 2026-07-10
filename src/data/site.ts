// Central content/config for the CHRIZVICO personal brand landing page.
// Edit this file to update copy, links, and structured data across the site.

export const site = {
  name: 'CHRIZVICO',
  title: 'CHRIZVICO | Creative Growth Strategist, AI Creator & Community Builder',
  description:
    'Creative Growth Strategist helping Web3, AI and startup communities scale through content, community building, AI automation and growth systems.',
  url: 'https://chrizvico.com',
  ogImage: '/og-image.png',
  themeColor: '#7C3AED',
  keywords: [
    'Chrizvico',
    'Community Builder',
    'AI Automation',
    'AI Agent Builder',
    'Creative Growth Strategist',
    'Web3 Community Growth',
    'Prompt Engineer',
    'Content Strategy',
  ],
}

export const socials = {
  x: 'https://x.com/Chriz_211',
  xPosts: [
    'https://x.com/Chriz_211/status/2002993494466388217',
    'https://x.com/Chriz_211/status/2075113432173387910',
    'https://x.com/Chriz_211/status/2071834164358267022',
    'https://x.com/Chriz_211/status/2068571175261733153',
  ],
  discordServers: ['https://discord.gg/AA48JcdMW', 'https://discord.gg/ufcrAfCyD'],
  discordHandle: 'Vico_211',
  telegram: 'https://t.me/Chriz2111',
  email: 'Itzchrizvico@gmail.com',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  headline: 'Build Communities That Actually Grow.',
  tagline:
    'Helping founders, AI startups and Web3 projects scale through community building, content strategy, AI automation and creator marketing.',
  primaryCta: { label: 'Book a Call', href: `mailto:${socials.email}` },
  secondaryCta: { label: 'View My Work', href: '#projects' },
}

export const aboutContent = {
  name: 'Chrizvico',
  roles: [
    'Creative Growth Strategist',
    'Community Builder',
    'Prompt Engineer',
    'AI Video Creator',
    'AI Agent Builder',
  ],
  description: [
    'I help startups and Web3 projects build communities that people genuinely love to be part of.',
    'From creator campaigns to AI workflows, community systems, viral content and engagement strategies, I build growth engines instead of chasing vanity metrics.',
  ],
}

export const nextGenContent = {
  title: 'How NEXT-GEN Is Helping Me',
  body:
    'NEXT-GEN has truly been helping me through frequent AI teaching, showing me how to automate AI agents and helping me earn while building — a community focused on empowering creators to support, connect, learn, grow and earn.',
}

export const whatIDo = [
  {
    title: 'Community Growth',
    description: 'Scale Discord, Telegram and X communities.',
    icon: 'Users',
  },
  {
    title: 'AI Automation',
    description: 'Prompt engineering, AI workflows and AI agents.',
    icon: 'Bot',
  },
  {
    title: 'AI Content Creation',
    description: 'Short videos, graphics and viral content.',
    icon: 'Clapperboard',
  },
  {
    title: 'Growth Strategy',
    description: "Marketing systems that turn attention into users. Let's talk.",
    icon: 'TrendingUp',
  },
]

export const numbers = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Campaigns Worked On' },
  { value: 20, suffix: '+', label: 'Communities Helped' },
  { value: 0, suffix: '', label: 'Users Reached', display: 'Thousands' },
]

export const services = [
  {
    category: 'Community Management',
    items: ['Discord Setup', 'Telegram Growth', 'X Growth Strategy'],
    icon: 'MessageCircle',
  },
  {
    category: 'AI Automation',
    items: ['Prompt Engineering', 'AI Agent Building', 'Workflow Automation'],
    icon: 'Cpu',
  },
  {
    category: 'Content Strategy',
    items: ['Creator Campaigns', 'Viral Content Systems', 'Video & Graphics'],
    icon: 'Sparkles',
  },
  {
    category: 'Growth Consulting',
    items: ['Growth Audits', 'Custom Roadmaps', 'Weekly Reporting'],
    icon: 'LineChart',
  },
]

export const howIWork = [
  { step: '01', title: 'Discovery', description: 'Understanding your project.' },
  { step: '02', title: 'Strategy', description: 'Creating a custom growth plan.' },
  { step: '03', title: 'Execution', description: 'Content, community and AI systems.' },
  { step: '04', title: 'Scale', description: 'Optimize and grow continuously.' },
]

// Real links only — no fabricated project copy. Each entry links straight out
// to the actual X post or Discord server provided for the brand.
export const featuredLinks = [
  { platform: 'x' as const, label: 'X Post #1', href: socials.xPosts[0] },
  { platform: 'x' as const, label: 'X Post #2', href: socials.xPosts[1] },
  { platform: 'x' as const, label: 'X Post #3', href: socials.xPosts[2] },
  { platform: 'x' as const, label: 'X Post #4', href: socials.xPosts[3] },
  { platform: 'discord' as const, label: 'NEXT-GEN Community', href: socials.discordServers[0] },
  { platform: 'discord' as const, label: 'Community Server', href: socials.discordServers[1] },
]

export const testimonials = [
  {
    quote: 'Working with Chriz transformed our community.',
    name: 'Founder',
    rating: 5,
  },
  {
    quote: 'Our engagement increased dramatically.',
    name: 'Community Lead',
    rating: 5,
  },
  {
    quote: 'His AI workflows saved us countless hours.',
    name: 'Startup Founder',
    rating: 5,
  },
  {
    quote: "One of the best community strategists we've worked with.",
    name: 'Marketing Manager',
    rating: 5,
  },
]

export const pricing = [
  {
    name: 'Free Consultation',
    price: 'Free',
    popular: false,
    features: ['Discovery Call', 'Community Review', 'Growth Suggestions'],
    excluded: ['No implementation'],
    cta: 'Book Free Call',
  },
  {
    name: 'Professional Growth',
    price: 'Custom Pricing',
    popular: true,
    features: [
      'Everything in Consultation',
      'Growth Strategy',
      'AI Systems',
      'Content Plan',
      'Community Management',
      'Weekly Reporting',
      'Priority Support',
    ],
    excluded: [],
    cta: 'Get Started',
  },
]
