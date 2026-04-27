"use client"

import { motion } from "framer-motion"
import { AlertCircle, Check, Lock } from "lucide-react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { Divider } from "@/components/layout/Divider"
import { BrazilMap } from "@/components/marketing/BrazilMap"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"

export function TerritorySection() {
  return (
    <Section bg="alt" id="territorio" className="pb-32 md:pb-24">
      {/* Decoração — gradient dourado sutil no canto */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle at 75% 30%, rgba(215,154,78,0.4) 0%, transparent 50%)",
        }}
      />

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna esquerda — texto */}
          <div className="lg:col-span-5">
            <SectionLabel>TERRITÓRIO</SectionLabel>
            <SectionTitle>
              <span className="block">O Beco tem</span>
              <span className="block">um franqueado</span>
              <span className="block">por cidade.</span>
              <span className="mt-3 block">Nada mais,</span>
              <span className="block">nada menos.</span>
            </SectionTitle>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-sans text-lg text-beco-ivorySoft mt-6 leading-[1.6]"
            >
              É o que garante território exclusivo — e é o que torna cada praça disponível uma oportunidade real, não uma entre muitas.
            </motion.p>

            <Divider className="mt-10" />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10"
            >
              <h3 className="font-display font-semibold text-xl text-beco-ivory">
                Sua cidade não está na lista?
              </h3>
              <p className="font-sans text-sm text-beco-mute mt-3 leading-[1.6]">
                Avaliamos viabilidade caso a caso e abrimos novas praças conforme a demanda real.
              </p>
              <a
                href="#formulario"
                className="inline-flex items-center mt-6 px-6 py-3 rounded-pill border border-beco-gold/60 text-beco-gold hover:bg-beco-gold hover:text-beco-bg transition-all font-sans font-semibold text-sm"
              >
                Verificar minha cidade
                <span className="ml-2">→</span>
              </a>
            </motion.div>
          </div>

          {/* Coluna direita — mapa + listas */}
          <div className="lg:col-span-7">
            <BrazilMap />

            {/* Listas paralelas */}
            <div className="relative mt-8 grid grid-cols-2 gap-6 lg:gap-8">
              {/* Linha vertical separadora */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-beco-gold/20 -translate-x-1/2" />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewportConfig}
              >
                <p className="font-display text-sm uppercase tracking-[0.1em] text-beco-gold mb-4">
                  Praças com vagas abertas
                </p>
                <ul className="space-y-3">
                  {[
                    "Fortaleza", "Salvador", "Maceió", "Belém",
                    "Teresina", "São Luís", "Campina Grande", "Porto Alegre",
                  ].map((city) => (
                    <motion.li
                      key={city}
                      variants={fadeUp}
                      className="flex items-center gap-3"
                    >
                      <Check className="size-4 text-beco-gold shrink-0" />
                      <span className="font-sans text-[15px] text-beco-ivory">{city}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewportConfig}
              >
                <p className="font-display text-sm uppercase tracking-[0.1em] text-beco-mute mb-4">
                  Praças já ocupadas
                </p>
                <ul className="space-y-3">
                  {[
                    "Recife", "João Pessoa", "Manaus",
                    "Goiânia", "Natal", "Aracaju",
                  ].map((city) => (
                    <motion.li
                      key={city}
                      variants={fadeUp}
                      className="flex items-center gap-3"
                    >
                      <Lock className="size-3.5 text-beco-border shrink-0" />
                      <span className="font-sans text-[15px] text-beco-mute">{city}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={viewportConfig}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded border border-beco-ember/40 p-6 md:p-7"
          style={{
            background: "linear-gradient(135deg, rgba(228,91,79,0.16) 0%, rgba(61,40,24,0.42) 52%, rgba(215,154,78,0.08) 100%)",
          }}
        >
          <motion.div
            aria-hidden="true"
            initial={{ x: "-120%" }}
            whileInView={{ x: "120%" }}
            viewport={viewportConfig}
            transition={{ duration: 1.15, delay: 0.55, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-beco-gold/10 to-transparent"
          />
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-beco-ember via-beco-gold to-beco-ember" />

          <div className="relative flex items-start gap-4">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: [0.8, 1.18, 1] }}
              viewport={viewportConfig}
              transition={{ duration: 0.65, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-beco-ember/50 bg-beco-ember/15"
            >
              <AlertCircle className="size-4 text-beco-emberLight" strokeWidth={1.8} />
            </motion.div>
            <div>
              <p className="font-sans text-sm font-semibold text-beco-emberLight uppercase tracking-[0.08em]">
                Algumas praças têm candidaturas em andamento
              </p>
              <p className="font-sans text-sm text-beco-ivorySoft mt-2 leading-[1.6]">
                Pelo menos <strong className="text-beco-emberLight">3 das 8 praças abertas</strong> estão sob análise ativa de candidatos no momento. Quando uma cidade fecha, ela fecha de verdade — não há lista de espera, não há reabertura no curto prazo.
              </p>
              <p className="font-sans text-xs italic text-beco-mute mt-3 leading-[1.5]">
                Pra saber se sua cidade está disponível e em que estágio, preencha o formulário — respondemos com status atualizado em até 24h úteis.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
