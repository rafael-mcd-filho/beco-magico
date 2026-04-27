"use client"

import { type FormEvent, useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Check, Loader2, Mouse } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder"

function maskWhatsapp(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ""
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function QuickContactForm() {
  const router = useRouter()
  const [nome, setNome] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const inputBase = "w-full rounded border border-beco-border/40 bg-beco-bgAlt/60 px-4 py-3.5 font-sans text-base text-beco-ivory placeholder:text-beco-mute/60 outline-none transition-colors focus:border-beco-gold disabled:opacity-60"
  const labelBase = "mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-beco-ivory"

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
        <label htmlFor="hero-nome" className={labelBase}>Nome completo *</label>
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
        <label htmlFor="hero-whatsapp" className={labelBase}>WhatsApp *</label>
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
            Quero ser franqueado do Beco
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  )
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let cleanup: (() => void) | undefined

    const initGsap = async () => {
      const gsapModule = await import("gsap")
      const ScrollTriggerModule = await import("gsap/ScrollTrigger")
      const gsap = gsapModule.default
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        gsap.to(".hero-bg", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
      }, heroRef)

      cleanup = () => ctx.revert()
    }

    initGsap()

    return () => cleanup?.()
  }, [])

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen overflow-hidden bg-beco-bg">
      <div className="hero-bg absolute inset-0 w-full h-[120%]">
        <ImagePlaceholder
          id="IMAGEM-01"
          description="Hero — interior unidade Beco com luz quente, ambiente cenográfico"
          ratio="21/9"
          dimension="2400×1350"
          treatment="overlay marrom gradiente + grão"
          className="w-full h-full !aspect-auto"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.06]"
        style={{ backgroundImage: "url('/textures/grain.png')" }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10]"
        style={{
          backgroundImage: "url('/decorations/stars-pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      <img
        src="/decorations/broom-icon.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-12 right-12 w-[120px] opacity-[0.12] pointer-events-none hidden lg:block"
        style={{ transform: "rotate(-25deg)" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 z-[2] h-10 md:h-14 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #1F2A4A 100%)",
        }}
      />

      <Container className="relative z-10 min-h-screen flex flex-col">
        {/* Banner de urgência no topo do Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="pt-6 pb-2"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-beco-ember/15 border border-beco-ember/40 rounded-pill">
            <span className="size-2 rounded-pill bg-beco-ember animate-pulse" />
            <span className="font-sans text-xs md:text-sm text-beco-ivorySoft">
              <strong className="text-beco-emberLight">Ciclo de expansão 2026</strong> — análises de candidaturas até <strong className="text-beco-emberLight"> fim do 2º trimestre</strong>
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 flex-1 items-center py-12 lg:pt-16 lg:pb-0 lg:-translate-y-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mb-4 text-beco-gold"
            >
              <span className="font-bold text-lg leading-none">|</span>
              <span className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em]">
                OPORTUNIDADE DE FRANQUIA
              </span>
            </motion.div>

            <motion.h1
              className="font-wizard font-normal text-beco-ivory text-hero-mobile md:text-hero-tablet lg:text-[80px] lg:leading-[0.98] lg:tracking-[-0.03em]"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
            >
              {["Seja", "o", "dono", "do", "lugar", "onde", "a"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.em
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + 7 * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em] not-italic"
              >
                <span className="italic text-beco-gold">magia</span>
              </motion.em>
              {["acontece."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + 8 * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8"
            >
              <span className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.08em] text-beco-gold">
                Hamburgueria temática premium
              </span>
              <span className="text-beco-gold/40">·</span>
              <span className="font-sans text-sm md:text-base text-beco-ivorySoft">
                Investimento R$ 500-750k
              </span>
              <span className="text-beco-gold/40">·</span>
              <span className="font-sans text-sm md:text-base text-beco-ivorySoft">
                Faturamento médio R$ 3MM+/ano
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="font-sans text-lg lg:text-xl text-beco-mute leading-[1.6] max-w-prose mt-6"
            >
              O Beco Mágico é a hamburgueria temática que transformou refeições em experiências inesquecíveis e conquistou famílias em todo o Brasil. Estamos selecionando — com critério — os franqueados que vão levar esse universo a novas cidades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex flex-col items-start gap-3 mt-10"
            >
              <a
                href="#formulario"
                className="group inline-flex items-center justify-center rounded-pill bg-beco-gold text-beco-bg font-sans font-semibold px-8 py-4 hover:bg-beco-goldGlow transition-all"
              >
                Quero conhecer o modelo de franquia
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>

              <p className="font-sans text-xs text-beco-mute pl-2 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-beco-gold/70">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Resposta em até 24h úteis · Sem ligação automatizada
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="font-sans text-sm text-beco-mute mt-10 leading-relaxed"
            >
              6+ unidades <span className="text-beco-gold mx-2">·</span> 4 estados <span className="text-beco-gold mx-2">·</span> desde 2020 <span className="text-beco-gold mx-2">·</span> mais de 50 mil clientes/mês
            </motion.p>
            {/* TODO confirmar com cliente */}
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 64 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="border-t lg:border-t-0 lg:border-l border-beco-gold/60 pt-8 lg:pt-2 pl-0 lg:pl-8 mt-12 lg:mt-0"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-beco-gold mb-6">
                Quem estamos procurando
              </p>
              <ul className="space-y-4">
                {[
                  "Perfil de gestão e liderança — experiência em food service não é requisito",
                  "Capital disponível entre R$500k e R$750k+",
                  "Disposição pra operar de perto, especialmente no primeiro ano",
                  "Identificação genuína com a marca e o que ela representa",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="text-beco-gold size-[18px] mt-0.5 shrink-0" />
                    <span className="font-sans text-base text-beco-ivorySoft leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>

              <QuickContactForm />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          className="hidden md:flex flex-col items-center gap-2 pb-8"
        >
          <Mouse className="size-5 text-beco-gold/60" />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-beco-gold/40"
          />
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-beco-mute">
            Role para descobrir
          </span>
        </motion.div>
      </Container>
    </section>
  )
}
