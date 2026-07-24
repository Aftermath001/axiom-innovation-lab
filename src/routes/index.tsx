import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { TechStackWall } from "@/components/sections/TechStackWall";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MetaMind — Engineering Intelligent Digital Transformation" },
      {
        name: "description",
        content:
          "Software engineering, AI, cloud, cybersecurity and digital transformation for African and global organizations. Nairobi-headquartered technology consultancy.",
      },
      { property: "og:title", content: "MetaMind — Engineering Intelligent Digital Transformation" },
      {
        property: "og:description",
        content:
          "Software engineering, AI, cloud, cybersecurity and digital transformation delivered by senior teams.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Services />
      <Solutions />
      <Industries />
      <CaseStudiesPreview />
      <TechStackWall />
      <WhyChoose />
      <Testimonials />
      <BlogPreview />
      <ContactSection />
    </SiteLayout>
  );
}
