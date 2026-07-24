import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 pt-36 pb-20">
      <div className="grid-bg absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_75%)]" />
      <div className="glow-orb -top-24 left-1/3 h-72 w-72 bg-brand/25" />
      <div className="glow-orb bottom-0 right-0 h-80 w-80 bg-accent/20" />
      <div className="container-wide relative">
        {eyebrow ? (
          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">{eyebrow}</span>
          </div>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
