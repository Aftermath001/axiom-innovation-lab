import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — MetaMind" },
      {
        name: "description",
        content: "Schedule a discovery call with MetaMind. A senior consultant will respond within one business day.",
      },
      { property: "og:title", content: "Book a MetaMind Consultation" },
      { property: "og:description", content: "Schedule a discovery call with a senior consultant." },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: ConsultationPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(120),
  role: z.string().trim().min(1).max(80),
  service: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().trim().min(10).max(2000),
});

const services = ["Software Development", "AI & Automation", "Cloud Solutions", "Cybersecurity", "IT Consulting", "Managed IT", "Data & Analytics", "Digital Transformation"];
const budgets = ["Under $25k", "$25k – $100k", "$100k – $500k", "$500k+"];

function ConsultationPage() {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget).entries());
    const data = { ...raw, service, budget };
    const result = schema.safeParse(data);
    if (!result.success) {
      const map: Record<string, string> = {};
      for (const i of result.error.issues) map[String(i.path[0])] = i.message;
      setErrors(map);
      toast.error("Please check the form for errors.");
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Consultation request received — we'll be in touch shortly.");
    (e.currentTarget as HTMLFormElement).reset();
    setService("");
    setBudget("");
  }

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Consultation"
        title="Book a discovery call with a senior consultant."
        description="Share a few details and we'll match you with the right expertise for a 45-minute working session."
      />
      <section className="container-wide grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold">What to expect</h2>
          {[
            "Response within one business day",
            "Confidential — NDA available on request",
            "Senior consultant, not a sales rep",
            "Concrete next steps, not a slide deck",
          ].map((t) => (
            <div key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {t}
            </div>
          ))}
        </aside>

        <form onSubmit={onSubmit} noValidate className="surface-glass grid gap-4 rounded-2xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" error={errors.name}>
              <Input id="name" name="name" required autoComplete="name" />
            </Field>
            <Field label="Work email" name="email" error={errors.email}>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </Field>
            <Field label="Company" name="company" error={errors.company}>
              <Input id="company" name="company" required autoComplete="organization" />
            </Field>
            <Field label="Role" name="role" error={errors.role}>
              <Input id="role" name="role" required autoComplete="organization-title" />
            </Field>
            <Field label="Service of interest" name="service" error={errors.service}>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
                <SelectContent>{services.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}</SelectContent>
              </Select>
            </Field>
            <Field label="Budget range" name="budget" error={errors.budget}>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger><SelectValue placeholder="Select a range" /></SelectTrigger>
                <SelectContent>{budgets.map((b) => (<SelectItem key={b} value={b}>{b}</SelectItem>))}</SelectContent>
              </Select>
            </Field>
          </div>
          <Field label="Tell us about your project" name="message" error={errors.message}>
            <Textarea id="message" name="message" required rows={5} placeholder="Goals, timelines, current stack, constraints…" />
          </Field>
          <Button type="submit" size="lg" variant="brand" disabled={loading}>
            {loading ? "Sending…" : "Request consultation"}
          </Button>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </Label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
