import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">{"</Zrlldy>"}</p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
