// Mensaje prellenado para WhatsApp.

export const WHATSAPP_PHONE = "50487328488";

export const WHATSAPP_MESSAGE = "Hola, me gustaría hablar con alguien de ABC Financiero.";

export function buildWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}

