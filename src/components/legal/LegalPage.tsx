import Link from "next/link"
import type { ReactNode } from "react"

import { Container } from "@/components/layout/Container"

type LegalPageProps = {
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  children: ReactNode
}

type LegalSectionProps = {
  title: string
  children: ReactNode
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="border-t border-beco-gold/15 pt-8">
      <h2 className="font-display font-semibold text-2xl text-beco-ivory">
        {title}
      </h2>
      <div className="mt-4 space-y-4 font-sans text-base leading-[1.75] text-beco-ivorySoft">
        {children}
      </div>
    </section>
  )
}

export function LegalPage({
  eyebrow,
  title,
  description,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-beco-bg">
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.05]"
        style={{ backgroundImage: "url('/textures/grain.png')" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "url('/decorations/stars-pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      <Container size="narrow" className="relative z-10 py-16 md:py-24">
        <Link
          href="/"
          className="font-sans text-sm text-beco-gold hover:text-beco-goldGlow transition-colors"
        >
          ← Voltar para a página inicial
        </Link>

        <header className="mt-12">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-beco-gold">
            {eyebrow}
          </p>
          <h1 className="font-display font-semibold text-beco-ivory text-section-mobile md:text-section-desktop mt-4">
            {title}
          </h1>
          <p className="font-sans text-lg text-beco-mute leading-[1.7] mt-6 max-w-prose">
            {description}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.12em] text-beco-mute mt-6">
            Última atualização: {updatedAt}
          </p>
        </header>

        <div className="mt-12 space-y-10">
          {children}
        </div>

        <div className="mt-16 border-t border-beco-gold/15 pt-8">
          <p className="font-sans text-sm text-beco-mute leading-[1.7]">
            Este conteúdo é informativo e pode ser atualizado para refletir mudanças operacionais, legais ou tecnológicas. Para solicitações sobre dados pessoais, use o canal{" "}
            <a
              href="mailto:franquias@becomagico.com.br"
              className="text-beco-gold hover:text-beco-goldGlow transition-colors"
            >
              franquias@becomagico.com.br
            </a>
            .
          </p>
        </div>
      </Container>
    </main>
  )
}
