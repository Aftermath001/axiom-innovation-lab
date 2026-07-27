import { Link } from "@tanstack/react-router";
import { serviceLinks } from "@/lib/site-data";
import { SectionEyebrow, SectionHeading } from "./Services";

interface RelatedServicesProps {
  currentSlug: string;
  eyebrow?: string;
  heading?: string;
}

export function RelatedServices({ currentSlug, eyebrow = "Related Services", heading = "Continue exploring." }: RelatedServicesProps) {
  const related = serviceLinks.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <SectionHeading>{heading}</SectionHeading>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="card-hover group flex flex-col rounded-2xl border border-border/60 bg-card/60 p-6"
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 transition-transform group-hover:scale-105">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
