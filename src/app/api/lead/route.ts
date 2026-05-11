import { NextResponse } from "next/server"
import { leadFormSchema, miniLeadFormSchema } from "@/components/forms/LeadFormSchema"

export const runtime = "nodejs"

const COMPLETE_LEAD_WEBHOOK_URL = "https://webhook.rwsolucoesdigitais.com/webhook/becoformmaior"
const QUICK_LEAD_WEBHOOK_URL = "https://webhook.rwsolucoesdigitais.com/webhook/becoformmenor"
const SAO_PAULO_TIME_ZONE = "America/Sao_Paulo"

const CAPITAL_LABELS = {
  "500-600": "R$ 500.000 a R$ 600.000",
  "600-700": "R$ 600.000 a R$ 700.000",
  "700-800": "R$ 700.000 a R$ 800.000",
  "800-900": "R$ 800.000 a R$ 900.000",
  "900-1000": "R$ 900.000 a R$ 1.000.000",
  "1000-mais": "Mais de R$ 1.000.000",
} as const

function getSaoPauloSubmissionDate(now: Date) {
  return {
    data_envio: new Intl.DateTimeFormat("pt-BR", {
      timeZone: SAO_PAULO_TIME_ZONE,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(now),
    hora_envio: new Intl.DateTimeFormat("pt-BR", {
      timeZone: SAO_PAULO_TIME_ZONE,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      hourCycle: "h23",
    }).format(now),
    timezone_envio: SAO_PAULO_TIME_ZONE,
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const fullLead = leadFormSchema.safeParse(body)
    const miniLead = fullLead.success ? null : miniLeadFormSchema.safeParse(body)
    const source = typeof body?.source === "string" ? body.source : "site-beco-franquia"

    if (!fullLead.success && !miniLead?.success) {
      return NextResponse.json(
        { error: "Dados invalidos", issues: fullLead.error.issues },
        { status: 400 }
      )
    }

    const leadType = fullLead.success ? "complete" : "quick-contact"
    const webhookUrl = fullLead.success ? COMPLETE_LEAD_WEBHOOK_URL : QUICK_LEAD_WEBHOOK_URL
    const now = new Date()
    const leadData = fullLead.success
      ? {
          ...fullLead.data,
          capital: CAPITAL_LABELS[fullLead.data.capital],
        }
      : miniLead!.data
    const lead = {
      timestamp: now.toISOString(),
      ...getSaoPauloSubmissionDate(now),
      source,
      type: leadType,
      ...leadData,
    }

    console.log("[lead]", lead)

    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      cache: "no-store",
    })

    if (!webhookRes.ok) {
      throw new Error(`Lead webhook failed with status ${webhookRes.status}`)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[lead] erro:", err)
    return NextResponse.json(
      { error: "Erro interno. Tente novamente em instantes." },
      { status: 500 }
    )
  }
}
