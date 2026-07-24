import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Industries as IndustriesSection } from "@/components/sections/Industries";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Regulated & scaling sectors | MetaMind" },
      {
        name: "description",
        content:
          "Deep expertise across financial services, healthcare, education, logistics, government, retail and manufacturing.",
      },
      { property: "og:title", content: "MetaMind Industries" },
      { property: "og:description", content: "Deep expertise across regulated & scaling sectors." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Industries"
        title="We know your sector — because we ship in it."
        description="Cross-sector patterns, industry-specific compliance and delivery teams that understand your context."
      />
      <IndustriesSection />
    </SiteLayout>
  );
}
