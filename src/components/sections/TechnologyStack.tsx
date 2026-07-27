import { SectionEyebrow, SectionHeading } from "./Services";

interface TechnologyStackProps {
  eyebrow?: string;
  heading?: string;
  technologies: string[];
}

export function TechnologyStack({ eyebrow = "Technologies Used", heading = "Built on proven, modern stacks.", technologies }: TechnologyStackProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionHeading>{heading}</SectionHeading>
        <div className="mt-10 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm text-foreground/80">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
