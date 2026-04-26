"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  Percent,
  Clock,
  Receipt,
  DollarSign,
  Award,
  Target,
  Maximize2,
} from "lucide-react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"

export function MetricsSection() {
  return (
    <Section bg="leather" id="numeros" transitionTo="alt">
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
            &ldquo;E se a operação tiver dificuldade?&rdquo;
          </p>
          <p className="font-sans text-sm lg:text-base text-beco-ivorySoft mt-4 leading-[1.6]">
            Nenhuma franquia é blindada contra adversidade — e qualquer franqueadora que diga o contrário está mentindo. O que diferencia o Beco é o que acontece quando algo não vai bem: equipe de campo disponível, revisão de plano de gestão e, quando necessário, intervenção direta na operação. <strong className="text-beco-gold not-italic font-semibold">Não existe unidade abandonada na nossa rede.</strong>
          </p>
        </motion.div>

        {/* TIER 1 — 4 métricas críticas em destaque */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-beco-gold/15 mt-20"
        >
          {[
            {
              icon: TrendingUp,
              value: <AnimatedCounter to={3} prefix="R$ " suffix="MM+" />,
              label: "FATURAMENTO MÉDIO ANUAL",
              isCounter: true,
            },
            {
              icon: Percent,
              value: "15-22%",
              label: "MARGEM LÍQUIDA",
              isCounter: false,
            },
            {
              icon: Clock,
              value: "18-22m",
              label: "PAYBACK MÉDIO",
              isCounter: false,
            },
            {
              icon: Receipt,
              value: <AnimatedCounter to={85} prefix="R$ " />,
              label: "TICKET MÉDIO",
              isCounter: true,
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={i} variants={fadeUp} className="bg-beco-leather p-8 lg:p-12 relative">
                <Icon className="absolute top-6 right-6 size-5 text-beco-gold/40" strokeWidth={1} />
                <p className="font-display font-semibold text-beco-gold text-[56px] lg:text-[88px] leading-none">
                  {item.value}
                </p>
                <p className="font-sans text-[13px] uppercase tracking-[0.1em] text-beco-ivory mt-3 leading-tight">
                  {item.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* TIER 2 — 4 métricas operacionais em fonte menor */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-beco-gold/15 mt-px"
        >
          {[
            {
              icon: DollarSign,
              value: "R$ 500-750k",
              label: "INVESTIMENTO INICIAL",
            },
            {
              icon: Award,
              value: "R$ 90k",
              label: "TAXA DE FRANQUIA",
            },
            {
              icon: Target,
              value: "4,5% + 2,5%",
              label: "ROYALTY + FUNDO MKT",
            },
            {
              icon: Maximize2,
              value: <AnimatedCounter to={265} suffix="m²" />,
              label: "METRAGEM MÍNIMA",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={i} variants={fadeUp} className="bg-beco-leather p-6 lg:p-8 relative">
                <Icon className="absolute top-5 right-5 size-4 text-beco-gold/40" strokeWidth={1} />
                <p className="font-display font-semibold text-beco-gold text-[36px] lg:text-[48px] leading-none">
                  {item.value}
                </p>
                <p className="font-sans text-[11px] uppercase tracking-[0.1em] text-beco-ivory mt-3 leading-tight">
                  {item.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Foto decorativa full-width abaixo do grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.9 }}
          className="mt-12"
        >
          <ImagePlaceholder
            id="IMAGEM-05"
            description="Tábua premium — hambúrgueres, drinks, pratos do Beco em close"
            ratio="21/9"
            dimension="2400×1029"
            treatment="saturado, vibrante"
            className="w-full !aspect-[21/9]"
          />
        </motion.div>

        {/* Disclaimer + CTA */}
        <p className="text-center font-sans italic text-xs text-beco-mute mt-12 max-w-prose mx-auto">
          Disclaimer: valores referenciais com base em médias da rede. A COF completa é apresentada após a primeira reunião.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="#formulario"
            className="group inline-flex items-center justify-center rounded-pill bg-beco-gold text-beco-bg font-sans font-semibold px-8 py-4 hover:bg-beco-goldGlow transition-all"
          >
            Quero receber a apresentação completa
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
