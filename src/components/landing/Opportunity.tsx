import { ArrowRight, Check } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

const austrian = [
  "Expand into Hungary",
  "Find customers",
  "Hire talent",
  "Build partnerships",
  "Validate new markets",
  "Innovation collaboration",
  "Operational scaling",
];

const hungarian = [
  "Access Austrian customers",
  "Build enterprise relationships",
  "Expand into Austria",
  "Find partners",
  "Technology collaboration",
  "Joint innovation projects",
];

export function Opportunity() {
  return (
    <section id="opportunity" className="border-t border-border/60 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="The opportunity"
            title="Hungary: a low-risk growth and execution market"
          />
        </FadeIn>
        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="relative h-full rounded-2xl border border-danube/40 bg-card p-8 shadow-sm sm:p-10">
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-danube" />
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-danube/10 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-danube">
                  Primary
                </span>
                <span className="text-sm text-muted-foreground">Austria → Hungary</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Austrian companies
              </h3>
              <p className="mt-3 text-muted-foreground">
                The dominant use case: leveraging Hungary as a low-risk growth and execution market.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {austrian.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-foreground">
                    <ArrowRight className="mt-1 h-4 w-4 text-danube" />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={120} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-border bg-card/60 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Bi-directional
                </span>
                <span className="text-sm text-muted-foreground">Hungary → Austria</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
                Hungarian companies
              </h3>
              <p className="mt-3 text-muted-foreground">
                Reaching Austrian enterprise buyers, capital, and partners with credibility.
              </p>
              <ul className="mt-8 grid gap-3">
                {hungarian.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-foreground">
                    <Check className="mt-1 h-4 w-4 text-muted-foreground" />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
