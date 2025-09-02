import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import taskManagerImg from "@/assets/project-taskmanager.jpg";
import healthcareImg from "@/assets/project-healthcare.jpg";
import socialAppImg from "@/assets/project-social-app.jpg";
import aiAnalyticsImg from "@/assets/project-ai-analytics.jpg";
import realEstateImg from "@/assets/project-realestate.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: ecommerceImg,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
      image: taskManagerImg,
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      category: "Web App",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Healthcare Dashboard",
      description: "Medical data visualization platform for healthcare professionals with patient management system.",
      image: healthcareImg,
      technologies: ["React", "Python", "Django", "Chart.js"],
      category: "Dashboard",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Mobile App",
      description: "Cross-platform social networking app with real-time messaging and content sharing features.",
      image: socialAppImg,
      technologies: ["React Native", "Firebase", "Node.js", "AWS"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics Tool",
      description: "Business intelligence platform using machine learning for predictive analytics and insights.",
      image: aiAnalyticsImg,
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system with virtual tours and mortgage calculator.",
      image: realEstateImg,
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Full-Stack", "Web App", "Mobile", "Dashboard", "AI/ML"];

  return (
    <section id="portfolio" className="py-20 bg-gradient-hero relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Portfolio
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating expertise across various 
              technologies and industries.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card/50 border-border backdrop-blur-sm hover:shadow-elegant group transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="aspect-video w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;