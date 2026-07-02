export type Direction = "at-hu" | "hu-at" | "both";
export type Job =
  | "customers"
  | "partners"
  | "talent"
  | "innovation"
  | "manufacturing"
  | "investment"
  | "operations";

export const JOBS: { id: Job; label: string }[] = [
  { id: "customers", label: "Customers" },
  { id: "partners", label: "Partners" },
  { id: "talent", label: "Talent" },
  { id: "innovation", label: "Innovation" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "investment", label: "Investment" },
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
      return "There are many ways to leverage Hungary's labor cost advantage, whether considering temporary resource needs or longer term commitments.";
    if (jobs.includes("customers"))
      return "Are you an established or early stage business? Hungary's economy is often under the radar from abroad, thus many domains underserved whether corporates or more innovative sectors.";
    if (jobs.includes("innovation"))
      return "Hungarian innovators' typical challenge is the lack of business side - maybe the right sourcing adventure for you?";
    if (jobs.includes("manufacturing"))
      return "An emerging sector also in the innovative world: proximity & cost level justifies differentiated production.";
    if (jobs.includes("operations"))
      return "Already beyond the idea phase, looking into operating? Let's test our network and practical access.";
    if (jobs.includes("partners"))
      return "Despite their proximity, partner- and reseller networks tend to be less proactive internationally, appreciating relevant offers. Let's figure it out together!";
    if (jobs.includes("investment"))
      return "Hungary has been underinvested during the last decades - glad to connect you with angels, specialists, interesting companies.";
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
