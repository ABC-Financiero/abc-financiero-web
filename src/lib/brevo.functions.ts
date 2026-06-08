import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SubscribeSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  listId: z.number().int().positive().max(1_000_000),
});

export const subscribeToBrevoList = createServerFn({ method: "POST" })
  .inputValidator((input) => SubscribeSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      throw new Error("BREVO_API_KEY is not configured");
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: data.email.trim(),
        attributes: { FIRSTNAME: data.name.trim() },
        listIds: [data.listId],
        updateEnabled: true,
      }),
    });

    if (res.ok || res.status === 204) {
      return { ok: true as const };
    }

    const body = await res.json().catch(() => ({}) as Record<string, unknown>);
    // Brevo returns 400 with code "duplicate_parameter" when the contact already exists.
    if (body && (body as { code?: string }).code === "duplicate_parameter") {
      return { ok: true as const };
    }

    console.error("Brevo subscribe failed", res.status, body);
    throw new Error("Brevo request failed");
  });
