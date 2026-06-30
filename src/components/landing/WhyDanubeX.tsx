import { Building2, Rocket, Globe2, HandshakeIcon } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

const cards = [
  {
    icon: Building2,
    title: "Corporate experience",
    body: "Understanding how executive decisions actually get made in large organizations.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurial execution",
    body: "Building businesses — not writing reports about them.",
  },
  {
    icon: Globe2,
    title: "Cross-border credibility",
    body: "Deep working understanding of both Austrian and Hungarian ecosystems.",
  },
  {
    icon: HandshakeIcon,
    title: "One accountable partner",
    body: "One conversation. Real execution. No diffusion of responsibility.",
  },
];

export function WhyDanubeX() {
  return (
    <section id="why" className="border-t border-border/60 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading eyebrow="Why DanubeX" title="Why trust DanubeX?" />
        </FadeIn>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-danube/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-danube/10 text-danube">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-tight">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={120}>
          <p className="mt-12 max-w-2xl font-serif text-2xl leading-snug text-foreground sm:text-3xl">
            Our advantage is not access. It is{" "}
            <span className="text-danube">understanding both systems from the inside</span>.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
