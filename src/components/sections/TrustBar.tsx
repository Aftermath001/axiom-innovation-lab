import { partners } from "@/lib/site-data";

export function TrustBar() {
  const doubled = [...partners, ...partners];
  return (
    <section aria-label="Trusted partners" className="border-y border-border/60 bg-ink/40 py-10">
      <div className="container-wide">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by ambitious teams · Partnered with the world's leading platforms
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
            {doubled.map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="font-display text-lg font-medium text-foreground/60 transition-colors hover:text-foreground"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
