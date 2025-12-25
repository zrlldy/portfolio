"use client";

import { Lightbulb, Rocket, BookOpen, FlaskConical } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const interests = [
  {
    icon: FlaskConical,
    title: "Backend Architecture",
    description:
      "Designing structured backend systems using Laravel, Livewire, and RESTful principles with a focus on clean data flow",
  },
  {
    icon: Rocket,
    title: "Workflow Automation",
    description:
      "Automating repetitive academic and administrative processes through custom web systems and smart backend logic",
  },
  {
    icon: BookOpen,
    title: "System Design & Learning",
    description:
      "Continuously improving system design skills while transitioning from Laravel to NestJS and TypeScript",
  },
  {
    icon: Lightbulb,
    title: "Applied Research",
    description:
      "Turning academic research and capstone ideas into practical, real world software solutions",
  },
];

export function BeyondCodingSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mb-2">Beyond Coding</h2>
          <p className="text-muted-foreground mb-8">
            What keeps me curious outside of work projects
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {interests.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className="p-5 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors h-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-muted">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
