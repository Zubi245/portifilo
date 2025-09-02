import { Code2, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Blog", href: "blog" },
    { label: "Contact", href: "contact" },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "Full-Stack Applications",
    "Mobile Development",
    "UI/UX Design",
    "Technical Consulting"
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@alexjohnson.dev", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary/90 shadow-glow"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary animate-glow" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                PAO Tec Solution
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate full-stack developer creating exceptional digital experiences 
              with modern technologies and innovative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <a
                  href="myselfhello455@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  myselfhello455@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <a
                  href="tel:+923396161226"
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  +923396161226
                </a>
              </div>
              <div>
                <p className="text-muted-foreground">Location</p>
                <span className="text-foreground">FAISALBAD, PK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Alex Johnson. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
              <span className="flex items-center gap-1">
                Made with <span className="text-red-500">♥</span> using React & TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;