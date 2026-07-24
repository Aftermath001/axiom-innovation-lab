import { techStack } from "@/lib/site-data";
import { SectionEyebrow, SectionHeading } from "./Services";

export function TechStackWall() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>Technology Stack</SectionEyebrow>
        <SectionHeading>The technologies we ship in production every day.</SectionHeading>

        <div className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {techStack.map((t) => (
            <div
              key={t}
              className="group relative grid aspect-square place-items-center rounded-xl border border-border/60 bg-card/50 text-center transition-all hover:border-brand/40 hover:bg-card"
            >
              <span className="px-2 text-xs font-medium text-foreground/80 group-hover:text-brand">
                {t}
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-brand/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
