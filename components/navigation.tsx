"use client";

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const isManualScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Only update if not manually scrolling and element is intersecting
          if (entry.isIntersecting && !isManualScrolling.current) {
            setActiveSection(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "-80px 0px -50% 0px", // Account for header and detect when section is in upper half
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();

      const element = document.getElementById(id);
      if (!element) return;

      isManualScrolling.current = true;
      setActiveSection(id);
      window.history.replaceState(null, "", `#${id}`);

      const headerOffset = 80;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = elementTop - headerOffset;

      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      });

      // Reset flag after scroll animation completes
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 800);
    },
    [],
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border"
          : ""
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("about");
            window.history.replaceState(null, "", window.location.pathname);
          }}
          className="font-medium text-foreground hover:text-accent transition-colors"
        >
          {"</Zrlldy>"}
        </button>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm transition-colors ${
                    activeSection === link.id
                      ? "text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
