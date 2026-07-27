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
import { Building2, HeartPulse, Landmark, ShoppingBag } from "lucide-react";

const industryItems = [
  { title: "Financial Services", desc: "Digital banking roadmaps, payments modernization and risk-technology strategy.", icon: Building2 },
  { title: "Healthcare", desc: "Health-tech strategy, EMR selection and digital health roadmaps.", icon: HeartPulse },
  { title: "Government", desc: "E-government strategy, digital public infrastructure and vendor governance.", icon: Landmark },
  { title: "Retail", desc: "Omnichannel strategy, marketplace integration and customer-data platforms.", icon: ShoppingBag },
];

export const Route = createFileRoute("/services/it-consulting")({
  head: () => ({
    meta: [
      { title: "IT Consulting Services | MetaMind" },
      {
        name: "description",
        content:
          "Digital strategy, technology roadmaps, architecture consulting and transformation planning for ambitious organizations.",
      },
      { property: "og:title", content: "IT Consulting — MetaMind" },
      {
        property: "og:description",
        content: "Senior advisory that aligns technology investment with business outcomes.",
      },
      { property: "og:url", content: "/services/it-consulting" },
    ],
    links: [{ rel: "canonical", href: "/services/it-consulting" }],
  }),
  component: ITConsultingPage,
});

function ITConsultingPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="IT Consulting"
        title="Senior advisory that aligns technology investment with business outcomes."
        description="We partner with CTOs, CIOs and technology leaders to define strategy, architecture and governance models that unlock growth."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Get a technology assessment</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to a strategist</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>Strategic guidance from practitioners, not theorists.</SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            { title: "Digital Strategy", description: "Vision-setting and investment prioritization that connects technology choices to revenue, cost and risk." },
            { title: "Technology Roadmaps", description: "Phased roadmaps with clear milestones, dependencies and decision gates for executive alignment." },
            { title: "Architecture Consulting", description: "System, data and integration architecture reviews that reduce complexity and improve velocity." },
            { title: "Transformation Planning", description: "Operating model design, change management and capability-building plans that make change stick." },
            { title: "Technology Governance", description: "Policies, standards and review boards that balance innovation with risk and compliance." },
            { title: "Vendor Selection", description: "Rigorous evaluation frameworks, proof-of-concept design and negotiation support for major platforms." },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Strategic clarity that translates to execution."
        benefits={[
          { title: "Clear Roadmap", description: "A prioritized, executive-ready plan that removes ambiguity and aligns stakeholders." },
          { title: "Reduced Risk", description: "Proven patterns and pilot-first approaches that lower the cost of failure." },
          { title: "Aligned Investments", description: "Technology spend tied to measurable outcomes, not vendor roadmaps or hype cycles." },
          { title: "Faster Decisions", description: "Decision frameworks and expert input that compress planning cycles from quarters to weeks." },
        ]}
      />

      <TechnologyStack
        heading="Frameworks and platforms we advise on."
        technologies={[
          "TOGAF", "Zachman", "AWS", "Azure", "Google Cloud",
          "Kubernetes", "Terraform", "GraphQL", "REST", "Apache Kafka",
          "PostgreSQL", "MongoDB", "Redis", "Datadog", "ServiceNow",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>Deep sector knowledge combined with global best practices.</SectionHeading>
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
        heading="A structured engagement model for executive-level outcomes."
        steps={[
          { title: "Diagnose", description: "Stakeholder interviews, current-state analysis and a prioritized list of technology gaps and opportunities." },
          { title: "Strategize", description: "Vision, principles and target architecture with clear business case and investment priorities." },
          { title: "Roadmap", description: "Phased delivery plan with milestones, resourcing and decision gates." },
          { title: "Govern", description: "Operating model, KPIs and governance forums that keep execution aligned to strategy." },
          { title: "Evolve", description: "Quarterly reviews, roadmap updates and capability-building to sustain transformation momentum." },
        ]}
      />

      <WhyChoose heading="The advisory partner that ships." />

      <RelatedServices currentSlug="it-consulting" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 sm:p-12 text-center">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>Ready to align your technology with your business?</SectionHeading>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Book a 60-minute strategy session with one of our principal consultants.
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
