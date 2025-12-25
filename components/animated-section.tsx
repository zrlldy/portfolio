"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  glow?: boolean
}

export function AnimatedSection({ children, className, delay = 0, glow = false }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.98]",
        glow && "dark:relative",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {glow && (
        <div
          className={cn(
            "absolute -inset-4 rounded-2xl opacity-0 blur-2xl transition-opacity duration-700 pointer-events-none -z-10",
            "bg-accent/20 dark:bg-accent/30",
            isVisible && "dark:opacity-100",
          )}
        />
      )}
      {children}
    </div>
  )
}
