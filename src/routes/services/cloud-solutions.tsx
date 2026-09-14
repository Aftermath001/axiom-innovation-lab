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
  {
    title: "Financial Services",
    desc: "PCI-compliant cloud infrastructure, real-time trading platforms and disaster recovery.",
    icon: Building2,
  },
  {
    title: "Healthcare",
    desc: "HIPAA-ready architectures, EMR hosting and telehealth scalability.",
    icon: HeartPulse,
  },
  {
    title: "Government",
    desc: "Secure citizen platforms, classified workloads and sovereign-cloud options.",
    icon: Landmark,
  },
  {
    title: "Retail",
    desc: "Seasonal scaling, omnichannel fulfillment and edge caching for peak traffic.",
    icon: ShoppingBag,
  },
];

export const Route = createFileRoute("/services/cloud-solutions")({
  head: () => ({
    meta: [
      {
        title: "Cloud Solutions & Services in Kenya | MetaMind",
      },
      {
        name: "description",
        content:
          "Cloud architecture, migration, optimization and infrastructure solutions for businesses in Kenya and beyond.",
      },
      {
        property: "og:title",
        content: "Cloud Solutions & Services in Kenya | MetaMind",
      },
      {
        property: "og:description",
        content:
          "Scalable and reliable cloud solutions designed to modernize infrastructure and improve business performance.",
      },
      {
        property: "og:url",
        content: "https://metamindlimited.co.ke/services/cloud-solutions",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://metamindlimited.co.ke/services/cloud-solutions",
      },
    ],
  }),
  component: CloudSolutionsPage,
});

function CloudSolutionsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Cloud Solutions"
        title="Multi-cloud strategy and engineering that cuts cost and increases resilience."
        description="We architect, migrate and optimize cloud estates on AWS, Azure and Google Cloud so you can focus on your product, not your infrastructure."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Assess your cloud estate</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to a cloud architect</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>
          Cloud expertise across every major platform and workload type.
        </SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            {
              title: "Cloud Migration",
              description:
                "Lift-and-shift, replatform and refactor strategies with zero-downtime cutover and rollback plans.",
            },
            {
              title: "Infrastructure Architecture",
              description:
                "Landing zones, networking, identity and governance architectures aligned to your compliance posture.",
            },
            {
              title: "Multi-Cloud Strategy",
              description:
                "Avoid vendor lock-in with portable infrastructure, abstraction layers and consistent tooling.",
            },
            {
              title: "Cost Optimization",
              description:
                "Rightsizing, reserved instances, spot orchestration and FinOps practices that reduce spend by up to 40%.",
            },
            {
              title: "Security & Compliance",
              description:
                "Zero-trust networking, encryption, audit logging and automated compliance checks.",
            },
            {
              title: "DevOps & CI/CD",
              description:
                "Infrastructure as code, automated pipelines and GitOps workflows that make deployments boring and safe.",
            },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Business outcomes from better cloud engineering."
        benefits={[
          {
            title: "Reduced Infrastructure Cost",
            description:
              "Right-sized workloads and automated scaling eliminate over-provisioning.",
            metric: "-40%",
            metricLabel: "infrastructure cost",
          },
          {
            title: "Improved Resilience",
            description:
              "Multi-AZ deployments, disaster recovery and automated failover that keep you online.",
            metric: "99.99%",
            metricLabel: "uptime target",
          },
          {
            title: "Faster Scaling",
            description:
              "Auto-scaling and serverless patterns that absorb traffic spikes without capacity planning.",
            metric: "10x",
            metricLabel: "scale factor",
          },
          {
            title: "Better Compliance",
            description:
              "Automated policy enforcement and continuous audit trails for SOC 2, PCI and HIPAA.",
            metric: "SOC 2",
            metricLabel: "ready architecture",
          },
        ]}
      />

      <TechnologyStack
        heading="Platform expertise that spans the major clouds."
        technologies={[
          "AWS",
          "Azure",
          "Google Cloud",
          "Terraform",
          "Pulumi",
          "CloudFormation",
          "Kubernetes",
          "Docker",
          "ArgoCD",
          "GitHub Actions",
          "Prometheus",
          "Grafana",
          "PostgreSQL",
          "Redis",
          "S3",
          "Lambda",
          "Azure Functions",
          "Cloud Run",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>
          Cloud-native delivery across regulated sectors.
        </SectionHeading>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industryItems.map((ind) => (
            <div
              key={ind.title}
              className="card-hover group flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-secondary/60 text-brand ring-1 ring-border/60 transition-colors group-hover:bg-brand/10">
                <ind.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {ind.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ServiceProcess
        eyebrow="Our Process"
        heading="A structured path from current state to cloud-native."
        steps={[
          {
            title: "Assessment",
            description:
              "Application portfolio review, dependency mapping and TCO analysis across your current estate.",
          },
          {
            title: "Migration Planning",
            description:
              "Prioritized migration waves, risk mitigation and rollback strategies for each workload.",
          },
          {
            title: "Architecture",
            description:
              "Landing zones, networking, identity and governance designed for your compliance requirements.",
          },
          {
            title: "Optimization",
            description:
              "Cost governance, performance tuning and automated scaling policies that improve over time.",
          },
          {
            title: "Operate",
            description:
              "24/7 monitoring, incident response and continuous improvement managed by our team.",
          },
        ]}
      />

      <WhyChoose heading="The cloud partner that reduces your blast radius." />

      <RelatedServices currentSlug="cloud-solutions" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 text-center sm:p-12">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>Ready to optimize your cloud estate?</SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get a free cloud assessment and migration roadmap tailored to your
            workloads and compliance needs.
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