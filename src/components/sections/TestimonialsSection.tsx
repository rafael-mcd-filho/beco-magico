"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { fadeUp, viewportConfig } from "@/lib/motion"

export function TestimonialsSection() {
  return (
    <Section bg="primary" id="depoimentos" transitionTo="midnight">
      {/* Decoração — gradient dourado sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(215,154,78,0.06) 0%, transparent 60%)",
        }}
      />

      <Container>
        {/* Header centralizado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel align="center">DEPOIMENTO</SectionLabel>
          <SectionTitle align="center">Quem já está no Beco Mágico conta como é.</SectionTitle>
        </div>

        {/* Depoimento em destaque — layout 2 colunas */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Coluna esquerda — foto/vídeo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="lg:col-span-5 relative"
          >
            <div className="relative overflow-hidden rounded border border-beco-border/40 bg-beco-bgAlt shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)]">
              <video
                src="/depoimento/Beco_-Video-LP.mp4"
                poster="/depoimento/Beco_-Video-LP-poster.jpg"
                controls
                playsInline
                preload="metadata"
                aria-label="Depoimento em vídeo da unidade de Goiânia"
                className="block w-full aspect-[4/5] object-cover"
              />
            </div>
          </motion.div>

          {/* Coluna direita — quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Aspas decorativas grandes */}
            <span
              className="absolute -top-12 -left-4 lg:-top-16 lg:-left-8 font-display text-[140px] lg:text-[200px] leading-none text-beco-gold/20 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative">
              <p className="font-display italic text-2xl lg:text-3xl text-beco-ivory leading-[1.4]">
                O depoimento da unidade de Goiânia mostra, na prática, como o modelo do Beco Mágico ganha vida na operação e na experiência dos clientes.
              </p>

              <div className="h-px w-16 bg-beco-gold/60 mt-8" />

              <footer className="mt-6">
                <p className="font-display font-semibold text-xl text-beco-ivory">
                  Unidade Goiânia
                </p>
                <p className="font-sans text-sm uppercase tracking-[0.12em] text-beco-mute mt-1">
                  Franqueado - Goiânia
                </p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
