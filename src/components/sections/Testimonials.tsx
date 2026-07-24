import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/lib/site-data";
import { SectionEyebrow, SectionHeading } from "./Services";
import { Quote } from "lucide-react";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-wide">
        <SectionEyebrow>Testimonials</SectionEyebrow>
        <SectionHeading>What our partners say.</SectionHeading>

        <div className="surface-glass relative mt-12 overflow-hidden rounded-3xl p-8 sm:p-12">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-brand/15" aria-hidden="true" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl"
            >
              <p className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                "{t.quote}"
              </p>
              <footer className="mt-6 text-sm">
                <div className="font-medium text-foreground">{t.author}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-8 flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-brand" : "w-4 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
