"use client"

import { motion } from "framer-motion"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder"

export function HistorySection() {
  return (
    <Section bg="midnight" id="historia" transitionTo="alt" className="py-24 md:py-32">
      {/* Camada 1 — pattern de estrelas (mais visível que no hero) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "url('/decorations/stars-pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      {/* Camada 2 — estrelas individuais com twinkle em posições absolute */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: "12%", left: "8%", size: 4, delay: "0s" },
          { top: "22%", left: "78%", size: 3, delay: "0.4s" },
          { top: "38%", left: "15%", size: 5, delay: "1.2s" },
          { top: "48%", left: "88%", size: 3, delay: "0.8s" },
          { top: "62%", left: "12%", size: 4, delay: "1.8s" },
          { top: "75%", left: "82%", size: 3, delay: "0.2s" },
          { top: "85%", left: "28%", size: 4, delay: "2.4s" },
          { top: "18%", left: "45%", size: 3, delay: "1.5s" },
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

      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna esquerda — texto */}
          <div className="lg:col-span-7">
            {/* Label custom em goldGlow pra ficar mais visível em azul */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4 text-beco-goldGlow"
            >
              <span className="font-bold text-lg leading-none">|</span>
              <span className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em]">
                DESDE 2020
              </span>
            </motion.div>

            {/* Título com "inteiras" em itálico goldGlow */}
            <h2 className="font-display font-semibold text-beco-ivory text-section-mobile md:text-section-desktop">
              {["Encantando", "famílias"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block italic text-beco-goldGlow mr-[0.25em]"
              >
                inteiras,
              </motion.span>
              {["todos", "os", "dias."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7, delay: 0.18 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-sans text-lg lg:text-xl text-beco-ivorySoft leading-[1.7] max-w-prose mt-8"
            >
              Cada cliente do Beco é, em algum nível, um momento marcante: a tarde de domingo que vira lembrança de infância, o aniversário de 8 anos que a criança nunca esquece, a primeira vez que a família inteira sentou pra rir junta em um restaurante.
              <br/><br/>
              Pro franqueado, isso vira negócio: <strong className="text-beco-goldGlow font-semibold not-italic">NPS médio de 78 na rede</strong>, frequência de retorno acima da média do setor e <strong className="text-beco-goldGlow font-semibold not-italic">marketing orgânico</strong> que reduz dependência de mídia paga. Quando seu cliente vira contador da sua história, você não compete por preço — compete por memória. E é a única vantagem que concorrente nenhum copia.
            </motion.p>

            {/* Linha dourada decorativa */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
              className="h-px w-32 bg-beco-goldGlow/60 mt-10"
            />
          </div>

          {/* Coluna direita — foto sangrando à direita */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImagePlaceholder
                id="IMAGEM-RETRATO-FAMILIA"
                description="Família/criança no Beco em momento emocional — luz quente"
                ratio="3/4"
                dimension="900×1200"
                treatment="natural, sem retoque excessivo, luz quente"
                className="w-full !aspect-[3/4]"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
