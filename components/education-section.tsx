"use client";

import { GraduationCap, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const education = [
  {
    school: "Cebu Technological University - Tabogon Extension",
    degree: "Bachelor of Science in Information Technology",
    year: "2022 - 2026",
    notes: [
      "Focus on backend development and system design",
      "Capstone project: SchedWise Faculty Loading System",
      "Database management and software engineering coursework",
    ],
  },

  {
    school: "Doña Liling Neis Negapatan National High School",
    degree: "TVL – ICT (Animation)",
    year: "2016 – 2022",
    notes: [
      "Learned 2D animation using Adobe Flash (now Adobe Animate)",
      "Applied animation principles such as tweening, keyframes, and timeline control",
      "Created basic animated scenes, motion graphics, and interactive animations",
      "Developed foundational skills in digital drawing, asset creation, and visual storytelling",
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl font-semibold mb-8">Education</h2>
        </AnimatedSection>

        <div className="space-y-6">
          {education.map((item, index) => (
            <AnimatedSection key={item.school} delay={index * 100}>
              <div className="relative pl-8 pb-6 border-l-2 border-border last:pb-0">
                <div className="absolute -left-3 top-0 p-1.5 rounded-full bg-card border-2 border-accent">
                  <GraduationCap className="h-4 w-4 text-accent" />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-medium">{item.degree}</h3>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">{item.school}</p>

                  <ul className="mt-3 space-y-2">
                    {item.notes.map((note) => (
                      <li
                        key={note}
                        className="flex items-start gap-2 text-sm text-foreground/70"
                      >
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
