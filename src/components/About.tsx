import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Server, Smartphone } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Backend Development", level: 92, icon: Server },
    { name: "Mobile Development", level: 85, icon: Smartphone },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "Python", "Django", "PostgreSQL", "MongoDB", "AWS", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate About <span className="bg-gradient-primary bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 5 years of experience in full-stack development, I specialize in creating 
              scalable web applications and exceptional user experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slide-in">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer who loves turning complex problems into 
                  simple, beautiful solutions. My journey in technology started with curiosity 
                  and has evolved into a career dedicated to creating impactful digital experiences.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring aspiring developers in the community.
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies I Work With</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Core Expertise</h3>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={skill.name} className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;