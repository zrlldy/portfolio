import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { BeyondCodingSection } from "@/components/beyond-coding-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <BeyondCodingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
