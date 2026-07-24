import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Compass, Globe2, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MetaMind — African insight, global standards" },
      {
        name: "description",
        content:
          "MetaMind is a Nairobi-headquartered technology consultancy of engineers, designers and strategists shaping the next decade of African digital transformation.",
      },
      { property: "og:title", content: "About MetaMind" },
      { property: "og:description", content: "African insight. Global standards. Meet MetaMind." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Compass, title: "Principled engineering", desc: "We optimize for outcomes, longevity and safety over vanity metrics." },
  { icon: Users, title: "Senior by default", desc: "You get seniors on your account — always. Juniors learn alongside, never lead alone." },
  { icon: Globe2, title: "Nairobi-rooted, globally fluent", desc: "African context, world-class craft, and delivery across 12 markets." },
  { icon: Sparkles, title: "Bias for shipping", desc: "Working software every week beats perfect plans on paper." },
];

function About() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="A consultancy engineered for the next decade of African technology."
        description="We are engineers, designers and strategists building the digital infrastructure that ambitious African organizations run on."
      />
      <section className="container-wide grid gap-16 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            MetaMind Limited was founded in Nairobi with a conviction: African organizations
            deserve a technology partner with the depth of a global consultancy, the craft of a
            product studio and the accountability of a founding team.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today we partner with banks, health systems, governments and scale-ups across the
            continent — quietly shipping the software, AI and cloud platforms behind millions of
            everyday transactions.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild variant="brand"><Link to="/consultation">Book a consultation</Link></Button>
            <Button asChild variant="hero"><Link to="/careers">Join the team</Link></Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card-hover rounded-2xl border border-border/60 bg-card/60 p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                <v.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
