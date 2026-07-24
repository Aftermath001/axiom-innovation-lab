import { SectionEyebrow, SectionHeading } from "./Services";
import { Users, Award, ShieldCheck, Layers, Workflow, HeartHandshake } from "lucide-react";

const items = [
  {
    title: "Expert Team",
    desc: "Senior engineers, designers and strategists — no juniors on your account.",
    icon: Users,
    span: "md:col-span-2",
  },
  {
    title: "Proven Delivery",
    desc: "A repeatable, outcome-driven engagement model with weekly value.",
    icon: Award,
    span: "",
  },
  {
    title: "Security First",
    desc: "Zero-trust by default. Compliance-ready from day one.",
    icon: ShieldCheck,
    span: "",
  },
  {
    title: "Modern Architecture",
    desc: "Cloud-native, event-driven, API-first — built to evolve.",
    icon: Layers,
    span: "md:col-span-2",
  },
  {
    title: "Agile Methodology",
    desc: "Dual-track discovery + delivery keeps momentum without waste.",
    icon: Workflow,
    span: "",
  },
  {
    title: "Long-Term Partnership",
    desc: "80% of our clients renew beyond the first engagement.",
    icon: HeartHandshake,
    span: "md:col-span-2",
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>Why MetaMind</SectionEyebrow>
        <SectionHeading>Built to be the technology partner you keep.</SectionHeading>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          {items.map((it) => (
            <div
              key={it.title}
              className={`card-hover group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card/70 to-ink p-6 ${it.span}`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                <it.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
