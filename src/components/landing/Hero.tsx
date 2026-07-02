import { BookCallButton } from "@/components/shared/BookCallButton";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/FadeIn";

function FlowGraphic() {
  return (
    <svg
      viewBox="0 0 600 180"
      role="img"
      aria-label="Connection between Austria and Hungary"
      className="w-full max-w-3xl text-danube"
    >
      <defs>
        <linearGradient id="dx-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path
        d="M90 90 C 220 10, 380 170, 510 90"
        fill="none"
        stroke="url(#dx-grad)"
        strokeWidth="1.5"
      />
      <path
        d="M90 90 C 220 10, 380 170, 510 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.5"
        className="danube-flow"
      />
      <g>
        <circle cx="90" cy="90" r="7" fill="currentColor" />
        <circle cx="90" cy="90" r="16" fill="none" stroke="currentColor" strokeOpacity="0.3" />
        <text x="90" y="140" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="500">
          Austria
        </text>
      </g>
      <g>
        <circle cx="510" cy="90" r="7" fill="currentColor" />
        <circle cx="510" cy="90" r="16" fill="none" stroke="currentColor" strokeOpacity="0.3" />
        <text x="510" y="140" textAnchor="middle" className="fill-foreground" fontSize="13" fontWeight="500">
          Hungary
        </text>
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklab, var(--danube) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-danube" />
            Your easiest international market
          </div>
        </FadeIn>
        <FadeIn delay={80}>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-7xl">
            Austria meets Hungary.{" "}
            <span className="text-danube">Business opps within the day.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={160}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Hungary is a low-risk growth and execution market for Austrian companies.
            We remove the friction — so you can operate across the border with the speed
            and confidence of working at home.
          </p>
        </FadeIn>
        <FadeIn delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <BookCallButton size="lg" />
            <Button asChild variant="outline" size="lg">
              <a href="#newsletter">Subscribe to DanubeX infos</a>
            </Button>
          </div>
        </FadeIn>
        <FadeIn delay={360}>
          <div className="mt-16 flex justify-center">
            <FlowGraphic />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
