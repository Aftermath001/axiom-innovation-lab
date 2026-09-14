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
  {
    title: "Financial Services",
    desc: "PCI-DSS and Basel III compliance, fraud monitoring and secure transaction platforms.",
    icon: Building2,
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant architectures, EMR security and patient data protection.",
    icon: HeartPulse,
  },
  {
    title: "Government",
    desc: "Classified workloads, citizen data protection and national cybersecurity standards.",
    icon: Landmark,
  },
  {
    title: "Manufacturing",
    desc: "OT/IT convergence, industrial IoT security and supply-chain integrity.",
    icon: Factory,
  },
];

export const Route = createFileRoute("/services/cybersecurity")({
  head: () => ({
    meta: [
      {
        title: "Cybersecurity Services in Kenya | MetaMind",
      },
      {
        name: "description",
        content:
          "Cybersecurity assessments, vulnerability testing, security architecture and protection solutions for businesses in Kenya and beyond.",
      },
      {
        property: "og:title",
        content: "Cybersecurity Services in Kenya | MetaMind",
      },
      {
        property: "og:description",
        content:
          "Practical cybersecurity solutions that help businesses identify risks, protect systems and strengthen their security posture.",
      },
      {
        property: "og:url",
        content: "https://metamindlimited.co.ke/services/cybersecurity",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://metamindlimited.co.ke/services/cybersecurity",
      },
    ],
  }),
  component: CybersecurityPage,
});

function CybersecurityPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Cybersecurity"
        title="Zero-trust security, continuous protection and compliance-ready architecture."
        description="We assess, design, implement and operate security programs that protect your people, platforms and data without slowing delivery."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Get a security assessment</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to our security team</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>
          Security engineering that protects business velocity.
        </SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            {
              title: "Security Assessments",
              description:
                "Architecture reviews, threat modeling and risk assessments that identify gaps before attackers do.",
            },
            {
              title: "Vulnerability Testing",
              description:
                "Penetration testing, SAST/DAST and red-teaming exercises that validate your defenses.",
            },
            {
              title: "Compliance & Governance",
              description:
                "SOC 2, ISO 27001, PCI-DSS and HIPAA program implementation and continuous audit readiness.",
            },
            {
              title: "Security Operations",
              description:
                "24/7 SOC, threat intelligence, log analytics and incident detection with defined response playbooks.",
            },
            {
              title: "Incident Response",
              description:
                "Rapid containment, forensic analysis and post-incident reviews that limit breach impact.",
            },
            {
              title: "Zero Trust Architecture",
              description:
                "Identity-centric networking, least-privilege access and micro-segmentation across cloud and on-prem.",
            },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Security that enables, not obstructs."
        benefits={[
          {
            title: "Reduced Breach Risk",
            description:
              "Continuous controls and proactive testing that lower the probability and impact of incidents.",
          },
          {
            title: "Compliance-Ready Estate",
            description:
              "Automated policy enforcement and audit trails that satisfy regulators and auditors.",
          },
          {
            title: "Faster Incident Response",
            description:
              "Defined runbooks, automated containment and on-call expertise that cut MTTR.",
            metric: "< 30 min",
            metricLabel: "mean time to respond",
          },
          {
            title: "Security Without Friction",
            description:
              "Zero-trust controls designed for developer velocity, not just compliance checklists.",
          },
        ]}
      />

      <TechnologyStack
        heading="Security tooling for modern estates."
        technologies={[
          "CrowdStrike",
          "Palo Alto Networks",
          "AWS Security Hub",
          "Azure Sentinel",
          "Splunk",
          "Wazuh",
          "Nessus",
          "Burp Suite",
          "SonarQube",
          "Trivy",
          "PostgreSQL",
          "Redis",
          "Docker",
          "Kubernetes",
          "Terraform",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>
          Deep expertise in regulated and high-risk environments.
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
        heading="A lifecycle approach to security."
        steps={[
          {
            title: "Assess",
            description:
              "Comprehensive security review covering architecture, data flows, identities and third-party risk.",
          },
          {
            title: "Design",
            description:
              "Zero-trust architecture, policy frameworks and incident response plans tailored to your threat model.",
          },
          {
            title: "Implement",
            description:
              "Deploy security tooling, harden environments and train teams on secure development practices.",
          },
          {
            title: "Monitor",
            description:
              "Continuous telemetry, threat detection and compliance reporting with defined SLAs.",
          },
          {
            title: "Respond",
            description:
              "On-call incident response, forensic analysis and post-mortem remediation.",
          },
        ]}
      />

      <WhyChoose heading="Security that earns trust." />

      <RelatedServices currentSlug="cybersecurity" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 text-center sm:p-12">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>
            Ready to strengthen your security posture?
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Start with a complimentary architecture security review and receive
            a prioritized remediation plan.
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