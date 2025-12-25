"use client";

import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";

const contactLinks = [
  {
    href: "mailto:jeroldnoynay123@gmail.com",
    icon: Mail,
    label: "Email",
    value: "jeroldnoynay123@gmail.com",
  },
  {
    href: "https://github.com/zrlldy",
    icon: Github,
    label: "GitHub",
    value: "github.com/zrlldy",
  },
  {
    href: "https://www.linkedin.com/in/jerold-noynay-660729369/",
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jeroldnoynay",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-2 mb-8">
            <Send className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">
              Get in Touch
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100} glow>
          <div className="bg-muted/30 rounded-lg p-8 border border-border dark:shadow-xl dark:shadow-accent/5">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, opportunities, or just
              having a conversation about backend development and system
              architecture. Feel free to reach out through any of the channels
              below.
            </p>

            <div className="space-y-4 mb-8">
              {contactLinks.map((link, index) => (
                <AnimatedSection key={link.label} delay={200 + index * 100}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-md bg-background border border-border hover:border-accent/50 hover:bg-muted/50 transition-all group dark:hover:shadow-lg dark:hover:shadow-accent/10"
                  >
                    <div className="p-2 rounded-md bg-muted group-hover:bg-accent/10 transition-colors dark:group-hover:shadow-sm dark:group-hover:shadow-accent/20">
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {link.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {link.value}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={500}>
              <div className="pt-6 border-t border-border">
                <Button
                  asChild
                  className="w-full sm:w-auto dark:shadow-lg dark:shadow-accent/20"
                >
                  <a href="mailto:jeroldnoynay123@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send me a message
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
