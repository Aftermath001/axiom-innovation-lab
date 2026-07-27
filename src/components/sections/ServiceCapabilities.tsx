import { SectionEyebrow, SectionHeading } from "./Services";

interface Capability {
  title: string;
  description: string;
}

interface ServiceCapabilitiesProps {
  eyebrow?: string;
  heading?: string;
  capabilities: Capability[];
}

export function ServiceCapabilities({ eyebrow = "Key Capabilities", heading = "What we bring to every engagement.", capabilities }: ServiceCapabilitiesProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionHeading>{heading}</SectionHeading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.title} className="card-hover rounded-2xl border border-border/60 bg-card/60 p-6">
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
