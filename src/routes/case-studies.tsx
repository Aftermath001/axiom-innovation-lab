import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Outcomes we've engineered | MetaMind" },
      {
        name: "description",
        content:
          "Selected work: cloud re-platforming for pan-African banking, clinical AI triage at scale and unified citizen services for national government.",
      },
      { property: "og:title", content: "MetaMind Case Studies" },
      { property: "og:description", content: "Selected outcomes across banking, health and government." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Case Studies"
        title="Selected work from across the continent."
        description="A snapshot of engagements — challenge, solution, results and technology."
      />
      <section className="container-wide space-y-6 py-20">
        {caseStudies.map((c) => (
          <article
            key={c.slug}
            className="grid gap-6 rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-8 lg:grid-cols-[1fr_2fr]"
          >
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand">{c.industry}</div>
              <h2 className="mt-2 text-xl font-semibold sm:text-2xl">{c.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.client}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border/60 bg-secondary/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Block label="Challenge" value={c.challenge} />
              <Block label="Solution" value={c.solution} />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Results</div>
                <ul className="mt-2 space-y-1.5">
                  {c.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

function Block({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{value}</p>
    </div>
  );
}
