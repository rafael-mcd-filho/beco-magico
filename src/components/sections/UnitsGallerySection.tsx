"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowRight, MapPin } from "lucide-react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"

const units = [
  { id: "IMAGEM-UNIDADE-01", name: "Manaus", state: "AM", description: "Fachada Manaus AM" },
  { id: "IMAGEM-UNIDADE-02", name: "Mata Sul", state: "PE — Recife", description: "Fachada Mata Sul Recife" },
  { id: "IMAGEM-UNIDADE-03", name: "Boa Viagem", state: "PE — Recife", description: "Fachada Boa Viagem Recife" },
  { id: "IMAGEM-UNIDADE-04", name: "Bezerra Goyana", state: "GO — Goiânia", description: "Fachada Bezerra Goyana Goiânia" },
]

function UnitCard({ unit }: { unit: (typeof units)[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group h-full cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-sm">
        <ImagePlaceholder
          id={unit.id}
          description={unit.description}
          ratio="4/5"
          dimension="600×750"
          className="w-full !aspect-[4/5] transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-beco-gold/0 transition-colors duration-300 pointer-events-none group-hover:bg-beco-gold/10" />
      </div>

      <div className="mt-4">
        <h3 className="font-display font-semibold text-lg text-beco-ivory">
          {unit.name}
        </h3>
        <p className="mt-1 font-sans text-xs uppercase tracking-[0.1em] text-beco-mute">
          {unit.state}
        </p>
      </div>
    </motion.div>
  )
}

function NextCityCard() {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative isolate flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded border border-beco-gold/70 bg-beco-surface/35 p-8 text-center shadow-[0_0_0_1px_rgba(215,154,78,0.18),0_18px_60px_rgba(215,154,78,0.16)] transition-[border-color,box-shadow,background-color] duration-300 hover:border-beco-gold hover:bg-beco-surface/50 hover:shadow-[0_0_0_1px_rgba(240,188,110,0.38),0_22px_76px_rgba(215,154,78,0.24)] lg:h-full"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_18%,rgba(240,188,110,0.18),transparent_42%),linear-gradient(135deg,rgba(215,154,78,0.14),transparent_34%,rgba(215,154,78,0.1))]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-beco-gold to-transparent opacity-80" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-6"
      >
        <MapPin className="size-12 text-beco-gold stroke-[1.25] drop-shadow-[0_0_14px_rgba(215,154,78,0.55)]" />
        <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-pill bg-beco-gold/60 blur-sm" />
      </motion.div>

      <p className="max-w-xs font-display text-2xl italic leading-tight text-beco-ivory lg:text-[28px]">
        A próxima pode ser <span className="not-italic font-semibold text-beco-gold">a sua cidade</span>
      </p>

      <p className="mt-4 max-w-[230px] font-sans text-sm leading-[1.55] text-beco-mute">
        Leve o Beco para a sua praça e entre no mapa da expansão.
      </p>

      <a
        href="#formulario"
        className="mt-7 inline-flex items-center gap-2 border-b border-beco-gold/40 pb-1 font-sans text-sm font-semibold text-beco-gold transition-colors hover:border-beco-gold"
      >
        Quero a minha
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </a>
    </motion.div>
  )
}

export function UnitsGallerySection() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 2600,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  )
  const [carouselRef] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
    },
    [autoplay]
  )

  return (
    <Section bg="alt" id="unidades" transitionTo="forest" className="py-20 md:py-20">
      <Container>
        {/* Header centralizado */}
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel align="center">UNIDADES EM OPERAÇÃO</SectionLabel>
          <SectionTitle align="center">De Manaus a Recife, o Beco já chegou.</SectionTitle>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-base text-beco-mute mt-6 leading-[1.6]"
          >
            Cada unidade tem sua identidade visual e atmosfera própria — mas todas seguem o mesmo padrão de imersão, qualidade e atendimento.
          </motion.p>
        </div>

        {/* Carousel de unidades + convite */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] lg:items-stretch"
        >
          <motion.div variants={fadeUp} className="min-w-0">
            <div className="overflow-hidden" ref={carouselRef} aria-label="Unidades em operação">
              <div className="-ml-5 flex">
                {units.map((unit) => (
                  <div key={unit.id} className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%]">
                    <UnitCard unit={unit} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <NextCityCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4 border-t border-b border-beco-gold/20">
            <span className="font-sans text-xs uppercase tracking-[0.12em] text-beco-mute">Cada unidade comporta</span>
            <span className="font-display font-semibold text-beco-gold text-2xl">120-150 lugares</span>
            <span className="font-sans text-xs uppercase tracking-[0.12em] text-beco-mute">+ área externa quando o ponto permite</span>
          </div>
        </motion.div>

        <p className="text-center font-sans italic text-xs text-beco-mute mt-12">
          {/* TODO: confirmar com cliente lista completa de unidades em operação */}
          E mais unidades em fase de implantação por todo o Brasil.
        </p>
      </Container>
    </Section>
  )
}
