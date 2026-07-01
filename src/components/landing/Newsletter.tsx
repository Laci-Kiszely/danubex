import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="border-t border-border/60 bg-muted/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="THE DANUBEX NEWSLETTER"
            title="Stay ahead of the Austria–Hungary opportunity."
            description="Interested in this developing concept? Sign-up to our newsletter and expect regular executive briefing about cross-border growth, innovation, talents and partnerships."
          />
          <div className="mt-10">
            <NewsletterForm buttonLabel="Get the DanubeX info" />
            <p className="mt-3 text-xs text-muted-foreground">
              One email per month. No spam. Unsubscribe anytime.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

