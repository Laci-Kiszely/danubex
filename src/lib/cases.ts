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
    sector: "Digital Marketing",
    company: "Austrian Digital Marketing Agency",
    challenge: "Hungarian scale-up looked for European go-to-market support",
    result: "Long term cooperation covering multiple markets",
  },
  {
    direction: "AT→HU",
    sector: "Growth Consulting",
    company: "Vienna-based Growth Consultant",
    challenge: "Hungarian startup looked for European positioning and business development support",
    result: "Ongoing, 1 new country successfully entered",
  },
  {
    direction: "AT→HU",
    sector: "Sport",
    company: "Vienna-based StartUp",
    challenge: "Austrian startup looked for first international clients.",
    result: "Successful cooperation with key Hungarian player in the specific field",
  },
];
