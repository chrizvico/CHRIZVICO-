# CHRIZVICO — Personal Brand Landing Page

Premium, dark-themed, glassmorphism landing page for **Chrizvico** — Creative Growth Strategist, AI Creator & Community Builder.

Built with React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion.

## Stack

- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme`, no `tailwind.config.js` needed)
- **Framer Motion** for scroll reveals, hover states, floating shapes, animated counters, testimonial slider
- **lucide-react** icons
- Hand-rolled `Button` / `GlassCard` / `SectionHeading` primitives (cva + clsx + tailwind-merge) — shadcn/ui-style API without the CLI dependency
- Class-based dark/light theme toggle via CSS variables (`src/hooks/useTheme.ts`)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/
    layout/        Navbar, Footer
    sections/       Hero, About, WhatIDo, Numbers, Services, HowIWork,
                     FeaturedProjects, Testimonials, Pricing, Contact
    ui/             Button, GlassCard, SectionHeading, AnimatedBackground,
                     SocialIcons, ThemeToggle
  data/site.ts      ← ALL copy, links, brand content lives here
  hooks/            useCountUp, useTheme
  lib/utils.ts      cn() helper (clsx + tailwind-merge)
  index.css         Tailwind v4 import, @theme tokens, light/dark CSS vars
```

## Editing Content

Everything — headline, bio, services, pricing, testimonials, socials, X posts,
Discord invites, Telegram, email — is centralized in **`src/data/site.ts`**.
Edit that one file to update copy across the whole site.

## Things To Personalize Before Launch

- Replace the placeholder "C" avatar in `About.tsx` with a real profile photo.
- Replace the gradient placeholders in `FeaturedProjects.tsx` / `src/data/site.ts`
  with real project screenshots and live case-study links.
- "Book a Call" buttons currently `mailto:` the address in `site.ts` — swap in
  a Calendly/Cal.com link if you have one.
- `public/og-image.png` is an AI-generated placeholder social preview — swap
  in your final brand asset before shipping.
- Update `https://chrizvico.com` throughout `index.html` / `public/sitemap.xml`
  if the final domain differs.

## SEO

- Full meta tags, Open Graph, Twitter Card, and JSON-LD `Person` structured
  data are in `index.html`.
- `public/robots.txt` and `public/sitemap.xml` are included.
- `vite.config.ts` uses `base: './'` so the build is portable to any static host
  or sub-path.

## Single-file Preview Build

`vite.config.preview.ts` + `vite-plugin-singlefile` produce a single
self-contained `index.html` (JS + CSS inlined) purely for quick sharing/preview:

```bash
npx vite build --config vite.config.preview.ts   # -> dist-preview/index.html
```

Use the normal `npm run build` (→ `dist/`) for actual deployment — it produces
properly code-split, cacheable assets.
