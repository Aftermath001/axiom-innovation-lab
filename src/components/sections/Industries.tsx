import { industries } from "@/lib/site-data";
import { SectionEyebrow, SectionHeading } from "./Services";

export function Industries() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-orb -left-24 top-1/2 h-72 w-72 bg-accent/25" />
      <div className="container-wide relative">
        <SectionEyebrow>Industries</SectionEyebrow>
        <SectionHeading>Deep expertise across regulated & scaling sectors.</SectionHeading>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="card-hover group flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary/60 text-brand ring-1 ring-border/60 transition-colors group-hover:bg-brand/10">
                <ind.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{ind.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
