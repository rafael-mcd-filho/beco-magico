import { NextResponse } from "next/server"
import { leadFormSchema, miniLeadFormSchema } from "@/components/forms/LeadFormSchema"

export const runtime = "nodejs"

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

    const lead = {
      timestamp: new Date().toISOString(),
      source,
      type: fullLead.success ? "complete" : "quick-contact",
      ...(fullLead.success ? fullLead.data : miniLead!.data),
    }

    console.log("[lead]", lead)

    if (process.env.LEAD_WEBHOOK_URL) {
      const webhookRes = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        cache: "no-store",
      })

      if (!webhookRes.ok) {
        throw new Error(`Lead webhook failed with status ${webhookRes.status}`)
      }
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
