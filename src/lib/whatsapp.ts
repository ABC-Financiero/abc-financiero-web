// Mensaje prellenado para WhatsApp que incluye descargo de responsabilidad
// y nota de riesgo, conforme al aviso legal de ABC Financiero.

export const WHATSAPP_PHONE = "50487328488";

export const WHATSAPP_DISCLAIMER = [
  "Hola, quiero reservar una llamada con ABC Financiero.",
  "",
  "— Descargo de responsabilidad —",
  "Entiendo que ABC Financiero ofrece contenido educativo y de mentoría sobre finanzas personales e inversión, y que no constituye asesoría financiera, legal ni tributaria personalizada.",
  "",
  "— Nota de riesgo —",
  "Reconozco que invertir en la bolsa de valores y en cualquier activo financiero implica riesgos, incluida la posible pérdida total o parcial del capital invertido. Los resultados pasados no garantizan rendimientos futuros y cualquier decisión de inversión es de mi entera responsabilidad.",
].join("\n");

export function buildWhatsAppUrl(message: string = WHATSAPP_DISCLAIMER): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
