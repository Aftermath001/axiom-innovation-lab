import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* backdrop */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1200}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/85 to-background" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* floating orbs */}
      <div className="glow-orb top-1/4 left-[10%] h-72 w-72 bg-brand/40 animate-float-slow" />
      <div className="glow-orb bottom-0 right-[8%] h-96 w-96 bg-accent/30 animate-float-slow [animation-delay:2s]" />

      <div className="container-wide relative">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="surface-glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-foreground/90">
            <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            Nairobi · Engineering intelligent transformation
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[76px]">
            Engineering{" "}
            <span className="text-gradient">Intelligent Digital Transformation.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            MetaMind helps organizations scale through software engineering, AI solutions,
            cloud technologies, cybersecurity, and digital innovation — with African insight
            and global standards.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="brand">
              <Link to="/consultation">
                Book Consultation <ArrowRight className="ml-0.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="hero">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </motion.div>

        {/* stat strip */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="surface-glass mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4"
        >
          {[
            { k: "120+", v: "Engineers & consultants" },
            { k: "40+", v: "Enterprise clients" },
            { k: "12", v: "Markets served" },
            { k: "99.99%", v: "Delivery reliability" },
          ].map((s) => (
            <div key={s.v} className="bg-background/40 px-5 py-6 text-center">
              <div className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
