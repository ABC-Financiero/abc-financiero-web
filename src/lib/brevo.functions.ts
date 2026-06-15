import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SubscribeSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(254),
  listId: z.number().int().positive().max(1_000_000),
});

const GUIDE_LINK = "https://drive.google.com/file/d/1ZyzC09gZyrz2kdw9FU-E8b5AlFNJwCyp/view?usp=sharing";
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "noreply@abcfinanciero.com";
const SENDER_NAME = "ABC Financiero";

function buildGuideEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tu guía está lista</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Inter,Segoe UI,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
          <tr>
            <td style="background:linear-gradient(160deg,#0A1F1A 0%,#0F3D33 55%,#133D2F 100%);padding:40px 32px 32px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.02em;">Tu guía está lista 🎉</h1>
              <p style="margin:12px 0 0;color:rgba(255,255,255,0.85);font-size:15px;line-height:1.5;">Gracias por confiar en <strong style="color:#A7E3CE;">ABC Financiero</strong>.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 16px;color:#1a1a1a;font-size:15px;line-height:1.6;">Hola ${name},</p>
              <p style="margin:0 0 24px;color:#4a4a4a;font-size:15px;line-height:1.6;">
                Aquí tienes el enlace para descargar tu guía gratuita paso a paso para abrir tu cuenta en <strong>Hapi</strong>, depositar sin errores y hacer tu primera inversión desde Honduras.
              </p>
              <p style="margin:0 0 24px;text-align:center;">
                <a href="${GUIDE_LINK}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background-color:#0E7C5A;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:9999px;font-size:15px;font-weight:700;">
                  Descargar mi guía gratis
                </a>
              </p>
              <p style="margin:0 0 8px;color:#4a4a4a;font-size:14px;line-height:1.5;">
                <strong>¿Qué incluye?</strong>
              </p>
              <ul style="margin:0 0 24px;padding-left:20px;color:#4a4a4a;font-size:14px;line-height:1.6;">
                <li>Cómo abrir tu cuenta en Hapi desde Honduras en menos de 10 minutos</li>
                <li>Cómo depositar dinero sin que te dé error en el camino</li>
                <li>Cómo leer un activo y comprar tu primera inversión paso a paso</li>
              </ul>
              <p style="margin:0;color:#888;font-size:13px;line-height:1.5;">
                Si el botón no funciona, copia y pega este enlace en tu navegador:<br/>
                <a href="${GUIDE_LINK}" style="color:#0E7C5A;word-break:break-all;">${GUIDE_LINK}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#f8faf9;padding:20px 32px;text-align:center;border-top:1px solid #e8f0ec;">
              <p style="margin:0;color:#8ba89f;font-size:12px;line-height:1.5;">
                ABC Financiero · Mentoría 1:1 para invertir en la Bolsa de NY desde Honduras<br/>
                ¿Preguntas? Escríbenos a contacto@abcfinanciero.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export const subscribeToBrevoList = createServerFn({ method: "POST" })
  .inputValidator((input) => SubscribeSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      throw new Error("BREVO_API_KEY is not configured");
    }

    // 1. Add/update contact in Brevo list
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
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

    if (!contactRes.ok && contactRes.status !== 204) {
      const body = await contactRes.json().catch(() => ({}) as Record<string, unknown>);
      if ((body as { code?: string }).code !== "duplicate_parameter") {
        console.error("Brevo subscribe failed", contactRes.status, body);
        throw new Error("Brevo request failed");
      }
    }

    // 2. Send transactional email with guide link
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email: data.email.trim(), name: data.name.trim() }],
        subject: "Tu guía gratuita para invertir desde Honduras 🚀",
        htmlContent: buildGuideEmail(data.name.trim()),
      }),
    });

    if (!emailRes.ok) {
      const body = await emailRes.json().catch(() => ({}) as Record<string, unknown>);
      console.error("Brevo email failed", emailRes.status, body);
      // We still return success because the contact was subscribed;
      // the user can see the link on the success page too.
    }

    return { ok: true as const };
  });

