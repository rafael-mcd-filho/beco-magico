"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  TrendingUp,
  Percent,
  Clock,
  Receipt,
  DollarSign,
  Award,
  Target,
  Maximize2,
  type LucideIcon,
} from "lucide-react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { CtaWand } from "@/components/ui/CtaWand"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"
import { cn } from "@/lib/utils"

type MetricAccentVariant = "bars" | "gauge" | "steps" | "line"

type MetricCardProps = {
  icon: LucideIcon
  value: ReactNode
  label: string
  detail: string
  accent: MetricAccentVariant
  className?: string
  featured?: boolean
  valueClassName?: string
}

function MetricAccent({ variant }: { variant: MetricAccentVariant }) {
  if (variant === "gauge") {
    return (
      <div className="h-1.5 overflow-hidden rounded-pill bg-beco-bg/70">
        <div className="h-full w-[76%] rounded-pill bg-gradient-to-r from-beco-goldDark via-beco-gold to-beco-goldGlow" />
      </div>
    )
  }

  if (variant === "steps") {
    return (
      <div className="relative flex h-5 items-end justify-between md:h-8">
        <div className="absolute inset-x-0 bottom-1.5 h-px bg-beco-gold/25 md:bottom-3" />
        {[0, 1, 2, 3].map((step) => (
          <span
            key={step}
            className="relative h-3.5 w-px bg-beco-gold/65 shadow-[0_0_16px_rgba(215,154,78,0.35)] md:h-5"
          />
        ))}
      </div>
    )
  }

  if (variant === "line") {
    return (
      <div className="flex h-5 items-center gap-2 md:h-8">
        <span className="h-px flex-1 bg-beco-gold/25" />
        <span className="h-px flex-[1.5] bg-beco-gold/45" />
        <span className="h-px flex-[2] bg-beco-gold/70" />
      </div>
    )
  }

  const bars = [38, 58, 46, 76, 64, 92]

  return (
    <div className="flex h-5 items-end gap-1.5 md:h-9">
      {bars.map((height, index) => (
        <span
          key={index}
          className="w-full rounded-t-xs bg-gradient-to-t from-beco-goldDark/60 to-beco-goldGlow/85"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  )
}

function MetricCard({
  icon: Icon,
  value,
  label,
  detail,
  accent,
  className,
  featured = false,
  valueClassName,
}: MetricCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "group relative min-w-0 overflow-hidden rounded border border-beco-gold/20 bg-beco-leather p-3.5 shadow-[0_18px_55px_rgba(20,12,8,0.22)] transition-[background-color,border-color,box-shadow] duration-300 hover:border-beco-gold/55 hover:bg-beco-surface hover:shadow-[0_24px_70px_rgba(20,12,8,0.32)] sm:p-5 md:p-6",
        featured ? "min-h-[188px] md:min-h-[270px] md:p-8" : "min-h-[150px] md:min-h-[220px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-beco-gold/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(240,188,110,0.12),transparent_42%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-between gap-3 md:gap-8">
        <div className="flex items-start justify-between gap-3 md:gap-4">
          <p className="max-w-[11rem] font-sans text-[10px] font-semibold uppercase leading-tight tracking-[0.13em] text-beco-ivorySoft md:text-[11px]">
            {label}
          </p>
          <span className="flex size-8 shrink-0 items-center justify-center rounded border border-beco-gold/25 bg-beco-bg/35 text-beco-gold transition-colors duration-300 group-hover:border-beco-gold/55 group-hover:bg-beco-gold/10 md:size-10">
            <Icon className="size-3 md:size-4" strokeWidth={1.5} />
          </span>
        </div>

        <div>
          <p
            className={cn(
              "font-display font-semibold leading-[0.95] text-beco-gold [overflow-wrap:anywhere]",
              featured ? "text-[38px] sm:text-6xl lg:text-7xl" : "text-[32px] sm:text-5xl",
              valueClassName,
            )}
          >
            {value}
          </p>
          <p className="mt-2 font-sans text-xs leading-[1.35] text-beco-mute md:mt-4 md:text-sm">{detail}</p>
        </div>

        <MetricAccent variant={accent} />
      </div>
    </motion.div>
  )
}

export function MetricsSection() {
  return (
    <Section bg="forest" id="numeros" transitionTo="alt">
      <img
        src="/decorations/leaves-corner.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-[300px] lg:w-[400px] opacity-[0.10] pointer-events-none"
      />

      <img
        src="/decorations/leaves-corner.svg"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[300px] lg:w-[400px] opacity-[0.10] pointer-events-none"
        style={{ transform: "scaleX(-1) scaleY(-1)" }}
      />

      <Container>
        {/* Header centralizado */}
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel align="center">PERFORMANCE</SectionLabel>
          <SectionTitle align="center">Os números falam por si.</SectionTitle>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-lg text-beco-mute mt-6 leading-[1.6]"
          >
            Um modelo validado em <span className="text-beco-ivory font-semibold">6+ cidades brasileiras</span>, com performance consistente e payback entre os mais rápidos do setor de food service.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="max-w-2xl mx-auto mt-12 mb-16 p-6 lg:p-8 bg-beco-bg/40 border border-beco-gold/20 rounded relative"
        >
          {/* Marca de honestidade no canto */}
          <span className="absolute -top-3 left-6 bg-beco-leather px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-beco-gold rounded-pill border border-beco-gold/40">
            Antes dos números
          </span>

          <p className="font-display italic text-lg lg:text-xl text-beco-ivory leading-[1.5] mt-2">
            &ldquo;E se a operação tiver dificuldade&rdquo;
          </p>
          <p className="font-sans text-sm lg:text-base text-beco-ivorySoft mt-4 leading-[1.6]">
            Nenhuma franquia é blindada contra adversidade — e qualquer franqueadora que diga o contrário está mentindo. O que diferencia o Beco Mágico é o que acontece quando algo não vai bem: equipe de campo disponível, revisão de plano de gestão e, quando necessário, intervenção direta na operação. <strong className="text-beco-gold not-italic font-semibold">Não existe unidade abandonada na nossa rede.</strong>
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="mt-20 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-4"
        >
          <MetricCard
            icon={TrendingUp}
            value={<AnimatedCounter to={3} prefix="R$ " suffix="MM+" />}
            label="Faturamento médio anual"
            detail="Receita média da rede em unidades maduras."
            accent="bars"
            featured
            className="md:col-span-2 xl:col-span-2"
          />
          <MetricCard
            icon={Percent}
            value="15-22%"
            label="Margem líquida"
            detail="Faixa de margem observada na operação."
            accent="gauge"
          />
          <MetricCard
            icon={Clock}
            value="18-22m"
            label="Payback médio"
            detail="Retorno estimado para praças qualificadas."
            accent="steps"
          />
          <MetricCard
            icon={Receipt}
            value={<AnimatedCounter to={85} prefix="R$ " />}
            label="Ticket médio"
            detail="Consumo médio por cliente na rede."
            accent="line"
          />
          <MetricCard
            icon={DollarSign}
            value="R$ 500-750k"
            label="Investimento inicial"
            detail="Faixa estimada conforme ponto e cidade."
            accent="bars"
            featured
            className="md:col-span-2 xl:col-span-2"
            valueClassName="text-4xl sm:text-5xl lg:text-6xl"
          />
          <MetricCard
            icon={Award}
            value="R$ 90k"
            label="Taxa de franquia"
            detail="Entrada no modelo, marca e transferência de know-how."
            accent="line"
          />
          <MetricCard
            icon={Target}
            value={
              <>
                4,5% <span className="text-beco-goldGlow">+</span> 2,5%
              </>
            }
            label="Royalty + fundo MKT"
            detail="Percentuais recorrentes sobre faturamento."
            accent="gauge"
            className="xl:col-span-2"
            valueClassName="text-4xl sm:text-5xl lg:text-6xl"
          />
          <MetricCard
            icon={Maximize2}
            value={<AnimatedCounter to={265} suffix="m²" />}
            label="Metragem mínima"
            detail="Área recomendada para acomodar salão, operação e experiência."
            accent="steps"
            className="xl:col-span-2"
          />
        </motion.div>

        {/* Foto decorativa full-width abaixo do grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.9 }}
          className="mt-12"
        >
          <div className="relative w-full aspect-[21/9] overflow-hidden rounded border border-beco-gold/30">
            <Image
              src="/images/pratos/tabua.webp"
              alt="Tábua premium com hambúrgueres, drinks e pratos do Beco Mágico"
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#formulario"
            className="group cta-gold inline-flex items-center justify-center rounded-md bg-beco-gold text-beco-bg font-sans font-semibold px-8 py-4 hover:bg-beco-goldGlow"
          >
            Quero receber a apresentação
            <CtaWand className="ml-2 size-4" />
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
