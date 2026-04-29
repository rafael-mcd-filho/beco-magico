import { Check, Mouse } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { CtaWand } from "@/components/ui/CtaWand"
import { HeroQuickContactForm } from "@/components/sections/HeroQuickContactForm"

const heroCopy =
  "O Beco Mágico é a hamburgueria temática que transformou refeições em experiências inesquecíveis e conquistou famílias em todo o Brasil. Estamos selecionando — com critério — os franqueados que vão levar esse universo a novas cidades."

function AnimatedHeroCopy() {
  return (
    <span className="hero-copy-highlight" aria-label={heroCopy}>
      <span className="hero-copy-text" aria-hidden="true">
        {heroCopy}
      </span>
    </span>
  )
}

function HeroStatsMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative z-10 ml-[calc(50%-50vw)] w-screen overflow-hidden border-y border-beco-gold/25 bg-beco-bg/45 py-3 backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-beco-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-beco-bg to-transparent" />

      <div className="hero-marquee-track flex w-max items-center gap-10">
        {[...Array(4)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex items-center gap-10 px-5">
            {[
              ["6+", "unidades"],
              ["4", "estados"],
              ["desde", "2020"],
              ["50 mil+", "clientes/mês"],
            ].map(([value, label]) => (
              <div key={`${groupIndex}-${value}-${label}`} className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-display text-xl font-semibold text-beco-gold md:text-2xl">
                  {value}
                </span>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-beco-ivorySoft/85">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="hero-section relative overflow-hidden bg-beco-bg">
      <div className="hero-bg absolute inset-0 h-[120%] w-full">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero/heromobile.webp" />
          <img
            src="/images/hero/hero.webp"
            alt="Interior de unidade Beco Mágico com luz quente e ambiente cenográfico"
            className="absolute inset-0 size-full object-cover object-left opacity-35 md:opacity-100"
            decoding="async"
            fetchPriority="high"
            loading="eager"
          />
        </picture>
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
        loading="lazy"
        style={{ transform: "rotate(-25deg)" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 z-[2] h-10 md:h-14 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #1F2A4A 100%)",
        }}
      />

      <Container className="relative z-10 flex flex-col">
        <div className="hero-appear pt-6 pb-2" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-beco-ember/15 border border-beco-ember/40 rounded-pill">
            <span className="size-2 rounded-pill bg-beco-ember animate-pulse" />
            <span className="font-sans text-xs md:text-sm text-beco-ivorySoft">
              <strong className="text-beco-emberLight">Ciclo de expansão 2026</strong> — análises de candidaturas até <strong className="text-beco-emberLight"> fim do 2º trimestre</strong>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center py-10 lg:pt-12 lg:pb-8">
          <div className="lg:col-span-7">
            <div
              className="hero-appear flex items-center gap-3 mb-4 text-beco-gold"
              style={{ animationDelay: "0.3s" }}
            >
              <span className="font-bold text-lg leading-none">|</span>
              <span className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em]">
                OPORTUNIDADE DE FRANQUIA
              </span>
            </div>

            <h1 className="font-wizard font-normal text-beco-ivory text-hero-mobile md:text-hero-tablet lg:text-[80px] lg:leading-[0.98] lg:tracking-[-0.03em]">
              {["Seja", "o", "dono", "do", "lugar", "onde", "a"].map((word, i) => (
                <span
                  key={word}
                  className="hero-word inline-block mr-[0.25em]"
                  style={{ animationDelay: `${0.4 + i * 0.06}s` }}
                >
                  {word}
                </span>
              ))}
              <em
                className="hero-word inline-block mr-[0.25em] not-italic"
                style={{ animationDelay: `${0.4 + 7 * 0.06}s` }}
              >
                <span className="italic text-beco-gold">magia</span>
              </em>
              <span
                className="hero-word inline-block"
                style={{ animationDelay: `${0.4 + 8 * 0.06}s` }}
              >
                acontece.
              </span>
            </h1>

            <div
              className="hero-appear flex flex-wrap items-center gap-x-4 gap-y-2 mt-8"
              style={{ animationDelay: "0.95s" }}
            >
              <span className="font-sans text-sm md:text-base font-semibold uppercase tracking-[0.08em] text-beco-goldGlow drop-shadow-[0_0_12px_rgba(240,188,110,0.36)]">
                Hamburgueria temática premium
              </span>
            </div>

            <p
              className="hero-appear font-sans text-lg lg:text-xl text-beco-ivory leading-[1.6] max-w-prose mt-6"
              style={{ animationDelay: "1.1s" }}
            >
              <AnimatedHeroCopy />
            </p>

            <div
              className="hero-appear flex flex-col items-start gap-3 mt-10"
              style={{ animationDelay: "1.3s" }}
            >
              <a
                href="#formulario"
                className="group cta-gold inline-flex items-center justify-center rounded-md bg-beco-gold text-beco-bg font-sans font-semibold px-8 py-4 hover:bg-beco-goldGlow"
              >
                QUERO SER FRANQUEADO
                <CtaWand className="ml-2 size-4" />
              </a>
            </div>

            <div className="hero-appear" style={{ animationDelay: "1.6s" }}>
              <HeroStatsMarquee className="mt-8 lg:hidden" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="hero-appear border-t lg:border-t-0 lg:border-l border-beco-gold/60 pt-8 lg:pt-2 pl-0 lg:pl-8 mt-12 lg:mt-0"
              style={{ animationDelay: "1.2s" }}
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
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-beco-gold size-[18px] mt-0.5 shrink-0" />
                    <span className="font-sans text-base text-beco-ivorySoft leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>

              <HeroQuickContactForm />
            </div>
          </div>
        </div>

        <div className="hero-appear hidden lg:block" style={{ animationDelay: "1.6s" }}>
          <HeroStatsMarquee className="mb-8" />
        </div>

        <div
          className="hero-appear hidden md:flex flex-col items-center gap-2 pb-6"
          style={{ animationDelay: "1.9s" }}
        >
          <Mouse className="size-5 text-beco-gold/60" />
          <div className="hero-scroll-line h-8 w-px bg-beco-gold/40" />
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-beco-mute">
            Role para descobrir
          </span>
        </div>
      </Container>
    </section>
  )
}
