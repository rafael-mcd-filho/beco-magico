"use client"

import { motion } from "framer-motion"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"

export function ExperienceSection() {
  return (
    <>
      <section id="experiencia" className="relative overflow-hidden bg-beco-midnight">
        {/* grão */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage: "url('/decorations/stars-pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px 300px",
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: "10%", left: "7%", size: 4, delay: "0s" },
            { top: "20%", left: "72%", size: 3, delay: "0.4s" },
            { top: "34%", left: "18%", size: 5, delay: "1.2s" },
            { top: "46%", left: "87%", size: 3, delay: "0.8s" },
            { top: "63%", left: "10%", size: 4, delay: "1.8s" },
            { top: "78%", left: "76%", size: 3, delay: "0.2s" },
            { top: "86%", left: "32%", size: 4, delay: "2.4s" },
            { top: "16%", left: "43%", size: 3, delay: "1.5s" },
          ].map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-beco-goldGlow animate-twinkle"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: star.delay,
                boxShadow: `0 0 ${star.size * 2}px rgba(240,188,110,0.6)`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.06]"
          style={{ backgroundImage: "url('/textures/grain.png')" }}
        />

        <div
          className="absolute inset-x-0 bottom-0 z-[2] h-10 md:h-14 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #3D2818 100%)",
          }}
        />

        <div className="relative z-10 grid lg:grid-cols-12 gap-0 items-stretch py-24 md:py-32">
          {/* Coluna esquerda — texto */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Container className="lg:pr-12">
              <SectionLabel>A EXPERIÊNCIA</SectionLabel>

              <SectionTitle>
                <span className="block">Não é uma</span>
                <span className="block">hamburgueria.</span>
                <span className="block">
                  É uma <span className="italic text-beco-gold">travessia.</span>
                </span>
              </SectionTitle>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="font-sans text-lg text-beco-ivorySoft leading-[1.7] max-w-prose mt-8"
              >
                Quando alguém atravessa a porta do Beco Mágico, ela não está entrando num restaurante. Está entrando num universo. A iluminação muda. O som muda. As paredes contam histórias. O cardápio tem nomes que arrancam sorriso. O drink chega fumegando, o hambúrguer chega coberto de folha de ouro, e por duas horas o cliente esquece que está num shopping ou numa rua de bairro. Quando ele sai, já está combinando de voltar — e já está postando.
              </motion.p>
            </Container>
          </div>

          {/* Coluna direita — foto sangrando à direita */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[42%]">
            <motion.div
              initial={{ opacity: 0.98, scale: 0.99 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <ImagePlaceholder
                id="IMAGEM-03"
                description="Detalhe cenografia — interior temático com luz quente"
                ratio="3/4"
                dimension="900×1200"
                treatment="vibrante, sem overlay"
                className="w-full h-full !aspect-auto min-h-[500px] lg:min-h-[700px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section bg="leather" transitionTo="primary">
        <Container size="narrow">
          <div className="text-center mb-12">
            <SectionLabel align="center">RECONHECIMENTO</SectionLabel>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Linha vertical separadora central */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-beco-gold/30 -translate-x-1/2" />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="text-center"
            >
              <p className="font-display font-semibold text-beco-gold text-[64px] md:text-[96px] leading-none">
                <AnimatedCounter to={50} suffix="k+" />
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.12em] text-beco-ivory mt-4 leading-tight max-w-xs mx-auto">
                Clientes atendidos por mês na rede — com frequência de retorno acima da média do setor
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              transition={{ delay: 0.15 }}
              className="text-center"
            >
              <p className="font-display font-semibold text-beco-gold text-[64px] md:text-[96px] leading-none flex items-baseline justify-center gap-2">
                <AnimatedCounter to={4.8} decimals={1} />
                <span className="text-[36px] md:text-[48px]">★</span>
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.12em] text-beco-ivory mt-4 leading-tight max-w-xs mx-auto">
                Nota média no Google e iFood — entre as 5 melhores hamburguerias temáticas do Brasil
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section bg="primary">
        <Container>
          <div className="text-center">
            <SectionLabel align="center">O BECO JÁ FOI DESTAQUE EM</SectionLabel>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="grid md:grid-cols-3 gap-12 mt-16"
          >
            {[
              {
                name: "[Veículo 1]",
                desc: "\"A hamburgueria que transformou jantar em experiência imersiva\"",
              },
              {
                name: "[Prêmio / Ranking ABF]",
                desc: "Reconhecimento em expansão de franquias",
              },
              {
                name: "[Veículo 2]",
                desc: "Reportagem sobre experiências gastronômicas no Brasil",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center"
              >
                <p className="font-display font-semibold text-2xl uppercase text-beco-ivory">
                  {item.name}
                </p>
                <p className="font-sans italic text-sm text-beco-mute mt-3 leading-relaxed">
                  {item.desc}
                </p>
                {i < 2 && (
                  <div className="md:hidden h-px w-12 bg-beco-gold/40 mx-auto mt-8" />
                )}
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center font-sans italic text-xs text-beco-mute/60 mt-12">
            {/* TODO: substituir [Veículo 1] e [Veículo 2] pelos veículos reais quando confirmar com cliente */}
          </p>
        </Container>
      </Section>
    </>
  )
}
