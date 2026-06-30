export type Direction = "at-hu" | "hu-at" | "both";
export type Job =
  | "customers"
  | "partners"
  | "talent"
  | "innovation"
  | "manufacturing"
  | "investment"
  | "technology"
  | "operations";

export const JOBS: { id: Job; label: string }[] = [
  { id: "customers", label: "Customers" },
  { id: "partners", label: "Partners" },
  { id: "talent", label: "Talent" },
  { id: "innovation", label: "Innovation" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "investment", label: "Investment" },
  { id: "technology", label: "Technology" },
  { id: "operations", label: "Operations" },
];

export const DIRECTIONS: { id: Direction; label: string }[] = [
  { id: "at-hu", label: "Austria → Hungary" },
  { id: "hu-at", label: "Hungary → Austria" },
  { id: "both", label: "Both" },
];

export function getInsight(direction: Direction | null, jobs: Job[]): string | null {
  if (!direction || jobs.length === 0) return null;

  if (direction === "at-hu") {
    if (jobs.includes("talent"))
      return "Hungary’s engineering and operational talent is closer than you think — but hiring without a local execution partner is where most attempts stall.";
    if (jobs.includes("customers"))
      return "Your first ten Hungarian customers won’t come from a market report. They come from being introduced by someone the buyer already trusts.";
    if (jobs.includes("manufacturing") || jobs.includes("operations"))
      return "The biggest hidden cost isn’t setup — it’s the management bandwidth needed to keep an operation running across the border.";
    if (jobs.includes("partners"))
      return "Finding partners is rarely the blocker. Validating that they can actually execute is.";
    return "Based on your selection, the biggest opportunity may not be market entry — it may be finding the right execution partner.";
  }

  if (direction === "hu-at") {
    if (jobs.includes("customers"))
      return "Austrian enterprise buyers move on credibility signals. The fastest path in is a warm relationship, not a cold pitch.";
    if (jobs.includes("investment"))
      return "Austrian capital is conservative but loyal — the work happens before the pitch, not in the deck.";
    return "Entering Austria is less about the product and more about earning a seat in conversations that already exist.";
  }

  return "Two-way collaboration usually outperforms one-way expansion — the leverage compounds when value flows in both directions.";
}
