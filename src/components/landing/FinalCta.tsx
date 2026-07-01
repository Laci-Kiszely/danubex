import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/shared/BookCallButton";
import { FadeIn } from "@/components/shared/FadeIn";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 bg-background py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, color-mix(in oklab, var(--danube) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            Let’s explore what’s possible.
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Whether you’re considering expansion, partnerships, innovation, or simply want
            to understand the opportunity — we’d be happy to have a practical conversation.
          </p>
        </FadeIn>
        <FadeIn delay={180}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <BookCallButton size="lg" label="Book a 30-minute Introduction Call" />
            <Button asChild variant="outline" size="lg">
              <a href="#newsletter">Subscribe to DanubeX infos</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
