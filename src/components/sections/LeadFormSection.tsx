"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { LeadForm } from "@/components/forms/LeadForm"
import { fadeUp, viewportConfig } from "@/lib/motion"

export function LeadFormSection() {
  return (
    <Section bg="primary" id="formulario" transitionTo="leatherDark">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(199,93,44,0.10) 0%, transparent 50%)",
        }}
      />

      <img
        src="/decorations/magic-circle.svg"
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        loading="lazy"
        className="absolute -top-20 -right-20 w-[500px] opacity-[0.06] pointer-events-none hidden lg:block"
      />

      <img
        src="/decorations/magic-circle.svg"
        alt=""
        aria-hidden="true"
        width={400}
        height={400}
        loading="lazy"
        className="absolute -bottom-16 -left-16 w-[300px] opacity-[0.05] pointer-events-none hidden md:block"
      />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <SectionLabel>QUERO SER FRANQUEADO</SectionLabel>
            <SectionTitle>Está pronto pra abrir o Beco Mágico da sua cidade?</SectionTitle>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-sans text-sm text-beco-emberLight mt-3 flex items-center gap-2"
            >
              <span className="size-2 rounded-pill bg-beco-emberLight animate-pulse" />
              Análise de candidaturas para 2026: janela aberta até fim do 2º trimestre
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="mt-10 p-6 bg-beco-surface border border-beco-gold/40 rounded relative overflow-hidden"
            >
              {/* Selo decorativo */}
              <div className="absolute top-0 right-0 bg-beco-gold text-beco-bg px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-[0.12em] rounded-bl">
                Compromisso público
              </div>

              <div className="flex items-start gap-4">
                <Clock className="size-6 text-beco-gold shrink-0 mt-1" strokeWidth={1.25} />
                <div>
                  <h3 className="font-display font-semibold text-lg text-beco-ivory">
                    Garantia de retorno em 24h úteis
                  </h3>
                  <p className="font-sans text-sm text-beco-ivorySoft mt-3 leading-[1.5]">
                    Se nossa equipe não responder no prazo prometido, sua próxima reunião é diretamente com <strong className="text-beco-gold">Miguel, Diretor de Expansão</strong>.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-beco-bgAlt/40 backdrop-blur-sm border border-beco-border/40 rounded p-8 lg:p-10"
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
