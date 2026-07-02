import { useMemo, useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BookCallButton } from "@/components/shared/BookCallButton";
import { cn } from "@/lib/utils";
import {
  DIRECTIONS,
  JOBS,
  getInsight,
  type Direction,
  type Job,
} from "@/lib/opportunity-insights";

export function OpportunityExplorer() {
  const [direction, setDirection] = useState<Direction | null>("at-hu");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const insight = useMemo(() => getInsight(direction, selectedJob), [direction, selectedJob]);

  function selectJob(j: Job) {
    setSelectedJob((prev) => (prev === j ? null : j));
  }

  return (
    <section id="explorer" className="border-t border-border/60 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Opportunity explorer"
            title="Where are you looking to grow?"
            description="Two quick questions. A starting point for the conversation."
          />
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-10">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Step 1 — Direction
            </div>
            <div className="mt-4 inline-flex flex-wrap gap-2 rounded-xl bg-muted p-1">
              {DIRECTIONS.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDirection(d.id)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    direction === d.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Step 2 — What are you looking for?
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {JOBS.map((j) => {
                const active = selectedJob === j.id;
                return (
                  <button
                    key={j.id}
                    type="button"
                    onClick={() => selectJob(j.id)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition-colors",
                      active
                        ? "border-danube bg-danube text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-danube/50",
                    )}
                  >
                    {j.label}
                  </button>
                );
              })}
            </div>

            <div
              className={cn(
                "mt-10 rounded-xl border border-dashed p-6 transition-colors",
                insight ? "border-danube/40 bg-danube/5" : "border-border bg-muted/40",
              )}
            >
              {insight ? (
                <>
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-danube">
                    Working hypothesis
                  </div>
                  <p className="mt-3 font-serif text-xl leading-snug text-foreground sm:text-2xl">
                    {insight}
                  </p>
                  <div className="mt-6">
                    <BookCallButton label="Let’s discuss your situation" />
                  </div>
                </>
              ) : (
                <p className="text-muted-foreground">
                  Pick a direction and at least one focus area to see a starting hypothesis.
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
