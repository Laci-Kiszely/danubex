import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Opportunity } from "@/components/landing/Opportunity";
import { WhyDanubeX } from "@/components/landing/WhyDanubeX";
import { ExecutionModel } from "@/components/landing/ExecutionModel";
import { OpportunityExplorer } from "@/components/landing/OpportunityExplorer";
import { Newsletter } from "@/components/landing/Newsletter";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

const TITLE = "DanubeX — Turn Austria and Hungary into one business opportunity";
const DESCRIPTION =
  "DanubeX helps companies build trusted commercial relationships across the Austria–Hungary corridor, reducing the cost, risk and management effort of cross-border execution.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Opportunity />
        <WhyDanubeX />
        <ExecutionModel />
        <OpportunityExplorer />
        <Newsletter />
        <FinalCta />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
