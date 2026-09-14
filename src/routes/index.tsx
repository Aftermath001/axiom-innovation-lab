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
      {
        title: "MetaMind — AI Automation & Software Solutions in Kenya",
      },
      {
        name: "description",
        content:
          "MetaMind Limited helps businesses automate customer support, lead generation, appointment booking and repetitive operations using practical AI agents and software solutions.",
      },
      {
        property: "og:title",
        content:
          "MetaMind — AI Automation & Software Solutions in Kenya",
      },
      {
        property: "og:description",
        content:
          "AI agents, business automation and software solutions for businesses in Kenya and beyond.",
      },
      {
        property: "og:url",
        content: "https://metamindlimited.co.ke/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://metamindlimited.co.ke/",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      {/* <TrustBar /> */}
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
