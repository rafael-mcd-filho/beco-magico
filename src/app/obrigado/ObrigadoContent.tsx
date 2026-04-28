"use client"

import Link from "next/link"
import type { SVGProps } from "react"
import { motion } from "framer-motion"
import { FileText, Video, ArrowLeft } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { CtaWand } from "@/components/ui/CtaWand"

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.5" strokeWidth="1.7" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ObrigadoContent() {
  return (
    <main className="relative min-h-screen bg-beco-bg overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(215,154,78,0.08) 0%, transparent 60%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.10]"
        style={{
          backgroundImage: "url('/decorations/stars-pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center text-center py-20 lg:py-32">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative size-24 lg:size-32 rounded-pill border-2 border-beco-gold flex items-center justify-center mb-10"
        >
          <div className="absolute inset-0 rounded-pill bg-beco-gold/15 blur-lg" />

          <svg
            viewBox="0 0 60 60"
            className="size-12 lg:size-16 relative"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M14 32 L26 42 L46 20"
              stroke="#D79A4E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 text-beco-gold mb-4"
        >
          <span className="font-bold text-lg leading-none">|</span>
          <span className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em]">
            CADASTRO RECEBIDO
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-wizard font-normal text-beco-ivory text-section-mobile md:text-section-desktop max-w-3xl"
        >
          A magia já começou.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="font-sans text-lg lg:text-xl text-beco-ivorySoft mt-6 max-w-2xl leading-[1.6]"
        >
          Recebemos seu cadastro e nossa equipe de expansão vai entrar em contato em até <strong className="text-beco-gold">24 horas úteis</strong>. Enquanto isso, você pode aproveitar pra conhecer o Beco Mágico mais a fundo.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 1.0 } },
          }}
          className="grid sm:grid-cols-3 gap-4 mt-16 w-full max-w-3xl"
        >
          {[
            {
              icon: FileText,
              title: "Apresentação completa",
              desc: "Baixe o PDF com modelo de negócio, números detalhados e respostas pra dúvidas comuns.",
              cta: "Baixar PDF",
              href: "#",
            },
            {
              icon: Video,
              title: "Vídeo dos franqueados",
              desc: "Veja franqueados atuais contando como é o dia a dia operando uma unidade do Beco Mágico.",
              cta: "Assistir agora",
              href: "#",
            },
            {
              icon: InstagramIcon,
              title: "Siga o Beco Mágico",
              desc: "Acompanhe os bastidores, novos sabores e eventos das unidades em operação.",
              cta: "@becomagico",
              href: "https://instagram.com/becomagico",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 bg-beco-surface border border-beco-border/40 rounded text-left hover:border-beco-gold/60 transition-colors"
              >
                <Icon className="size-6 text-beco-gold mb-4" strokeWidth={1.25} />
                <h3 className="font-display font-semibold text-base text-beco-ivory">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-beco-mute mt-2 leading-[1.5]">
                  {item.desc}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 font-sans font-semibold text-xs text-beco-gold group-hover:gap-2 transition-all">
                  {item.cta}
                  <CtaWand className="size-3.5" />
                </span>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-sm text-beco-mute hover:text-beco-gold transition-colors"
          >
            <ArrowLeft className="size-4" />
            Voltar pra página inicial
          </Link>
        </motion.div>
      </Container>
    </main>
  )
}
