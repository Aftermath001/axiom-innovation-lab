import { blogPosts } from "@/lib/site-data";
import { SectionEyebrow, SectionHeading } from "./Services";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Insights</SectionEyebrow>
            <SectionHeading>Fresh thinking from our engineers.</SectionHeading>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link to="/blog">Read the blog <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((p) => (
            <Link
              key={p.slug}
              to="/blog"
              className="card-hover group flex flex-col rounded-2xl border border-border/60 bg-card/60 p-6"
            >
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                <span className="text-brand">{p.category}</span>
                <span className="text-muted-foreground">· {p.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-brand">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.excerpt}
              </p>
              <div className="mt-6 text-xs text-muted-foreground">{p.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
