import { z } from "zod"

export const leadFormSchema = z.object({
  nome: z.string().min(3, "Por favor, escreva seu nome completo"),
  whatsapp: z
    .string()
    .min(14, "WhatsApp inválido — verifique o DDD e número")
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato esperado: (DDD) 9XXXX-XXXX"),
  cidade: z.string().min(2, "Informe a cidade onde pretende abrir"),
  estado: z.string().min(2, "Selecione o estado"),
  capital: z.enum(
    ["500-600", "600-700", "700-800", "800-900", "900-1000", "1000-mais"],
    { error: "Selecione uma faixa de capital" }
  ),
})

export const miniLeadFormSchema = leadFormSchema.pick({
  nome: true,
  whatsapp: true,
})

export type LeadFormData = z.infer<typeof leadFormSchema>
export type MiniLeadFormData = z.infer<typeof miniLeadFormSchema>

export const CAPITAL_LABELS: Record<LeadFormData["capital"], string> = {
  "500-600": "R$ 500.000 a R$ 600.000",
  "600-700": "R$ 600.000 a R$ 700.000",
  "700-800": "R$ 700.000 a R$ 800.000",
  "800-900": "R$ 800.000 a R$ 900.000",
  "900-1000": "R$ 900.000 a R$ 1.000.000",
  "1000-mais": "Mais de R$ 1.000.000",
}

export const ESTADOS_BR = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO",
]
