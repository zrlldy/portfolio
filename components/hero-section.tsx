"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function HeroSection() {
  return (
    <section id="about" className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <AnimatedSection className="shrink-0" glow>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border shadow-sm dark:shadow-accent/20 dark:shadow-lg">
              <Image
                src="/profile.jpeg"
                alt="Profile photo"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </AnimatedSection>

          <div className="space-y-6 flex-1">
            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-balance">
                Jerold Noynay
              </h1>

              <p className="text-lg text-muted-foreground dark:text-accent mt-2">
                Back End Developer
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} glow>
              <p className="text-lg text-muted-foreground dark:text-accent">
                Laravel & Livewire | Exploring Nest.js & TypeScript
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="pt-2 space-y-4 text-foreground/80 leading-relaxed max-w-2xl">
                <p>
                  I am a beginner backend developer who enjoys building
                  functional systems, learning clean coding practices, and
                  designing efficient databases. I focus on solving real-world
                  problems while continuously improving my development skills.
                </p>
                <p>
                  Currently expanding my expertise from Laravel and Livewire
                  into the Nest.js and TypeScript ecosystem, bringing the same
                  attention to structure and system efficiency.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500} glow>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity dark:shadow-lg dark:shadow-accent/20"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
