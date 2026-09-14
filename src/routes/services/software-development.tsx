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
import { Building2, HeartPulse, ShoppingBag, Truck } from "lucide-react";

const industryItems = [
  { title: "Financial Services", desc: "Core banking, payments, risk and compliance modernization.", icon: Building2 },
  { title: "Healthcare", desc: "Digital health platforms, EMR, telemedicine and patient engagement.", icon: HeartPulse },
  { title: "Retail", desc: "Omnichannel commerce, loyalty and AI-driven personalization.", icon: ShoppingBag },
  { title: "Logistics", desc: "Fleet, warehousing, last-mile and supply-chain visibility.", icon: Truck },
];

export const Route = createFileRoute("/services/software-development")({
  head: () => ({
    meta: [
      {
        title: "Software Development Company in Kenya | MetaMind",
      },
      {
        name: "description",
        content:
          "Custom web applications, enterprise software, mobile apps and SaaS platforms built for businesses in Kenya and beyond.",
      },
      {
        property: "og:title",
        content: "Software Development Company in Kenya | MetaMind",
      },
      {
        property: "og:description",
        content:
          "End-to-end software development for scalable web applications, enterprise systems, mobile apps and SaaS platforms.",
      },
      {
        property: "og:url",
        content: "https://metamindlimited.co.ke/services/software-development",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://metamindlimited.co.ke/services/software-development",
      },
    ],
  }),
  component: SoftwareDevelopmentPage,
});

function SoftwareDevelopmentPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Software Development"
        title="Engineering platforms that drive revenue, not rework."
        description="From greenfield SaaS to legacy modernization, we design and build software that scales with your ambition."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Start a project</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to an engineer</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>Complete software engineering, from concept to production.</SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            { title: "Custom Web Applications", description: "React, Next.js and Node.js platforms built for performance, accessibility and scale across browsers and devices." },
            { title: "Enterprise Systems", description: "Domain-driven microservices, event streaming and unified identity layers that replace fragile monoliths." },
            { title: "Mobile Applications", description: "Cross-platform and native iOS and Android apps with offline-first architecture and push-enabled engagement." },
            { title: "SaaS Platforms", description: "Multi-tenant architectures with usage-based billing, role-based access and embedded analytics." },
            { title: "API Development & Integration", description: "REST, GraphQL and event-driven APIs that connect your ecosystem securely and reliably." },
            { title: "Legacy System Modernization", description: "Strangler-fig migrations, containerization and CI/CD pipelines that reduce risk while modernizing." },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Outcomes that compound over time."
        benefits={[
          { title: "Faster Time-to-Market", description: "Working software in weeks, not quarters, through iterative delivery and automated pipelines.", metric: "-40%", metricLabel: "time to first release" },
          { title: "Scalable Architecture", description: "Cloud-native platforms built to serve millions without rewrites or architectural debt.", metric: "50M+", metricLabel: "requests / day" },
          { title: "Reduced Technical Debt", description: "Clean code, automated testing and documentation that make future changes cheaper and safer." },
          { title: "Team Augmentation", description: "Senior engineers embedded with your team to accelerate delivery and raise craftsmanship." },
        ]}
      />

      <TechnologyStack
        heading="Modern tooling, chosen for longevity."
        technologies={[
          "React", "Next.js", "Node.js", "TypeScript", "Python", "Go", "Java",
          "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST",
          "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "GitHub Actions",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>Trusted across regulated and scaling sectors.</SectionHeading>
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
        heading="A repeatable model that de-risks delivery."
        steps={[
          { title: "Discovery & Strategy", description: "Stakeholder interviews, technical assessment and a prioritized roadmap aligned to business outcomes." },
          { title: "Architecture & Design", description: "System design, API contracts, data models and UX specifications that keep teams aligned." },
          { title: "Build & Iterate", description: "Two-week sprints with continuous integration, automated testing and weekly stakeholder demos." },
          { title: "Test & Launch", description: "Performance testing, security reviews, staged rollouts and observability from day one." },
          { title: "Operate & Evolve", description: "Ongoing monitoring, feature delivery and architectural reviews to keep the system healthy." },
        ]}
      />

      <WhyChoose heading="The partner that ships." />

      <RelatedServices currentSlug="software-development" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 sm:p-12 text-center">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>Ready to build something remarkable?</SectionHeading>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Tell us about your product vision. We will respond within one business day with next steps or scheduling for a consultation.
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