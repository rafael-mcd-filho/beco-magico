"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder"
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
          <SectionTitle align="center">Quem já está no Beco conta como é.</SectionTitle>
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
            <div className="relative">
              <ImagePlaceholder
                id="IMAGEM-09"
                description="Jhony Abreu na unidade Beco Manaus"
                ratio="4/5"
                dimension="800×1000"
                className="w-full !aspect-[4/5]"
              />

              {/* Botão play centralizado */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  console.log("Abrir vídeo Jhony")
                  // TODO: implementar modal de vídeo
                }}
                aria-label="Reproduzir depoimento em vídeo"
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
              >
                <div className="size-20 rounded-pill bg-beco-gold flex items-center justify-center shadow-[0_8px_32px_-4px_rgba(215,154,78,0.6)] transition-shadow group-hover:shadow-[0_12px_48px_-4px_rgba(215,154,78,0.8)]">
                  <Play className="size-7 text-beco-bg ml-1" fill="currentColor" />
                </div>
              </motion.button>

              {/* Badge "ASSISTIR DEPOIMENTO" abaixo do play */}
              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-[11px] uppercase tracking-[0.18em] text-beco-ivory/90 bg-beco-bg/80 px-3 py-1 rounded-pill backdrop-blur-sm">
                Assistir 2:30
              </p>
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
                Quando abri, o público já estava esperando. Foi a primeira vez que inaugurei um negócio com fila no primeiro dia.
              </p>

              <div className="h-px w-16 bg-beco-gold/60 mt-8" />

              <footer className="mt-6">
                <p className="font-display font-semibold text-xl text-beco-ivory">
                  Jhony Abreu
                </p>
                <p className="font-sans text-sm uppercase tracking-[0.12em] text-beco-mute mt-1">
                  Franqueado · Manaus · 2025
                </p>
              </footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Linha de mais social proof / próximos depoimentos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <div className="h-px w-16 bg-beco-gold/30 mx-auto mb-8" />
          <p className="font-sans italic text-sm text-beco-mute leading-[1.6]">
            Mais depoimentos de franqueados em vídeo são enviados após o primeiro contato com nossa equipe — incluindo casos de quem chegou sem experiência prévia em food service.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
