export type Case = {
  direction: "AT→HU" | "HU→AT";
  sector: string;
  company: string;
  challenge: string;
  result: string;
};

// TODO: replace with real cases provided by the client.
export const CASES: Case[] = [
  {
    direction: "AT→HU",
    sector: "Industrial manufacturing",
    company: "Austrian mid-size manufacturer",
    challenge: "Needed a Hungarian production partner without opening an entity.",
    result: "Operational within 6 weeks via a trusted local operator.",
  },
  {
    direction: "AT→HU",
    sector: "SaaS",
    company: "Vienna-based B2B SaaS",
    challenge: "First non-German-speaking market entry with zero local footprint.",
    result: "Closed three enterprise pilots in Budapest in one quarter.",
  },
  {
    direction: "HU→AT",
    sector: "Engineering services",
    company: "Budapest engineering firm",
    challenge: "Wanted access to Austrian enterprise buyers with credibility.",
    result: "Secured framework agreement with an Austrian industrial group.",
  },
  {
    direction: "AT→HU",
    sector: "Talent & R&D",
    company: "Austrian scale-up",
    challenge: "Hiring senior engineers under Vienna cost pressure.",
    result: "Built a 12-person Budapest R&D team without setting up HR ops.",
  },
];
