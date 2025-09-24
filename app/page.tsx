import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AnimationWrapper from "@/components/animation-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AnimationWrapper direction="up" delay={0.2}>
        <HeroSection />
      </AnimationWrapper>
      <AnimationWrapper direction="up" delay={0.1}>
        <AboutSection />
      </AnimationWrapper>
      <AnimationWrapper direction="up" delay={0.1}>
        <PortfolioSection />
      </AnimationWrapper>
      <AnimationWrapper direction="up" delay={0.1}>
        <SkillsSection />
      </AnimationWrapper>
      <AnimationWrapper direction="up" delay={0.1}>
        <ContactSection />
      </AnimationWrapper>
      <Footer />
    </main>
  )
}
