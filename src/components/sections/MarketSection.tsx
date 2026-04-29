"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { fadeUp, stagger, slideInLeft, viewportConfig } from "@/lib/motion"

export function MarketSection() {
  return (
    <Section bg="primary" id="mercado" transitionTo="forest">
      {/* Decoração — gradient ember sutil no canto */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(199,93,44,0.08) 0%, transparent 60%)",
        }}
      />

      <Container>
        {/* Header centralizado */}
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel align="center">O MERCADO</SectionLabel>

          <SectionTitle align="center">
            <span className="block">Um setor de</span>
            <span className="block">
              <span className="italic text-beco-ember">R$ 615 bilhões</span>
            </span>
            <span className="block">e crescendo.</span>
          </SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-sans text-lg text-beco-mute mt-6 leading-[1.6]"
          >
            Os brasileiros consomem cada vez mais fora de casa. E dentro do food service, hamburguerias temáticas premium são o segmento que mais cresce — não é tendência, é mudança estrutural de consumo.
          </motion.p>
        </div>

        {/* Grid de 3 dados macro */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="mt-20 grid divide-y divide-beco-gold/15 md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {[
            {
              counter: { to: 615, prefix: "R$ ", suffix: " B", decimals: 0, width: "min-w-[6ch]" },
              label: "MERCADO DE ALIMENTAÇÃO FORA DE CASA",
              desc: "Setor que cresce de forma resiliente mesmo em períodos de crise — necessidade básica com ticket flexível.",
            },
            {
              counter: { to: 5.9, suffix: "%", decimals: 1, width: "min-w-[3.8ch]" },
              label: "CAGR DO FOOD SERVICE BRASILEIRO",
              desc: "Taxa de crescimento anual composta — um dos setores mais resilientes do varejo nacional.",
            },
            {
              counter: { to: 25, suffix: "%", decimals: 0, width: "min-w-[2.8ch]" },
              label: "DO PIB BRASILEIRO É ALIMENTAÇÃO",
              desc: "Aproximadamente 1/4 da economia brasileira gira em torno de alimentação. Um quarto do dinheiro que circula no país.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="min-w-0 py-8 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0 lg:px-10"
            >
              {/* Número em ember (LARANJA), não em gold */}
              <p className="font-display font-semibold leading-[0.95] text-beco-ember text-[clamp(48px,12vw,64px)] [font-variant-numeric:tabular-nums] md:text-[clamp(48px,5vw,70px)] xl:text-[clamp(68px,5.8vw,82px)]">
                <AnimatedCounter
                  from={0}
                  to={item.counter.to}
                  prefix={item.counter.prefix}
                  suffix={item.counter.suffix}
                  decimals={item.counter.decimals}
                  duration={2.4}
                  className={`inline-block whitespace-nowrap ${item.counter.width}`}
                />
              </p>
              <p className="font-sans text-[13px] uppercase tracking-[0.1em] text-beco-ivory mt-3 leading-tight">
                {item.label}
              </p>
              <p className="font-sans text-sm text-beco-ivorySoft mt-4 leading-[1.5]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bloco insight com borda esquerda EMBER (laranja, 4px) */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="max-w-3xl mx-auto mt-20"
        >
          <div className="bg-beco-surface border-l-4 border-beco-ember p-10 lg:p-12 rounded">
            <h3 className="font-display font-semibold text-2xl text-beco-ivory">
              Mas o que importa não é o tamanho do mercado.
            </h3>
            <p className="font-sans text-lg text-beco-ivorySoft mt-6 leading-[1.7]">
              O que importa é que dentro desse mercado, hamburguerias temáticas premium ocupam um espaço pequeno e cobiçado. Em quase toda cidade brasileira de médio porte, ainda há demanda reprimida por uma experiência gastronômica imersiva — e quem chega primeiro, fica.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
