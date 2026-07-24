import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MetaMind — Nairobi, Kenya" },
      {
        name: "description",
        content:
          "Talk to MetaMind about your next transformation. Nairobi HQ. Reply within one business day.",
      },
      { property: "og:title", content: "Contact MetaMind" },
      { property: "og:description", content: "Let's build what's next, together." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's build what's next, together."
        description="Tell us about your ambition. We reply within one business day."
      />
      <ContactSection />
    </SiteLayout>
  );
}
