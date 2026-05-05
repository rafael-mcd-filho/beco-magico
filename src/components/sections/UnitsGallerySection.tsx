"use client"

import { useCallback, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { CtaWand } from "@/components/ui/CtaWand"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"

const units = [
  { city: "Manaus", image: "/images/unidades/manaus.webp" },
  { city: "Recife", image: "/images/unidades/recife.webp" },
  { city: "Goiânia", image: "/images/unidades/goiania.webp" },
  { city: "Natal", image: "/images/unidades/natal.webp" },
  { city: "João Pessoa", image: "/images/unidades/joao-pessoa.webp" },
]

function UnitCard({ unit }: { unit: (typeof units)[number] }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group h-full cursor-pointer"
    >
      <div className="relative aspect-[495/723] overflow-hidden rounded-sm border border-beco-gold/20 bg-beco-surface/25">
        <Image
          src={unit.image}
          alt={`Fachada da unidade Beco Mágico em ${unit.city}`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-beco-gold/0 transition-colors duration-300 pointer-events-none group-hover:bg-beco-gold/10" />
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
        Leve o Beco Mágico para a sua praça e entre no mapa da expansão.
      </p>

      <a
        href="#formulario"
        className="group cta-outline mt-6 inline-flex items-center justify-center gap-2 min-h-[44px] px-5 font-sans text-sm font-semibold text-beco-gold border border-beco-gold/40 hover:border-beco-gold rounded-md"
      >
        Quero a minha
        <CtaWand className="size-4" />
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
  const [carouselRef, carouselApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
    },
    [autoplay]
  )

  const scrollPrev = useCallback(() => {
    carouselApi?.scrollPrev()
  }, [carouselApi])

  const scrollNext = useCallback(() => {
    carouselApi?.scrollNext()
  }, [carouselApi])

  return (
    <Section bg="alt" id="unidades" transitionTo="forest" className="py-20 pb-32 md:py-20 md:pb-24">
      <Container>
        {/* Header centralizado */}
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel align="center">UNIDADES EM OPERAÇÃO</SectionLabel>
          <SectionTitle align="center">De Manaus a Recife, o Beco Mágico já chegou.</SectionTitle>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-base text-beco-mute mt-6 leading-[1.6]"
          >
            Cada unidade tem sua identidade visual e atmosfera própria, mas todas seguem o mesmo padrão de imersão, qualidade e atendimento.
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
          <motion.div variants={fadeUp} className="relative min-w-0">
            <div className="overflow-hidden" ref={carouselRef} aria-label="Unidades em operação">
              <div className="-ml-5 flex">
                {units.map((unit) => (
                  <div key={unit.city} className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%]">
                    <UnitCard unit={unit} />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Ver unidade anterior"
              className="absolute left-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-pill border border-beco-gold/50 bg-beco-bg/85 text-beco-gold shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-beco-gold hover:bg-beco-gold hover:text-beco-bg sm:-left-4"
            >
              <ChevronLeft className="size-6" strokeWidth={2.25} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Ver proxima unidade"
              className="absolute right-2 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-pill border border-beco-gold/50 bg-beco-bg/85 text-beco-gold shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-beco-gold hover:bg-beco-gold hover:text-beco-bg sm:-right-4"
            >
              <ChevronRight className="size-6" strokeWidth={2.25} />
            </button>
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
      </Container>
    </Section>
  )
}
