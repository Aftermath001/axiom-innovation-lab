import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", to: "/services/software-development" },
      { label: "AI & Automation", to: "/services/ai-automation" },
      { label: "Cloud Solutions", to: "/services/cloud-solutions" },
      { label: "Cybersecurity", to: "/services/cybersecurity" },
      { label: "IT Consulting", to: "/services/it-consulting" },
      { label: "Managed IT Services", to: "/services/managed-it-services" },
      { label: "Data & Analytics", to: "/services/data-analytics" },
      { label: "Digital Transformation", to: "/services/digital-transformation" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial Services", to: "/industries" },
      { label: "Healthcare", to: "/industries" },
      { label: "Government", to: "/industries" },
      { label: "Logistics", to: "/industries" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "Contact", to: "/contact" },
      { label: "Book Consultation", to: "/consultation" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-ink">
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              MetaMind Limited is a Nairobi-headquartered technology consultancy engineering
              intelligent digital transformation for ambitious African and global organizations.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Github, href: "#", label: "GitHub" },
                { Icon: Mail, href: "mailto:hello@metamind.co.ke", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 transition-colors hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MetaMind Limited. Nairobi, Kenya. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Engineered in Nairobi · Delivering globally
          </p>
        </div>
      </div>
    </footer>
  );
}
