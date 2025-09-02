import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  Server, 
  Smartphone, 
  Globe, 
  Database,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive web applications built with React, Vue.js, and cutting-edge technologies.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      price: "Starting at $2,500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions with robust APIs, databases, and cloud infrastructure.",
      features: ["Node.js & Python", "REST & GraphQL APIs", "Database Design", "Cloud Deployment"],
      price: "Starting at $3,000"
    },
    {
      icon: Globe,
      title: "Full-Stack Applications",
      description: "End-to-end web application development from concept to deployment.",
      features: ["Complete Web Apps", "Database Integration", "User Authentication", "Payment Systems"],
      price: "Starting at $5,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that work seamlessly on iOS and Android.",
      features: ["React Native", "Flutter", "Native Performance", "App Store Deployment"],
      price: "Starting at $4,000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
      features: ["Design Systems", "Prototyping", "User Research", "Accessibility"],
      price: "Starting at $1,500"
    },
    {
      icon: Database,
      title: "Technical Consulting",
      description: "Strategic technical guidance to help you make the right technology decisions.",
      features: ["Architecture Review", "Performance Audit", "Technology Stack", "Best Practices"],
      price: "Starting at $150/hr"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What I Can <span className="bg-gradient-primary bg-clip-text text-transparent">Do For You</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I offer comprehensive development services to bring your ideas to life 
              with modern technology and best practices.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title} 
                  className="bg-gradient-card border-border backdrop-blur-sm hover:shadow-elegant group transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                        onClick={scrollToContact}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your ideas and turn them into reality. I'm here to help you 
                build something amazing.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 shadow-glow"
                onClick={scrollToContact}
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;