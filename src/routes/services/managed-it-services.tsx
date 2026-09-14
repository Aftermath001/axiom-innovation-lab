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
import { Building2, HeartPulse, ShoppingBag, Factory } from "lucide-react";

const industryItems = [
  { title: "Financial Services", desc: "Always-on infrastructure for trading, payments and core banking systems.", icon: Building2 },
  { title: "Healthcare", desc: "HIPAA-aligned monitoring, EMR uptime and secure telehealth infrastructure.", icon: HeartPulse },
  { title: "Retail", desc: "Seasonal scaling, omnichannel availability and point-of-sale reliability.", icon: ShoppingBag },
  { title: "Manufacturing", desc: "OT/IT monitoring, predictive maintenance alerts and factory-floor reliability.", icon: Factory },
];

export const Route = createFileRoute("/services/managed-it-services")({
  head: () => ({
    meta: [
      {
        title: "Managed IT Services in Kenya | MetaMind",
      },
      {
        name: "description",
        content:
          "Managed IT services, infrastructure monitoring, technical support, cloud management, backup and recovery for businesses in Kenya and beyond.",
      },
      {
        property: "og:title",
        content: "Managed IT Services in Kenya | MetaMind",
      },
      {
        property: "og:description",
        content:
          "Reliable managed IT operations, proactive monitoring and expert technical support that keep your business systems secure and available.",
      },
      {
        property: "og:url",
        content: "https://metamindlimited.co.ke/services/managed-it-services",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://metamindlimited.co.ke/services/managed-it-services",
      },
    ],
  }),
  component: ManagedITServicesPage,
});

function ManagedITServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Managed IT Services"
        title="Predictable IT operations so you can focus on your business."
        description="We manage your infrastructure, support your teams and keep your systems available, secure and optimized around the clock."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Explore managed services</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to operations</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>End-to-end management of your technology estate.</SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            { title: "Infrastructure Monitoring", description: "Full-stack observability with proactive alerting, health checks and performance dashboards." },
            { title: "Help Desk & Support", description: "Tiered support with SLA-backed response times for end users, applications and infrastructure." },
            { title: "Managed Cloud", description: "Day-2 cloud operations including patching, scaling, cost governance and security hardening." },
            { title: "Backup & Recovery", description: "Automated backups, tested restore procedures and disaster recovery runbooks with defined RTO and RPO." },
            { title: "Business Continuity", description: "BCP design, tabletop exercises and resilience testing that prepare you for the unexpected." },
            { title: "Patch & Vulnerability Management", description: "Continuous vulnerability scanning, prioritization and remediation across your estate." },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Operational excellence that reduces cost and risk."
        benefits={[
          { title: "99.99% Uptime", description: "Proactive monitoring and incident response that keep systems available when you need them.", metric: "99.99%", metricLabel: "uptime target" },
          { title: "Reduced Downtime", description: "Faster detection and resolution of incidents before they impact customers or revenue." },
          { title: "Predictable Costs", description: "Fixed-fee or consumption-based models that eliminate surprise invoices and budget risk." },
          { title: "Expert Support", description: "Senior engineers on call, not a queue of junior technicians reading from a script." },
        ]}
      />

      <TechnologyStack
        heading="Monitoring and management tooling."
        technologies={[
          "AWS", "Azure", "Datadog", "PagerDuty", "Grafana", "Prometheus",
          "Veeam", "Zabbix", "Nagios", "Ansible", "Terraform", "Docker",
          "Kubernetes", "Linux", "Windows Server", "SQL Server", "PostgreSQL",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>Operations teams trusted across critical sectors.</SectionHeading>
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
        heading="A mature operating model for predictable delivery."
        steps={[
          { title: "Onboard", description: "Environment discovery, tooling deployment and knowledge transfer from your current team." },
          { title: "Monitor", description: "24/7 monitoring, alerting and dashboarding with defined escalation paths." },
          { title: "Respond", description: "Incident triage, remediation and stakeholder communication within SLA windows." },
          { title: "Optimize", description: "Capacity planning, cost governance and performance tuning on a continuous cadence." },
          { title: "Report", description: "Executive reporting, SLA tracking and proactive recommendations for improvement." },
        ]}
      />

      <WhyChoose heading="The operations partner you can rely on." />

      <RelatedServices currentSlug="managed-it-services" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 sm:p-12 text-center">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>Ready to offload your IT operations?</SectionHeading>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Get a free operations assessment and a proposal tailored to your environment and SLAs.
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