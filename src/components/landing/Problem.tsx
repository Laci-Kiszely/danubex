import {
  ShieldCheck,
  Languages,
  Users,
  Scale,
  Gauge,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

const frictions: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: ShieldCheck, title: "Trust", body: "Working with people you don’t yet have a reason to trust." },
  { icon: Languages, title: "Language", body: "Negotiating outside your operating language slows everything down." },
  { icon: Users, title: "Finding partners", body: "Identifying the right operators — not just anyone with a website." },
  { icon: Scale, title: "Legal complexity", body: "Two regulatory contexts, two tax regimes, one decision to make." },
  { icon: Gauge, title: "Management bandwidth", body: "Cross-border projects quietly consume the most senior attention." },
  { icon: AlertTriangle, title: "Execution risk", body: "Plans translate badly. Execution rarely survives the border." },
];

export function Problem() {
  return (
    <section id="problem" className="border-t border-border/60 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="The friction"
            title={<>So close. <span className="text-muted-foreground">Yet still too far apart.</span></>}
            description="Austria and Hungary share geography, supply chains, talent, innovation, and customers. Yet many companies never collaborate — not because the opportunity isn’t there, but because the friction is hidden."
          />
        </FadeIn>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {frictions.map((f, i) => (
            <FadeIn key={f.title} delay={i * 60}>
              <div className="h-full bg-card p-7 transition-colors hover:bg-accent">
                <f.icon className="h-5 w-5 text-danube" />
                <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={120}>
          <p className="mt-12 max-w-2xl text-lg text-foreground">
            We remove friction — not by advising, but by helping companies{" "}
            <span className="text-danube">execute</span>.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
