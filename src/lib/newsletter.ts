import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email("Enter a valid email")
  .max(255);

// Stub. Wire to Mailchimp/Substack/ConvertKit later via a server function.
export async function submitEmail(email: string): Promise<{ ok: true }> {
  const parsed = emailSchema.parse(email);
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.info("[DanubeX] newsletter signup:", parsed);
  }
  await new Promise((r) => setTimeout(r, 400));
  return { ok: true };
}
