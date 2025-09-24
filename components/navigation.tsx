"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#competences", label: "Compétences" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToHash = (hash: string) => {
    const targetId = hash.replace('#', '')
    const target = document.getElementById(targetId)
    if (!target) return

    const navbarOffset = 80
    const startY = window.pageYOffset
    const targetY = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset
    const distance = targetY - startY
    const duration = 600 // ms

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#accueil" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Hamza Mouttaki
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToHash(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToHash(item.href)
                    setIsOpen(false)
                  }}
                  className="block px-3 py-2 text-left w-full text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
