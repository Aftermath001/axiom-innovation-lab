import { motion } from "motion/react";
import { serviceLinks } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>Services</SectionEyebrow>
        <SectionHeading>
          A complete stack of technology services, delivered by senior teams.
        </SectionHeading>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceLinks.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to="/services"
                className="card-hover group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card/60 p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 transition-transform group-hover:scale-105">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ArrowUpRight className="mt-6 h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6 bg-brand" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">{children}</span>
    </div>
  );
}
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}
