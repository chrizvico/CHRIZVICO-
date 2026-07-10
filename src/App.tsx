import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { WhatIDo } from '@/components/sections/WhatIDo'
import { Numbers } from '@/components/sections/Numbers'
import { Services } from '@/components/sections/Services'
import { HowIWork } from '@/components/sections/HowIWork'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] font-body text-[var(--fg)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Numbers />
        <Services />
        <HowIWork />
        <FeaturedProjects />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
