import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  { label: "Company", note: "You bring the question." },
  { label: "One conversation", note: "30 minutes. No pitch." },
  { label: "DanubeX", note: "We own the execution." },
  { label: "Trusted local operators", note: "People we’ve already worked with." },
  { label: "Execution & results", note: "What actually changes." },
];

export function ExecutionModel() {
  return (
    <section className="border-t border-border/60 bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="How it works"
            title="A single line of accountability."
            description="We don’t stop at introductions. We help make things happen."
          />
        </FadeIn>
        <div className="mt-16 grid gap-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <FadeIn key={s.label} delay={i * 90}>
              <div className="relative h-full rounded-xl border border-border bg-card p-6">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-danube">
                  Step {i + 1}
                </div>
                <div className="mt-3 font-serif text-xl tracking-tight">{s.label}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.note}</div>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -bottom-3 left-1/2 hidden h-6 w-px -translate-x-1/2 bg-danube/30 lg:block"
                  />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
