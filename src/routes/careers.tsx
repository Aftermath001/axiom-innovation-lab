import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build the future of African tech | MetaMind" },
      {
        name: "description",
        content:
          "Join MetaMind — a senior team of engineers, designers and strategists shipping the technology behind Africa's most ambitious organizations.",
      },
      { property: "og:title", content: "Careers at MetaMind" },
      { property: "og:description", content: "Join a senior team building the future of African tech." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const openings = [
  { title: "Senior Software Engineer", team: "Engineering", location: "Nairobi / Remote" },
  { title: "AI/ML Engineer", team: "AI", location: "Nairobi / Remote" },
  { title: "Cloud Architect", team: "Cloud", location: "Nairobi" },
  { title: "Cybersecurity Consultant", team: "Security", location: "Nairobi / Hybrid" },
  { title: "Product Designer", team: "Design", location: "Nairobi / Remote" },
  { title: "Engagement Lead", team: "Delivery", location: "Nairobi" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Careers"
        title="Come build technology that matters — from Nairobi to the world."
        description="We hire senior, curious operators. Small teams. Real ownership. Meaningful outcomes."
      />
      <section className="container-wide py-16">
        <ul className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card/40">
          {openings.map((o) => (
            <li key={o.title} className="flex flex-wrap items-center justify-between gap-4 p-5 hover:bg-secondary/40">
              <div>
                <h2 className="text-base font-semibold">{o.title}</h2>
                <p className="mt-1 text-xs text-muted-foreground">{o.team} · {o.location}</p>
              </div>
              <Button asChild size="sm" variant="hero">
                <Link to="/contact">Apply</Link>
              </Button>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
