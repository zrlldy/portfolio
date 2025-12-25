"use client";

import { Database, Server, Code, Terminal, Palette } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const skillGroups = [
  {
    title: "Backend Stack",
    icon: Server,
    skills: ["Laravel", "Livewire", "PHP", "Nest.js", "TypeScript"],
    highlight: true,
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: ["MySQL", "Git", "REST APIs", "Database Design"],
    highlight: false,
  },
  {
    title: "Supporting Skills",
    icon: Code,
    skills: ["JavaScript", "HTML", "CSS", "Tailwind CSS"],
    highlight: false,
  },
  {
    title: "Graphics Design",
    icon: Palette,
    skills: ["After Effects", "Illustrator", "Affinity", "Motion Graphics"],
    highlight: false,
  },
  {
    title: "Currently Learning",
    icon: Terminal,
    skills: ["TypeScript", "Node.js", "Nest.js", "PostgreSQL"],
    highlight: true,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mb-8">Skills Workspace</h2>
        </AnimatedSection>

        <div className="grid gap-6">
          {skillGroups.map((group, index) => (
            <AnimatedSection
              key={group.title}
              delay={index * 100}
              glow={group.highlight}
            >
              <div
                className={`p-5 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors ${
                  group.highlight ? "dark:shadow-lg dark:shadow-accent/10" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-md bg-muted ${group.highlight ? "dark:bg-accent/10 dark:shadow-sm dark:shadow-accent/20" : ""}`}
                  >
                    <group.icon
                      className={`h-4 w-4 ${group.highlight ? "text-accent" : "text-muted-foreground"}`}
                    />
                  </div>
                  <h3 className="font-medium">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
