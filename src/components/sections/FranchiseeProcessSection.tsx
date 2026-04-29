"use client"

import { motion, type Variants } from "framer-motion"
import {
  ClipboardCheck,
  FileSignature,
  HardHat,
  MapPinned,
  MessageSquareText,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { CtaWand } from "@/components/ui/CtaWand"
import { cn } from "@/lib/utils"

type ProcessStep = {
  num: string
  title: string
  badge: string
  desc: string
  icon: LucideIcon
}

const steps: ProcessStep[] = [
  {
    num: "01",
    title: "Cadastro",
    badge: "Até 24h",
    icon: ClipboardCheck,
    desc: "Você preenche o formulário e nossa equipe entra em contato para iniciar a qualificação.",
  },
  {
    num: "02",
    title: "Reunião de apresentação",
    badge: "Sem compromisso",
    icon: MessageSquareText,
    desc: "Conversa com consultor de expansão para entender seu perfil, praça e dúvidas.",
  },
  {
    num: "03",
    title: "Análise de viabilidade",
    badge: "Praça e ponto",
    icon: MapPinned,
    desc: "Estudamos juntos a cidade, o ponto comercial e o investimento previsto.",
  },
  {
    num: "04",
    title: "COF e contrato",
    badge: "Formalização",
    icon: FileSignature,
    desc: "Apresentação da Circular de Oferta de Franquia, análise e fechamento.",
  },
  {
    num: "05",
    title: "Treinamento e obras",
    badge: "Implantação",
    icon: HardHat,
    desc: "Acompanhamento de obra, decoração, treinamento operacional e gestão.",
  },
  {
    num: "06",
    title: "Inauguração",
    badge: "Primeiro ano",
    icon: Sparkles,
    desc: "Suporte de marketing local, evento de abertura e acompanhamento inicial.",
  },
]

const easeOut = [0.22, 1, 0.36, 1] as const

const timelineVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
}

function StepCard({
  step,
  elevated = false,
  className,
}: {
  step: ProcessStep
  elevated?: boolean
  className?: string
}) {
  const Icon = step.icon

  return (
    <motion.article
      variants={stepVariants}
      whileHover={{ y: elevated ? -5 : -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "group relative overflow-hidden rounded border border-beco-gold/25 bg-beco-bgSoft/85 p-4 transition-[background-color,border-color,box-shadow] duration-300 hover:border-beco-gold/70 hover:bg-beco-surface/90 hover:shadow-[0_22px_60px_rgba(20,12,8,0.28)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-beco-gold/70 to-transparent opacity-60" />
      <div className="flex min-h-[42px] items-start justify-between gap-2">
        <div>
          <p className="font-display text-3xl font-semibold leading-none text-beco-gold/45">
            {step.num}
          </p>
          <div className="mt-2 h-px w-9 bg-beco-gold/60" />
        </div>
        <span className="inline-flex max-w-24 shrink-0 items-center rounded-pill border border-beco-gold/25 px-2 py-1 text-right font-sans text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] text-beco-gold xl:max-w-28 xl:px-2.5 xl:text-[10px]">
          {step.badge}
        </span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-beco-ivory lg:min-h-[44px]">
        {step.title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-[1.55] text-beco-ivorySoft">
        {step.desc}
      </p>

      <Icon
        className="pointer-events-none absolute bottom-4 right-4 size-10 text-beco-gold/[0.08] transition-colors duration-300 group-hover:text-beco-gold/15"
        strokeWidth={1.25}
      />
    </motion.article>
  )
}

function DesktopTimeline() {
  return (
    <div className="relative mt-24 hidden lg:block">
      <div className="absolute left-[7%] right-[7%] top-1/2 h-px bg-beco-gold/18" />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.5, ease: easeOut }}
        style={{ transformOrigin: "left center" }}
        className="absolute left-[7%] right-[7%] top-1/2 h-px bg-gradient-to-r from-beco-gold/20 via-beco-gold to-beco-gold/20"
      />

      <motion.div
        variants={timelineVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15%" }}
        className="grid grid-cols-6 gap-4"
      >
        {steps.map((step, index) => {
          const isTop = index % 2 === 0
          const Icon = step.icon

          return (
            <div key={step.num} className="relative h-[690px]">
              <motion.div
                variants={stepVariants}
                className={cn(
                  "absolute left-1/2 z-10 w-px -translate-x-1/2 bg-beco-gold/35",
                  isTop
                    ? "bottom-[calc(50%+8px)] h-[34px]"
                    : "top-[calc(50%+8px)] h-[34px]",
                )}
              />

              <motion.div
                variants={stepVariants}
                className="absolute left-1/2 top-1/2 z-20 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border border-beco-gold/50 bg-beco-leather text-beco-gold shadow-[0_0_0_6px_rgba(61,40,24,0.95),0_0_28px_rgba(215,154,78,0.25)]"
              >
                <Icon className="size-4" strokeWidth={1.5} />
              </motion.div>

              <StepCard
                step={step}
                elevated
                className={cn(
                  "absolute left-0 right-0 min-h-[178px] lg:h-[286px]",
                  isTop
                    ? "bottom-[calc(50%+42px)]"
                    : "top-[calc(50%+42px)]",
                )}
              />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

function MobileTimeline() {
  return (
    <div className="relative mt-14 lg:hidden">
      <div className="absolute bottom-2 left-5 top-2 w-px bg-beco-gold/18" />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.4, ease: easeOut }}
        style={{ transformOrigin: "top center" }}
        className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-beco-gold/20 via-beco-gold to-beco-gold/20"
      />

      <motion.div
        variants={timelineVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15%" }}
        className="space-y-4"
      >
        {steps.map((step) => {
          const Icon = step.icon

          return (
            <div key={step.num} className="relative pl-14">
              <motion.div
                variants={stepVariants}
                className="absolute left-0 top-4 z-10 flex size-10 items-center justify-center rounded-pill border border-beco-gold/45 bg-beco-leather text-beco-gold shadow-[0_0_0_5px_rgba(61,40,24,0.95)]"
              >
                <Icon className="size-4" strokeWidth={1.5} />
              </motion.div>
              <StepCard step={step} className="min-h-[160px]" />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export function FranchiseeProcessSection() {
  return (
    <Section bg="leather" id="processo" transitionTo="primary" className="py-24 md:py-32">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <SectionLabel align="center">PASSO A PASSO</SectionLabel>
          <SectionTitle align="center">Do interesse à inauguração, passo a passo.</SectionTitle>
        </div>

        <DesktopTimeline />
        <MobileTimeline />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="#formulario"
            className="group cta-gold inline-flex items-center justify-center rounded-md bg-beco-gold text-beco-bg font-sans font-semibold px-8 py-4 hover:bg-beco-goldGlow"
          >
            Quero fazer o cadastro
            <CtaWand className="ml-2 size-4" />
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
