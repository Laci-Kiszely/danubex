import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CASES, type Case } from "@/lib/cases";

function CaseCard({ c }: { c: Case }) {
  return (
    <article className="mx-3 flex h-full w-[320px] shrink-0 flex-col rounded-2xl border border-border bg-card p-6 sm:w-[360px]">
      <div className="flex items-center gap-3">
        <span className="rounded-md bg-danube/10 px-2 py-0.5 text-xs font-medium tracking-wider text-danube">
          {c.direction}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {c.sector}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-medium text-foreground">{c.company}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{c.challenge}</p>
      <p className="mt-4 font-serif text-xl leading-snug text-foreground">
        {c.result}
      </p>
    </article>
  );
}

export function SuccessfulCases() {
  const track = [...CASES, ...CASES];
  return (
    <section
      id="cases"
      aria-label="Successful cases"
      className="border-t border-border/60 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Proof"
            title="Successful cases"
            description="A snapshot of cross-border moves DanubeX and its network have executed."
          />
        </FadeIn>
      </div>

      <FadeIn>
        <div
          className="group relative mt-14 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {track.map((c, i) => (
              <CaseCard key={`${c.company}-${i}`} c={c} />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
