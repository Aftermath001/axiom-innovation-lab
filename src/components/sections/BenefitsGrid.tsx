import { SectionEyebrow, SectionHeading } from "./Services";

interface Benefit {
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

interface BenefitsGridProps {
  eyebrow?: string;
  heading?: string;
  benefits: Benefit[];
}

export function BenefitsGrid({ eyebrow = "Benefits", heading = "Measurable outcomes from day one.", benefits }: BenefitsGridProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionHeading>{heading}</SectionHeading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="card-hover rounded-2xl border border-border/60 bg-card/60 p-6">
              {b.metric && (
                <div className="text-3xl font-semibold text-brand">{b.metric}</div>
              )}
              <h3 className="mt-2 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              {b.metricLabel && <p className="mt-1 text-xs text-muted-foreground">{b.metricLabel}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
