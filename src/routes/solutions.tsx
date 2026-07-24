import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Solutions as SolutionsSection } from "@/components/sections/Solutions";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Business outcomes engineered | MetaMind" },
      {
        name: "description",
        content:
          "Reduce cost, automate processes, harden security, accelerate growth and scale infrastructure with MetaMind's outcome-driven engagements.",
      },
      { property: "og:title", content: "MetaMind Solutions" },
      { property: "og:description", content: "Business outcomes, engineered." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Solutions"
        title="We measure our work by the outcomes we unlock."
        description="Every engagement maps to a business outcome — cost, speed, security, growth or resilience."
      />
      <SolutionsSection />
    </SiteLayout>
  );
}
