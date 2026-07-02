import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  email: z.string().trim().email().max(255),
  type: z.enum(["subscribe", "unsubscribe"]).default("subscribe"),
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
    const isUnsub = data.type === "unsubscribe";
    const subject = isUnsub
      ? `DanubeX unsubscribe request: ${data.email}`
      : `New DanubeX subscriber: ${data.email}`;
    const heading = isUnsub
      ? "DanubeX unsubscribe request"
      : "New DanubeX newsletter subscriber";
    const html = `
      <div style="font-family: system-ui, sans-serif; line-height: 1.5;">
        <h2>${heading}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Action:</strong> ${isUnsub ? "Unsubscribe" : "Subscribe"}</p>
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
        to: ["laci@danubex.kiszely.app"],
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
