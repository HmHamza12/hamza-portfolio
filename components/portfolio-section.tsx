"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
//
import Image from "next/image"
import AnimationWrapper from "@/components/animation-wrapper"

const PortfolioSection = () => {
  const projects = [
    {
      title: "ScarAffiliate.com",
      description: "Plateforme d'affiliation complète avec système de gestion des programmes, suivi des conversions et dashboard analytique.",
      image: "/image.png",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "API"],
      demoUrl: "https://scaraffiliate.com",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Itritex.com",
      description: "Site web professionnel avec design moderne et fonctionnalités avancées pour une présence en ligne optimale.",
      image: "/image1.JPG",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "https://itritex.com",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Elrossi.store",
      description: "Boutique en ligne complète avec système de gestion des produits, panier d'achat et paiement sécurisé.",
      image: "/image2.JPG",
      technologies: ["E-commerce", "PHP", "MySQL", "JavaScript", "CSS"],
      demoUrl: "https://elrossi.store",
      githubUrl: "#",
      featured: true,
    },
  ]

  return (
    <section id="portfolio" className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Mes Projets</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez une sélection de mes réalisations récentes, alliant créativité et expertise technique.
            </p>
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimationWrapper 
              key={index} 
              direction="up" 
              delay={0.2 + (index * 0.1)}
              duration={0.8}
            >
              <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105 transform">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Projet phare</Badge>
                  )}
                  
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <AnimationWrapper 
                        key={techIndex} 
                        direction="up" 
                        delay={0.1 + (techIndex * 0.05)}
                        duration={0.4}
                      >
                        <Badge variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      </AnimationWrapper>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default PortfolioSection
