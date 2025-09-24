"use client"

import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"
import Image from "next/image"

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Développement",
      description: "Code propre et performant avec les dernières technologies",
    },
    {
      icon: Palette,
      title: "Design UI/UX",
      description: "Interfaces modernes et expériences utilisateur intuitives",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation pour des sites web rapides et efficaces",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe et communication transparente",
    },
  ]

  return (
    <section id="apropos" className="scroll-mt-24 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/web-developer-office.png"
                alt="Hamza au travail"
                width={400}
                height={500}
                className="rounded-lg object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">À propos de moi</h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Développeur web passionné basé au Maroc, je me spécialise dans la création d'applications web modernes
                et performantes. Mon parcours m'a permis de maîtriser un large éventail de technologies, du front-end au
                back-end.
              </p>

              <p className="text-pretty">
                Avec une solide expertise en <strong className="text-foreground">HTML, CSS, JavaScript</strong>, et des
                frameworks comme <strong className="text-foreground">Laravel</strong>, je crée des solutions sur mesure
                qui allient esthétique et fonctionnalité. Mon approche combine développement technique et sensibilité
                design pour offrir des expériences utilisateur exceptionnelles.
              </p>

              <p className="text-pretty">
                Toujours à l'affût des dernières tendances technologiques, j'aime relever de nouveaux défis et
                collaborer sur des projets innovants qui font la différence.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 border-border/50 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
