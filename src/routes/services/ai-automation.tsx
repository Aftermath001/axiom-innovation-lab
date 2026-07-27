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
  { title: "Financial Services", desc: "Intelligent document processing, fraud detection and portfolio analytics.", icon: Building2 },
  { title: "Healthcare", desc: "Clinical decision support, patient triage and administrative automation.", icon: HeartPulse },
  { title: "Retail", desc: "Demand forecasting, personalization engines and inventory automation.", icon: ShoppingBag },
  { title: "Manufacturing", desc: "Predictive maintenance, quality inspection and supply-chain optimization.", icon: Factory },
];

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI & Automation Services | MetaMind" },
      {
        name: "description",
        content:
          "AI agents, workflow automation, LLM integrations, chatbots and predictive analytics engineered for production environments.",
      },
      { property: "og:title", content: "AI & Automation — MetaMind" },
      {
        property: "og:description",
        content: "Intelligent automation that ships value, not slideware.",
      },
      { property: "og:url", content: "/services/ai-automation" },
    ],
    links: [{ rel: "canonical", href: "/services/ai-automation" }],
  }),
  component: AIAutomationPage,
});

function AIAutomationPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="AI & Automation"
        title="Intelligent automation that ships value, not slideware."
        description="We design, build and deploy AI systems that reduce manual work, improve decisions and create durable competitive advantage."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand" size="lg">
            <Link to="/consultation">Explore AI solutions</Link>
          </Button>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Talk to our AI team</Link>
          </Button>
        </div>
      </PageHeader>

      <section className="container-wide py-20">
        <SectionEyebrow>What We Offer</SectionEyebrow>
        <SectionHeading>AI capabilities embedded into your operations, not bolted on.</SectionHeading>
        <ServiceCapabilities
          heading=""
          capabilities={[
            { title: "AI Agents & Copilots", description: "Autonomous and semi-autonomous agents that execute multi-step workflows with human-in-the-loop guardrails." },
            { title: "Workflow Automation", description: "End-to-end orchestration across finance, operations and support using event-driven architectures." },
            { title: "LLM Integrations", description: "Retrieval-augmented generation, fine-tuning and prompt engineering with OpenAI, Anthropic and open-source models." },
            { title: "Conversational AI", description: "Production-grade chatbots and voice assistants trained on your data with evaulation-driven quality." },
            { title: "Business Process Automation", description: "Document understanding, form extraction and decision automation that cuts processing time by orders of magnitude." },
            { title: "Predictive Analytics", description: "Time-series forecasting, anomaly detection and recommendation systems that turn data into proactive decisions." },
          ]}
        />
      </section>

      <BenefitsGrid
        heading="Measurable impact from day one."
        benefits={[
          { title: "10x Faster Workflows", description: "Orchestrated automation removes friction across finance, ops and support.", metric: "10x", metricLabel: "faster workflows" },
          { title: "Reduced Operational Costs", description: "Eliminate manual rework and reduce headcount dependency on repetitive tasks.", metric: "-40%", metricLabel: "operating cost" },
          { title: "Improved Decision Velocity", description: "Real-time predictions and natural-language querying that shorten the insight-to-action loop." },
          { title: "24/7 Availability", description: "Always-on agents that handle peak loads without sacrificing accuracy or compliance." },
        ]}
      />

      <TechnologyStack
        heading="Production-grade AI infrastructure."
        technologies={[
          "OpenAI", "LangChain", "Python", "TensorFlow", "Azure OpenAI",
          "AWS Bedrock", "Hugging Face", "Pinecone", "Weaviate", "PostgreSQL",
          "Redis", "Docker", "Kubernetes", "Terraform", "Grafana",
        ]}
      />

      <section className="container-wide py-20">
        <SectionEyebrow>Industries Served</SectionEyebrow>
        <SectionHeading>AI adapted to your context and compliance requirements.</SectionHeading>
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
        heading="A disciplined approach to AI delivery."
        steps={[
          { title: "Assessment", description: "Identify high-ROI automation opportunities and evaluate data readiness and risk." },
          { title: "Data Strategy", description: "Design data pipelines, governance and quality controls that make models reliable." },
          { title: "Model Development", description: "Build, train and evaluate models with rigorous evaulation frameworks and red-teaming." },
          { title: "Integration", description: "Embed AI into your stack with API gateways, monitoring and fallback behaviors." },
          { title: "Monitoring & Optimization", description: "Track drift, latency and cost; retrain and improve continuously." },
        ]}
      />

      <WhyChoose heading="The AI partner that delivers outcomes." />

      <RelatedServices currentSlug="ai-automation" />

      <section className="container-wide py-20">
        <div className="surface-glass rounded-2xl p-8 sm:p-12 text-center">
          <SectionEyebrow>Get Started</SectionEyebrow>
          <SectionHeading>Ready to automate the right things?</SectionHeading>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            We will map your highest-impact automation opportunities and propose a pilot plan within one week.
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
