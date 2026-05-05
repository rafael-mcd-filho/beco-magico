"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
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

        <Container className="relative z-10 py-24 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Coluna esquerda — texto */}
            <div className="lg:col-span-7 order-2 lg:order-1">
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
                Quando alguém atravessa a porta do Beco Mágico, ela não está entrando num restaurante. Está entrando num universo. A iluminação muda. O som muda. As paredes contam histórias. O cardápio tem nomes que arrancam sorriso. O drink chega fumegando, o hambúrguer chega coberto de folha de ouro, e por duas horas o cliente esquece que está num shopping ou numa rua de bairro. Quando ele sai, já está combinando de voltar. E já está postando.
              </motion.p>
            </div>

            {/* Coluna direita — foto vertical */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0.98, scale: 0.99 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden border border-beco-gold/45 bg-beco-leather p-2 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.9)] lg:p-3">
                  <div className="relative h-full w-full overflow-hidden border border-beco-gold/20 bg-beco-bg">
                    <Image
                      src="/images/experiencia/salao.webp"
                      alt="Salão do Beco Mágico com interior temático e luz quente"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 border border-beco-ivory/10" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-beco-leather py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 z-0">
          <Image
            src="/images/fundo.webp"
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-left opacity-[0.55] md:object-center"
          />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-beco-leather via-beco-leather/65 to-transparent md:h-24" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-beco-bg via-beco-bg/60 to-transparent md:h-28" />
        </div>

        <Container size="narrow" className="relative z-10">
          <div className="text-center mb-12">
            <SectionLabel align="center" className="text-white drop-shadow-[0_2px_12px_rgba(20,12,8,0.65)]">
              RECONHECIMENTO
            </SectionLabel>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Linha vertical separadora central */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/25 -translate-x-1/2" />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="text-center"
            >
              <p className="font-display font-semibold text-white text-[64px] md:text-[96px] leading-none drop-shadow-[0_4px_18px_rgba(20,12,8,0.55)]">
                <AnimatedCounter to={15} suffix="k+" />
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.12em] text-white mt-4 leading-tight max-w-xs mx-auto drop-shadow-[0_2px_12px_rgba(20,12,8,0.7)]">
                Clientes atendidos por mês na rede, com frequência de retorno acima da média do setor
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
              <p className="font-display font-semibold text-white text-[64px] md:text-[96px] leading-none flex items-baseline justify-center gap-2 drop-shadow-[0_4px_18px_rgba(20,12,8,0.55)]">
                <AnimatedCounter to={4.8} decimals={1} />
                <span className="text-[36px] md:text-[48px]">★</span>
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.12em] text-white mt-4 leading-tight max-w-xs mx-auto drop-shadow-[0_2px_12px_rgba(20,12,8,0.7)]">
                Nota média no Google, entre as 5 melhores hamburguerias temáticas do Brasil
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <Section bg="primary">
        <Container size="full" className="max-w-[1500px]">
          <div className="text-center">
            <SectionLabel align="center">O Beco Mágico na Midia</SectionLabel>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportConfig}
            className="mt-12 grid gap-6 xl:grid-cols-2 xl:gap-5"
          >
            {[
              {
                src: "/images/reportagens/veiculo-1.webp",
                alt: "Reportagem sobre o Beco Mágico",
                label: "Crescimento",
                title: "Franquia de restaurante temático cresce 500% em 3 anos",
                width: 1665,
                height: 945,
              },
              {
                src: "/images/reportagens/veiculo-2.webp",
                alt: "Reportagem destacando o Beco Mágico",
                label: "Mídia",
                title: "Beco Mágico ganha destaque na mídia",
                width: 1355,
                height: 1160,
              },
            ].map((item) => (
              <motion.figure
                key={item.src}
                variants={fadeUp}
                className="group relative overflow-hidden rounded border border-beco-gold/35 bg-beco-leather p-2 shadow-[0_20px_0_rgba(42,24,16,0.65),0_28px_90px_-48px_rgba(0,0,0,0.9)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-beco-gold/70 hover:shadow-[0_20px_0_rgba(42,24,16,0.55),0_34px_100px_-44px_rgba(215,154,78,0.35)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded border border-beco-gold/10" />
                <figcaption className="px-3 pb-3 pt-2 md:px-4 md:pb-4 md:pt-3">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-beco-gold">
                    {item.label}
                  </p>
                  <h3 className="mt-1 max-w-full font-display text-xl font-semibold leading-tight text-beco-ivory sm:text-2xl xl:whitespace-nowrap xl:text-[clamp(18px,1.35vw,22px)] xl:leading-none">
                    {item.title}
                  </h3>
                </figcaption>
                <div className="relative aspect-video overflow-hidden rounded-sm bg-beco-bg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
