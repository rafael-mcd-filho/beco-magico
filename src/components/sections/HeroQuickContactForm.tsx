"use client"

import { type FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

import { CtaWand } from "@/components/ui/CtaWand"

function maskWhatsapp(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ""
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function HeroQuickContactForm() {
  const router = useRouter()
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const inputBase =
    "w-full rounded border border-beco-border/40 bg-beco-bgAlt/60 px-4 py-3.5 font-sans text-base text-beco-ivory placeholder:text-beco-mute/60 outline-none transition-colors focus:border-beco-gold disabled:opacity-60"
  const labelBase =
    "mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-beco-ivory"

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (nome.trim().length < 3) {
      setError("Informe seu nome.")
      return
    }

    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(whatsapp)) {
      setError("Informe um WhatsApp válido.")
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          whatsapp,
          source: "hero-mini-form",
        }),
      })

      if (!res.ok) {
        throw new Error("Não foi possível solicitar contato agora.")
      }

      router.push("/obrigado")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Algo deu errado.")
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-5 rounded border border-beco-border/40 bg-beco-bgAlt/40 p-5 backdrop-blur-sm sm:p-6"
    >
      <div>
        <label htmlFor="hero-nome" className={labelBase}>
          Nome completo *
        </label>
        <input
          id="hero-nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Como você gosta de ser chamado"
          disabled={submitting}
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="hero-whatsapp" className={labelBase}>
          WhatsApp *
        </label>
        <input
          id="hero-whatsapp"
          type="tel"
          inputMode="tel"
          value={whatsapp}
          onChange={(event) => setWhatsapp(maskWhatsapp(event.target.value))}
          placeholder="(83) 9XXXX-XXXX"
          disabled={submitting}
          className={inputBase}
        />
      </div>

      {error && <p className="font-sans text-xs text-beco-emberLight">{error}</p>}

      <p className="font-sans text-xs leading-[1.5] text-beco-mute">
        Preencha seus dados para nossa equipe entrar em contato com você.
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-pill bg-beco-gold px-6 py-4 font-sans text-base font-semibold text-beco-bg transition-all hover:bg-beco-goldGlow disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            QUERO SER FRANQUEADO
            <CtaWand />
          </>
        )}
      </button>
    </form>
  )
}
