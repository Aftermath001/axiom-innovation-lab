import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { motion } from "motion/react";
import { serviceLinks } from "@/lib/site-data";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Software, AI, Cloud, Security | MetaMind" },
      {
        name: "description",
        content:
          "Full-stack technology services: software engineering, AI, cloud, cybersecurity, IT consulting, managed IT, data analytics and digital transformation.",
      },
      { property: "og:title", content: "MetaMind Services" },
      { property: "og:description", content: "End-to-end technology services from a senior team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Services"
        title="Deep technology capability, delivered by senior teams."
        description="From advisory to build to run — a complete stack of services for every stage of your transformation."
      />
      <section className="container-wide grid gap-4 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {serviceLinks.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
          >
            <Link
              to={`/services/${s.slug}`}
              className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 transition-transform group-hover:scale-105">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              <ArrowUpRight className="mt-6 h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </Link>
          </motion.div>
        ))}
      </section>
    </SiteLayout>
  );
}
