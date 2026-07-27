import {
  Code2,
  Brain,
  Cloud,
  ShieldCheck,
  Lightbulb,
  Server,
  BarChart3,
  Rocket,
  Building2,
  HeartPulse,
  GraduationCap,
  Truck,
  Landmark,
  ShoppingBag,
  Factory,
} from "lucide-react";

export const serviceLinks = [
  {
    slug: "software-development",
    title: "Software Development",
    summary: "Custom web, mobile & enterprise platforms engineered for scale.",
    icon: Code2,
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    summary: "LLMs, intelligent agents & workflow automation that ship value.",
    icon: Brain,
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    summary: "AWS, Azure & GCP architecture, migration and optimization.",
    icon: Cloud,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    summary: "Zero-trust architectures, audits and continuous protection.",
    icon: ShieldCheck,
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    summary: "Strategy, architecture and technology roadmaps that unlock growth.",
    icon: Lightbulb,
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    summary: "24/7 monitoring, support and infrastructure operations.",
    icon: Server,
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    summary: "Data platforms, BI and analytics that turn data into decisions.",
    icon: BarChart3,
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    summary: "End-to-end programs that modernize operations, teams and tech.",
    icon: Rocket,
  },
] as const;

export const solutions = [
  {
    title: "Reduce Operational Costs",
    desc: "Automate manual workflows and consolidate systems to cut recurring spend by up to 40%.",
    metric: "-40%",
    metricLabel: "operating cost",
  },
  {
    title: "Automate Business Processes",
    desc: "Deploy AI copilots and orchestration to remove friction across finance, ops and support.",
    metric: "10×",
    metricLabel: "faster workflows",
  },
  {
    title: "Improve Security Posture",
    desc: "Zero-trust, continuous audits and SOC-ready observability across your estate.",
    metric: "99.99%",
    metricLabel: "uptime target",
  },
  {
    title: "Accelerate Digital Growth",
    desc: "Ship modern digital products with cross-functional squads and a proven delivery model.",
    metric: "6 wks",
    metricLabel: "to first release",
  },
  {
    title: "Scale Technology Infrastructure",
    desc: "Cloud-native platforms built to serve millions across the continent and beyond.",
    metric: "50M+",
    metricLabel: "requests/day",
  },
  {
    title: "Unlock Data as an Asset",
    desc: "Unified data platforms with real-time BI, ML and governed self-service analytics.",
    metric: "3×",
    metricLabel: "decision velocity",
  },
] as const;

export const industries = [
  { title: "Financial Services", icon: Building2, desc: "Core banking, payments, risk & compliance modernization." },
  { title: "Healthcare", icon: HeartPulse, desc: "Digital health platforms, EMR, telemedicine and analytics." },
  { title: "Education", icon: GraduationCap, desc: "Learning platforms, student systems, EdTech innovation." },
  { title: "Logistics", icon: Truck, desc: "Fleet, warehousing, last-mile and supply-chain visibility." },
  { title: "Government", icon: Landmark, desc: "Citizen services, e-Government and secure digital public infrastructure." },
  { title: "Retail", icon: ShoppingBag, desc: "Omnichannel commerce, loyalty and AI-driven personalization." },
  { title: "Manufacturing", icon: Factory, desc: "Industry 4.0, IIoT, predictive maintenance and OT/IT convergence." },
] as const;

export const caseStudies = [
  {
    slug: "pan-african-bank-cloud",
    client: "Pan-African Bank",
    industry: "Financial Services",
    title: "Re-platforming core banking on the cloud",
    challenge:
      "Legacy monolith limited product velocity and posed compliance risk across 7 markets.",
    solution:
      "Domain-driven microservices on AWS with event streaming, a unified identity layer and CI/CD.",
    results: ["7× faster product releases", "$2.4M annual infrastructure savings", "PCI-DSS re-certified"],
    tech: ["AWS", "Kubernetes", "Kafka", "Node.js", "PostgreSQL"],
  },
  {
    slug: "national-health-ai",
    client: "National Health Provider",
    industry: "Healthcare",
    title: "AI triage across 120 facilities",
    challenge: "Frontline clinicians overwhelmed by patient volume and inconsistent triage.",
    solution:
      "Clinical LLM triage assistant integrated into EMR with human-in-the-loop guardrails.",
    results: ["38% shorter waiting times", "22% fewer misclassifications", "94% clinician adoption"],
    tech: ["Python", "OpenAI", "FastAPI", "Azure", "Postgres"],
  },
  {
    slug: "gov-citizen-platform",
    client: "Ministry of Digital Economy",
    industry: "Government",
    title: "A unified citizen services platform",
    challenge: "Fragmented services created friction for 12M citizens and delayed reforms.",
    solution:
      "A shared digital public infrastructure with identity, payments and service delivery APIs.",
    results: ["12M citizens onboarded", "60% reduction in service wait time", "SOC 2-aligned controls"],
    tech: ["TypeScript", "Node.js", "Kubernetes", "PostgreSQL", "Terraform"],
  },
] as const;

export const techStack = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "MongoDB",
  "PostgreSQL",
  "OpenAI",
  "Supabase",
  "Next.js",
  "Terraform",
  "Kafka",
  "GraphQL",
] as const;

export const testimonials = [
  {
    quote:
      "MetaMind embedded with our engineering org and delivered a modernization roadmap that actually shipped. Rare combination of strategy and craft.",
    author: "Amara Okoye",
    role: "CTO, Pan-African Bank",
  },
  {
    quote:
      "Their AI team helped us launch a clinical assistant that our doctors trust. Measured outcomes, not slideware.",
    author: "Dr. Wanjiru Kamau",
    role: "Chief Medical Officer, National Health Provider",
  },
  {
    quote:
      "A partner that understands African context and global standards. They set the bar for engineering excellence.",
    author: "Kwame Mensah",
    role: "Director of Digital, Ministry of Digital Economy",
  },
] as const;

export const blogPosts = [
  {
    slug: "african-cloud-adoption-2026",
    title: "The State of African Cloud Adoption in 2026",
    excerpt:
      "Public cloud spend in Africa is compounding at 27%. Here is what CIOs need to plan for next.",
    readTime: "8 min read",
    category: "Cloud",
    date: "Jul 12, 2026",
  },
  {
    slug: "llm-agents-in-production",
    title: "Shipping LLM Agents to Production, Safely",
    excerpt: "Guardrails, evaluation and observability patterns from our deployments across banking and health.",
    readTime: "11 min read",
    category: "AI",
    date: "Jun 30, 2026",
  },
  {
    slug: "zero-trust-for-scaleups",
    title: "Zero-Trust Security for African Scale-ups",
    excerpt: "A pragmatic 90-day roadmap for teams moving beyond perimeter security.",
    readTime: "6 min read",
    category: "Security",
    date: "Jun 14, 2026",
  },
] as const;

export const partners = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "OpenAI",
  "MongoDB",
  "HashiCorp",
  "Cloudflare",
  "Snowflake",
] as const;
