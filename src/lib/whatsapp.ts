export const WHATSAPP_NUMBER = "5583999641226"
export const DEFAULT_WHATSAPP_MESSAGE = "Ola! Tenho interesse em conhecer a franquia Beco Magico."

export function createWhatsappUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
