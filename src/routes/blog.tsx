import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { blogPosts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — MetaMind Insights" },
      {
        name: "description",
        content:
          "Field notes from MetaMind engineers on cloud, AI, security and building technology in Africa.",
      },
      { property: "og:title", content: "MetaMind Blog" },
      { property: "og:description", content: "Fresh thinking from our engineers." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Insights"
        title="Field notes from our engineers, architects and strategists."
        description="Practical writing on cloud, AI, security and building technology in African markets."
      />
      <section className="container-wide grid gap-5 py-20 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/ai-automation-kenyan-businesses"
            className="card-hover group flex flex-col rounded-2xl border border-border/60 bg-card/60 p-6"
          >
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
              <span className="text-brand">{p.category}</span>
              <span className="text-muted-foreground">· {p.readTime}</span>
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-snug group-hover:text-brand transition-colors">
              {p.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{p.date}</span>
              <span className="text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                Read article →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
