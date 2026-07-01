import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  email: z.string().trim().email().max(255),
});

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    const timestamp = new Date().toISOString();
    const subject = `New DanubeX subscriber: ${data.email}`;
    const html = `
      <div style="font-family: system-ui, sans-serif; line-height: 1.5;">
        <h2>New DanubeX newsletter subscriber</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "DanubeX <noreply@kiszely.app>",
        to: ["kiszely@abilitymatrix.com"],
        reply_to: data.email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Resend API error:", res.status, errBody);
      throw new Error("Failed to send notification");
    }

    return { success: true };
  });
