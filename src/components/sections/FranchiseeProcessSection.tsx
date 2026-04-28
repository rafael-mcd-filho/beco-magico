"use client"

import { motion } from "motion/react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { CtaWand } from "@/components/ui/CtaWand"

const steps = [
  {
    num: "1",
    title: "Cadastro",
    desc: "Você preenche o formulário e nossa equipe entra em contato em até 24h — garantido.",
  },
  {
    num: "2",
    title: "Reunião de apresentação",
    desc: "Conversa com consultor de expansão, sem compromisso, pra entender seu perfil e responder dúvidas.",
  },
  {
    num: "3",
    title: "Análise de viabilidade",
    desc: "Estudamos juntos a praça que você quer abrir, o ponto e o investimento.",
  },
  {
    num: "4",
    title: "COF e contrato",
    desc: "Apresentação da Circular de Oferta de Franquia e fechamento.",
  },
  {
    num: "5",
    title: "Treinamento e obras",
    desc: "Equipe acompanha obra, decoração, treinamento operacional e gestão.",
  },
  {
    num: "6",
    title: "Inauguração",
    desc: "Suporte de marketing local, evento de abertura e acompanhamento do primeiro ano.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function FranchiseeProcessSection() {
  return (
    <Section bg="leather" id="processo" transitionTo="primary" className="py-24 md:py-32">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel align="center">PASSO A PASSO</SectionLabel>
          <SectionTitle align="center">Do interesse à inauguração, passo a passo.</SectionTitle>
        </div>

        <div className="relative mt-20">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
            className="hidden lg:block absolute left-[8.333%] right-[8.333%] top-2 h-px bg-beco-gold/45 z-0"
          />

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ transformOrigin: "top center" }}
            className="lg:hidden absolute top-2 bottom-2 left-[19px] w-px bg-beco-gold/45 z-0"
          />

          <div className="relative z-10 grid gap-6 md:gap-7 lg:grid-cols-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.article
                key={step.num}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                  duration: 0.55,
                  delay: 0.28 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="relative pl-14 lg:pl-0 lg:pt-12"
              >
                <div className="lg:hidden absolute top-6 left-[13px] size-3 rounded-pill bg-beco-gold border-2 border-beco-leather" />

                <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 size-4 rounded-pill bg-beco-gold border-2 border-beco-leather" />

                <div className="group relative h-full min-h-[250px] rounded border border-beco-gold/25 bg-beco-bgSoft/85 p-6 transition-colors duration-300 hover:border-beco-gold/70 hover:bg-beco-surface/90">
                  <p className="font-display font-semibold text-beco-gold/40 text-[64px] leading-none">
                    {step.num}
                  </p>
                  <div className="h-px w-10 bg-beco-gold/60 mt-2" />
                  <h3 className="font-display font-semibold text-xl text-beco-ivory mt-4">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-beco-ivorySoft mt-3 leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="#formulario"
            className="group inline-flex items-center justify-center rounded-pill bg-beco-gold text-beco-bg font-sans font-semibold px-8 py-4 hover:bg-beco-goldGlow transition-all"
          >
            Quero fazer o cadastro
            <CtaWand className="ml-2 size-4 transition-transform group-hover:rotate-12" />
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
