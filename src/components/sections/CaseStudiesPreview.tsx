import { caseStudies } from "@/lib/site-data";
import { SectionEyebrow, SectionHeading } from "./Services";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CaseStudiesPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Case Studies</SectionEyebrow>
            <SectionHeading>Outcomes we've engineered.</SectionHeading>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/case-studies">All case studies <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-hover flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60"
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand/25 via-accent/20 to-ink">
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-2xl font-semibold text-foreground/90">{c.client}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[10px] uppercase tracking-widest text-brand">{c.industry}</div>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{c.solution}</p>
                <ul className="mt-4 space-y-1.5">
                  {c.results.slice(0, 2).map((r) => (
                    <li key={r} className="flex items-center gap-2 text-xs text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
