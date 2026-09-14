import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { ServiceCapabilities } from "@/components/sections/ServiceCapabilities";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { SectionEyebrow, SectionHeading } from "@/components/sections/Services";
import { Building2, HeartPulse, Landmark, Factory } from "lucide-react";

const industryItems = [
  { title: "Financial Services", desc: "Core banking modernization, payments transformation and branch digitization.", icon: Building2 },
  { title: "Healthcare", desc: "Digital health platforms, patient experience redesign and operational modernization.", icon: HeartPulse },
  { title: "Government", desc: "Citizen services transformation, e-government platforms and digital public infrastructure.", icon: Landmark },
  { title: "Manufacturing", desc: "Industry 4.0 adoption, smart factories and supply-chain digitization.", icon: Factory },
];

export const Route = createFileRoute("/services/digital-transformation")({
  head: () => ({
    meta: [
      {
        title: "Digital Transformation Services in Kenya | MetaMind",
      },
      {
        name: "description",
        content:
          "Digital transformation solutions that modernize business processes, technology and operations for organizations in Kenya and beyond.",
      },
      {
        property: "og:title",
        content: "Digital Transformation Services in Kenya | MetaMind",
      },
      {
        property: "og:description",
        content:
          "Modernize business operations with technology, automation and digital solutions built around measurable business outcomes.",
      },
      {
        property: "og:url",
        content:
          "https://metamindlimited.co.ke/services/digital-transformation",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://metamindlimited.co.ke/services/digital-transformation",
      },
    ],
  }),
  component: DigitalTransformationPage,
});

function DigitalTransformationPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Digital Transformation"
        title="Holistic programs that modernize operations, teams and technology."
        description="We design and deliver end-to-end transformation programs that align people, process and platform for lasting change."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Start a transformation program</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to a strategist</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>Transformation that lasts beyond the pilot phase.</SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            { title: "Process Modernization", description: "End-to-end process redesign that removes waste, improves handoffs and reduces cycle times." },
            { title: "Automation Programs", description: "Enterprise automation roadmaps that span RPA, AI and workflow orchestration." },
            { title: "Digital Workflows", description: "Low-code and custom platforms that digitize approvals, document handling and collaboration." },
            { title: "Enterprise Modernization", description: "Legacy platform replacement, cloud migration and API-first architecture at scale." },
            { title: "Innovation Programs", description: "Innovation labs, proof-of-concept pipelines and venture incubation that keep you ahead of disruption." },
            { title: "Change Management", description: "Communication plans, training programs and adoption metrics that make new ways of working stick." },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Transformation outcomes that show up in the P&L."
        benefits={[
          { title: "Modern Operations", description: "Streamlined processes and digital workflows that reduce cost and improve employee experience." },
          { title: "Improved Efficiency", description: "Automation and platform consolidation that cut manual effort and accelerate throughput.", metric: "-30%", metricLabel: "process cycle time" },
          { title: "Engaged Workforce", description: "Better tools, clearer processes and continuous learning that raise productivity and retention." },
          { title: "Competitive Advantage", description: "Speed-to-market, customer experience and operational resilience that differentiate your brand." },
        ]}
      />

      <TechnologyStack
        heading="Platforms and tools for modern enterprises."
        technologies={[
          "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker",
          "Terraform", "GraphQL", "REST", "Apache Kafka", "PostgreSQL",
          "MongoDB", "Redis", "Low-code", "RPA", "Mulesoft",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>Transformation programs that respect sector-specific constraints.</SectionHeading>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industryItems.map((ind) => (
            <div key={ind.title} className="card-hover group flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary/60 text-brand ring-1 ring-border/60 transition-colors group-hover:bg-brand/10">
                <ind.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{ind.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServiceProcess
        eyebrow="Our Process"
        heading="A phased program model that balances ambition with pragmatism."
        steps={[
          { title: "Assess", description: "Current-state assessment, stakeholder alignment and a prioritized transformation backlog." },
          { title: "Design", description: "Target operating model, technology architecture and change management strategy." },
          { title: "Pilot", description: "High-impact, low-risk pilots that demonstrate value and build organizational momentum." },
          { title: "Scale", description: "Program management, governance and delivery at scale with regular executive review." },
          { title: "Operate", description: "Continuous improvement, capability building and innovation pipeline to sustain transformation." },
        ]}
      />

      <WhyChoose heading="The transformation partner that stays until it sticks." />

      <RelatedServices currentSlug="digital-transformation" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 sm:p-12 text-center">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>Ready to transform your enterprise?</SectionHeading>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Book a strategy session to map your transformation priorities and define a 12-month roadmap.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="brand" size="lg">
              <Link to="/consultation">Book a consultation</Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}