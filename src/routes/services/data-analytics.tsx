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
import { Building2, HeartPulse, Truck, Landmark } from "lucide-react";

const industryItems = [
  { title: "Financial Services", desc: "Risk analytics, real-time fraud detection and regulatory reporting.", icon: Building2 },
  { title: "Healthcare", desc: "Clinical dashboards, patient outcome analytics and operational efficiency.", icon: HeartPulse },
  { title: "Logistics", desc: "Route optimization, demand forecasting and supply-chain visibility.", icon: Truck },
  { title: "Government", desc: "Citizen service analytics, budget transparency and program impact measurement.", icon: Landmark },
];

export const Route = createFileRoute("/services/data-analytics")({
  head: () => ({
    meta: [
      { title: "Data & Analytics Services | MetaMind" },
      {
        name: "description",
        content:
          "Business intelligence, data engineering, dashboards, reporting and data warehousing that turn data into decisions.",
      },
      { property: "og:title", content: "Data & Analytics — MetaMind" },
      {
        property: "og:description",
        content: "Unified data platforms with real-time BI and governed analytics.",
      },
      { property: "og:url", content: "/services/data-analytics" },
    ],
    links: [{ rel: "canonical", href: "/services/data-analytics" }],
  }),
  component: DataAnalyticsPage,
});

function DataAnalyticsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Data & Analytics"
        title="Unified data platforms with real-time BI and governed analytics."
        description="We engineer data pipelines, warehouses and dashboards that give every stakeholder the right data at the right time."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Assess your data estate</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to a data engineer</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>Data engineering and analytics that drive better decisions.</SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            { title: "Data Engineering", description: "Robust ETL/ELT pipelines, real-time streaming and data lake architecture built for reliability and scale." },
            { title: "Business Intelligence", description: "Self-service BI platforms, semantic layers and governed datasets that reduce reporting latency." },
            { title: "Dashboards & Reporting", description: "Executive dashboards, operational scorecards and automated reporting with drill-down capability." },
            { title: "Data Warehousing", description: "Modern cloud warehouses on Snowflake, BigQuery or Redshift with optimized modeling and partitioning." },
            { title: "Real-Time Analytics", description: "Streaming analytics, anomaly detection and alerting that surface insights as events happen." },
            { title: "Data Governance", description: "Data catalogs, lineage tracking, quality rules and access controls that make data trustworthy." },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Data maturity that compounds decision velocity."
        benefits={[
          { title: "3x Decision Velocity", description: "From raw data to insight in minutes, not weeks, with self-service and real-time pipelines.", metric: "3x", metricLabel: "decision velocity" },
          { title: "Unified Data", description: "Single source of truth across departments that eliminates conflicting reports and finger-pointing." },
          { title: "Self-Service Analytics", description: "Business users explore and report without bottlenecking central data teams." },
          { title: "Real-Time Insights", description: "Live dashboards and alerts that help you respond to market changes before competitors do." },
        ]}
      />

      <TechnologyStack
        heading="Modern data stack and cloud warehouses."
        technologies={[
          "PostgreSQL", "Snowflake", "BigQuery", "Redshift", "dbt",
          "Apache Kafka", "Spark", "Airflow", "Looker", "Power BI",
          "Tableau", "Metabase", "Redis", "S3", "Terraform",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>Data strategy tailored to your sector's regulations and pace.</SectionHeading>
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
        heading="A data-engineering approach that delivers value incrementally."
        steps={[
          { title: "Assess", description: "Data landscape review, quality audit and identification of highest-impact analytics opportunities." },
          { title: "Engineer", description: "Pipeline design, ingestion, transformation and storage with automated testing and monitoring." },
          { title: "Model", description: "Semantic models, metric definitions and governed datasets that make data reliable and reusable." },
          { title: "Visualize", description: "Dashboards, reports and self-service tools that put insights in the hands of decision-makers." },
          { title: "Govern", description: "Data catalogs, access controls, quality rules and lineage that build trust over time." },
        ]}
      />

      <WhyChoose heading="The data partner that makes data an asset." />

      <RelatedServices currentSlug="data-analytics" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 sm:p-12 text-center">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>Ready to unlock the value in your data?</SectionHeading>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            We will assess your current data estate and propose a roadmap to unified analytics within one week.
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
