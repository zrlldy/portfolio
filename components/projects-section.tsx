"use client";

import { ExternalLink, Github, Folder, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const projects = [
  {
    title: "SchedWise",
    subtitle: "Faculty Loading and Scheduling System",
    description:
      "A web-based system designed to manage faculty loading, timetable creation, and room assignments for CTU Tabogon Extension. Strong focus on backend logic, relational database design, and Livewire-driven interactivity.",
    focusAreas: [
      "Database relationships",
      "Scheduling logic",
      "Maintainable backend architecture",
    ],
    techStack: ["Laravel", "Livewire", "MySQL", "PHP"],
    featured: true,
  },
  {
    title: "Future Projects",
    subtitle: "Nest.js & TypeScript Experiments",
    description:
      "Space reserved for upcoming backend experiments using Nest.js and TypeScript. Exploring modern Node.js patterns, API design, and type-safe development.",
    focusAreas: ["API architecture", "Type safety", "Modern Node.js patterns"],
    techStack: ["Nest.js", "TypeScript", "PostgreSQL"],
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mb-2">Projects </h2>
          <p className="text-muted-foreground mb-8">
            A collection of backend-focused work and experiments
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={index * 150}
              glow={project.featured}
            >
              <article
                className={`group p-6 rounded-lg bg-card border border-border hover:border-accent/40 transition-all ${
                  project.featured
                    ? "ring-1 ring-accent/20 dark:shadow-lg dark:shadow-accent/10"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-md bg-muted shrink-0">
                    <Folder className="h-5 w-5 text-accent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      {project.featured && (
                        <span className="px-2 py-0.5 text-xs bg-accent/10 text-accent rounded-full dark:shadow-sm dark:shadow-accent/30">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Key Focus Areas
                      </p>
                      <ul className="space-y-1">
                        {project.focusAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-center gap-2 text-sm text-foreground/70"
                          >
                            <ChevronRight className="h-3 w-3 text-accent" />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-muted rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.featured && (
                      <div className="flex gap-3 mt-5 pt-5 border-t border-border">
                        <a
                          href="https://github.com/zrlldy/schedwise"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                        <a
                          href="https://www.schedwise.me/"
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
