"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  BookOpenCheck,
  Castle,
  ChartNoAxesCombined,
} from "lucide-react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"

const differentialImages = [
  {
    src: "/images/diferenciais/diferencial-1.webp",
    alt: "Imagem de apoio dos diferenciais do Beco Mágico",
  },
  {
    src: "/images/diferenciais/diferencial-2.webp",
    alt: "Detalhe visual dos diferenciais da franquia Beco Mágico",
  },
]

export function DifferentialsSection() {
  return (
    <Section bg="forest" id="diferenciais" transitionTo="leather" className="py-24 md:py-32">
      {/* Decoração — folhas no canto superior esquerdo */}
      <img
        src="/decorations/leaves-corner.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-[300px] lg:w-[400px] opacity-[0.10] pointer-events-none"
      />

      {/* Decoração — folhas no canto inferior direito (espelhada) */}
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
          <SectionLabel align="center">DIFERENCIAIS</SectionLabel>
          <SectionTitle align="center">Você abre um Beco Mágico. Mas nunca abre sozinho.</SectionTitle>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-lg text-beco-ivorySoft mt-6 leading-[1.6]"
          >
            Suporte completo da escolha do ponto até o primeiro ano de operação, porque uma franquia que funciona é uma franquia onde a franqueadora tem skin in the game.
          </motion.p>
        </div>

        {/* Grid de benefícios */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-16 mt-20"
        >
          {[
            {
              icon: Castle,
              title: "Cenografia que encanta",
              desc: "Projeto arquitetônico imersivo com fornecedores homologados: você recebe a unidade pronta pra abrir, não um projeto pra contratar arquiteto e fazer do zero.",
            },
            {
              icon: BookOpenCheck,
              title: "Treinamento operacional intensivo",
              desc: "30 dias de imersão pré-abertura: você e seu time aprendem cardápio, gestão de cozinha, atendimento e protocolo de eventos antes do primeiro cliente entrar.",
            },
            {
              icon: ChartNoAxesCombined,
              title: "BI compartilhado da rede",
              desc: "Dashboard com performance de todas as unidades pra você comparar suas métricas com a média e identificar onde melhorar. Saúde financeira aberta entre franqueados.",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`${i >= 3 ? "lg:border-t lg:border-beco-gold/20 lg:pt-12" : ""}`}
              >
                <Icon
                  className="size-8 text-beco-gold mb-6"
                  strokeWidth={1.25}
                />
                <h3 className="font-display font-semibold text-xl lg:text-2xl text-beco-ivory mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-base text-beco-ivorySoft leading-[1.6]">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="mt-16 grid gap-4 md:grid-cols-2 lg:gap-6"
        >
          {differentialImages.map((image) => (
            <motion.figure
              key={image.src}
              variants={fadeUp}
              className="relative aspect-[4/5] overflow-hidden rounded border border-beco-gold/25 bg-beco-forestDark shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
