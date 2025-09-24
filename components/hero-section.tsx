"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  const scrollToId = (id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    const navbarOffset = 80
    const startY = window.pageYOffset
    const targetY = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset
    const distance = targetY - startY
    const duration = 600
    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutQuad(progress)
      window.scrollTo(0, startY + distance * eased)
      if (elapsed < duration) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
  return (
    <section id="accueil" className="scroll-mt-24 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg animate-fade-in-up animate-delay-100">Bonjour, je suis</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance animate-fade-in-up animate-delay-200">
                <span className="text-foreground">Hamza</span> <span className="text-primary">Mouttaki</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground text-pretty animate-fade-in-up animate-delay-300">
                Développeur web & designer créatif
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty animate-fade-in-up animate-delay-400">
              Passionné par la création d'expériences web modernes et intuitives. Je transforme vos idées en solutions
              digitales élégantes et performantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToId("portfolio")}
              >
                Voir mes projets
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToId("contact")}
              >
                Me contacter
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 animate-fade-in-up animate-delay-400">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                <a href="https://github.com/HmHamza12" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                <a href="https://www.linkedin.com/in/hamza-mouttaki-137537386/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                <a href="mailto:hamzamouttaki58@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <Image
                    src="/web-developer-headshot.png"
                    alt="Hamza Mouttaki"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default HeroSection
