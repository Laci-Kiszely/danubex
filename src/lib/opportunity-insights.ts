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

export function getInsight(direction: Direction | null, job: Job | null): string | null {
  if (!direction || !job) return null;

  if (direction === "at-hu") {
    if (job === "talent")
      return "There are many ways to leverage Hungary's labor cost advantage, whether considering temporary resource needs or longer term commitments.";
    if (job === "customers")
      return "Are you an established or early stage business? Hungary's economy is often under the radar from abroad, thus many domains underserved whether corporates or more innovative sectors.";
    if (job === "innovation")
      return "Hungarian innovators' typical challenge is the lack of business side - maybe the right sourcing adventure for you?";
    if (job === "manufacturing")
      return "An emerging sector also in the innovative world: proximity & cost level justifies differentiated production.";
    if (job === "operations")
      return "Already beyond the idea phase, looking into operating? Let's test our network and practical access.";
    if (job === "partners")
      return "Despite their proximity, partner- and reseller networks tend to be less proactive internationally, appreciating relevant offers. Let's figure it out together!";
    if (job === "investment")
      return "Hungary has been underinvested during the last decades - glad to connect you with angels, specialists, interesting companies.";
    return "Based on your selection, the biggest opportunity may not be market entry — it may be finding the right execution partner.";
  }

  if (direction === "hu-at") {
    if (job === "customers")
      return "An often desired yet challenging path. Glad to help you in starting or scaling your journey.";
    if (job === "partners")
      return "Similarly to customer acquisition in Austria, partnerships require long term and local commitments. Happy to share experiences and resources.";
    if (job === "talent")
      return "Building in Austria most often requires local presence - fortunately there are many networks to tap into a hungry, and even international talent pool.";
    if (job === "innovation")
      return "Austria has many interesting solutions and events remaining invisible in the CEE region. Our ambition is to change that into meaningful collaborations!";
    if (job === "manufacturing")
      return null;
    if (job === "investment")
      return "Whether (startup) investment opportunities, incorporation or fundraises, can help with first-hand experiences.";
    if (job === "operations")
      return "Experienced in setting-up businesses as well as establishing a supportive ecosystem in Austria. Anything you are curious about?";
    return "Entering Austria is less about the product and more about earning a seat in conversations that already exist.";
  }

  return "The ideal storm! Two-way collaboration outperforms one-way expansion, keeping all parties motivated. Let's find likeminded counterparts to grow Europe!";
}
