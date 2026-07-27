import { SectionEyebrow, SectionHeading } from "./Services";

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceProcessProps {
  eyebrow?: string;
  heading?: string;
  steps: ProcessStep[];
}

export function ServiceProcess({ eyebrow = "Our Process", heading = "A proven delivery model, every time.", steps }: ServiceProcessProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionHeading>{heading}</SectionHeading>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="card-hover relative rounded-2xl border border-border/60 bg-card/60 p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-brand/80">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
