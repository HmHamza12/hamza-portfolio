"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import AnimationWrapper from "@/components/animation-wrapper"

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "JavaScript", level: 90, icon: "⚡" },
        { name: "React", level: 80, icon: "⚛️" },
        { name: "Vue.js", level: 75, icon: "💚" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: 90, icon: "🐘" },
        { name: "Laravel", level: 85, icon: "🔥" },
        { name: "MySQL", level: 85, icon: "🗄️" },
        { name: "Node.js", level: 70, icon: "🟢" },
      ],
    },
    {
      title: "Design & Outils",
      skills: [
        { name: "UI/UX Design", level: 85, icon: "🎨" },
        { name: "Figma", level: 80, icon: "🔧" },
        { name: "Git", level: 90, icon: "📝" },
        { name: "Responsive Design", level: 95, icon: "📱" },
      ],
    },
  ]

  const tools = ["VS Code", "Git", "Figma",]

  return (
    <section id="competences" className="scroll-mt-24 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Mes Compétences</h2>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Technologies et outils que je maîtrise pour créer des solutions web complètes et performantes.
            </p>
          </div>
        </AnimationWrapper>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <AnimationWrapper 
              key={categoryIndex} 
              direction="up" 
              delay={0.2 + (categoryIndex * 0.1)}
              duration={0.8}
            >
              <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center text-foreground">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <AnimationWrapper 
                        key={skillIndex} 
                        direction="left" 
                        delay={0.3 + (skillIndex * 0.1)}
                        duration={0.6}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{skill.icon}</span>
                              <span className="font-medium text-foreground">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </AnimationWrapper>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>

        {/* Tools */}
        <AnimationWrapper direction="up" delay={0.4}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Outils & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <AnimationWrapper 
                  key={index} 
                  direction="up" 
                  delay={0.5 + (index * 0.1)}
                  duration={0.5}
                >
                  <div className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 transition-colors hover:scale-105 transform">
                    {tool}
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default SkillsSection
