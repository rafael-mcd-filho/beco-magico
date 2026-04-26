"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { leadFormSchema, type LeadFormData, ESTADOS_BR } from "./LeadFormSchema"

function maskWhatsapp(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ""
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function LeadForm() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    mode: "onBlur",
  })

  const whatsappValue = watch("whatsapp", "")

  async function onSubmit(data: LeadFormData) {
    setServerError(null)
    setSubmitting(true)

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error("Erro ao enviar — tente novamente em instantes.")
      }

      router.push("/obrigado")
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Algo deu errado"
      setServerError(msg)
      setSubmitting(false)
    }
  }

  const inputBase = "w-full bg-beco-bgAlt/60 border border-beco-border/40 rounded text-beco-ivory font-sans px-4 py-3.5 placeholder:text-beco-mute/60 focus:border-beco-gold focus:outline-none transition-colors"
  const labelBase = "block font-sans text-sm uppercase tracking-[0.1em] text-beco-ivory mb-2"
  const errorBase = "text-beco-emberLight font-sans text-xs mt-1.5"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="nome" className={labelBase}>Nome completo *</label>
        <input
          id="nome"
          type="text"
          {...register("nome")}
          placeholder="Como você gosta de ser chamado"
          className={inputBase}
          disabled={submitting}
        />
        {errors.nome && <p className={errorBase}>{errors.nome.message}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className={labelBase}>WhatsApp *</label>
        <input
          id="whatsapp"
          type="tel"
          inputMode="tel"
          value={whatsappValue}
          onChange={(e) => setValue("whatsapp", maskWhatsapp(e.target.value), { shouldValidate: false })}
          onBlur={() => setValue("whatsapp", whatsappValue, { shouldValidate: true })}
          placeholder="(83) 9XXXX-XXXX"
          className={inputBase}
          disabled={submitting}
        />
        {errors.whatsapp && <p className={errorBase}>{errors.whatsapp.message}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="cidade" className={labelBase}>Cidade *</label>
          <input
            id="cidade"
            type="text"
            {...register("cidade")}
            placeholder="Onde quer abrir o Beco"
            className={inputBase}
            disabled={submitting}
          />
          {errors.cidade && <p className={errorBase}>{errors.cidade.message}</p>}
        </div>
        <div>
          <label htmlFor="estado" className={labelBase}>UF *</label>
          <select
            id="estado"
            {...register("estado")}
            className={`${inputBase} appearance-none cursor-pointer`}
            disabled={submitting}
            defaultValue=""
          >
            <option value="" disabled>--</option>
            {ESTADOS_BR.map((uf) => (
              <option key={uf} value={uf} className="bg-beco-bg">{uf}</option>
            ))}
          </select>
          {errors.estado && <p className={errorBase}>{errors.estado.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="capital" className={labelBase}>Capital disponível *</label>
        <select
          id="capital"
          {...register("capital")}
          className={`${inputBase} appearance-none cursor-pointer`}
          disabled={submitting}
          defaultValue=""
        >
          <option value="" disabled>Selecione uma faixa</option>
          <option value="500-600" className="bg-beco-bg">R$ 500-600 mil</option>
          <option value="600-700" className="bg-beco-bg">R$ 600-700 mil</option>
          <option value="700-800" className="bg-beco-bg">R$ 700-800 mil</option>
          <option value="800-900" className="bg-beco-bg">R$ 800-900 mil</option>
          <option value="900-1000" className="bg-beco-bg">R$ 900 mil-1 milhão</option>
          <option value="1000-mais" className="bg-beco-bg">Mais de R$ 1 milhão</option>
        </select>
        {errors.capital && <p className={errorBase}>{errors.capital.message}</p>}
      </div>

      {serverError && (
        <div className="p-4 bg-beco-emberDark/20 border border-beco-ember/40 rounded text-beco-emberLight text-sm">
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-6 inline-flex items-center justify-center gap-2 rounded-pill bg-beco-gold text-beco-bg font-sans font-semibold text-base px-8 py-5 hover:bg-beco-goldGlow disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {submitting ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Quero ser franqueado do Beco
            <span>→</span>
          </>
        )}
      </button>
    </form>
  )
}
