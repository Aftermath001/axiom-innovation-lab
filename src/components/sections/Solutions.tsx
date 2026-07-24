import { motion } from "motion/react";
import { solutions } from "@/lib/site-data";
import { SectionEyebrow, SectionHeading } from "./Services";

export function Solutions() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>Solutions</SectionEyebrow>
        <SectionHeading>Business outcomes, not just deliverables.</SectionHeading>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We measure our work by the outcomes we unlock — cost, speed, security and growth.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card-hover relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card/70 to-ink/40 p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold text-brand">{s.metric}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.metricLabel}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-brand/40 via-accent/30 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
