import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

const bullets = [
  "One market insight",
  "One company to watch",
  "One collaboration opportunity",
  "One execution lesson",
  "One ecosystem or funding update",
];

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="border-t border-border/60 bg-muted/30 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <SectionHeading
            eyebrow="The DanubeX Brief"
            title="Stay ahead of the Austria–Hungary opportunity."
            description="A concise monthly briefing for executives interested in cross-border growth, innovation, talent and partnerships."
          />
        </FadeIn>
        <FadeIn delay={120}>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-danube">
              Each issue
            </div>
            <ul className="mt-5 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-danube" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <NewsletterForm />
              <p className="mt-3 text-xs text-muted-foreground">
                One email per month. No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
