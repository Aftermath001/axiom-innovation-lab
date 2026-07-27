import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionEyebrow, SectionHeading } from "./Services";
import { Mail, Phone, MapPin } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more").max(1500),
});

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const map: Record<string, string> = {};
      for (const issue of result.error.issues) {
        map[String(issue.path[0])] = issue.message;
      }
      setErrors(map);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    toast.success("Thanks — we'll be in touch within one business day.");
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>Contact</SectionEyebrow>
        <SectionHeading>Let's build what's next, together.</SectionHeading>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <p className="max-w-md text-muted-foreground">
              Tell us about your ambition. We'll respond within one business day with next steps
              or scheduling for a consultation.
            </p>
            <ul className="space-y-4 text-sm">
              <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="metamindlimited@gmail.com" />
              <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+254 798 611 952" />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label="Nairobi HQ"
                value="Nairobi-CBD, Kenya"
              />
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="surface-glass grid gap-4 rounded-2xl p-6 sm:p-8"
          >
            <Field label="Name" name="name" error={errors.name}>
              <Input id="name" name="name" required autoComplete="name" placeholder="Your full name" />
            </Field>
            <Field label="Work email" name="email" error={errors.email}>
              <Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
            </Field>
            <Field label="Company" name="company" error={errors.company}>
              <Input id="company" name="company" autoComplete="organization" placeholder="Company name" />
            </Field>
            <Field label="How can we help?" name="message" error={errors.message}>
              <Textarea id="message" name="message" required rows={5} placeholder="Briefly describe your project or challenge." />
            </Field>
            <Button type="submit" variant="brand" size="lg" disabled={loading}>
              {loading ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground">{value}</div>
      </div>
    </li>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
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
