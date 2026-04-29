"use client"

import Link from "next/link"
import type { SVGProps } from "react"
import { Mail, MapPin } from "lucide-react"
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

export function FooterSection() {
  const ano = new Date().getFullYear()

  return (
    <footer className="relative bg-beco-leatherDark border-t border-beco-gold/10 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.05]"
        style={{ backgroundImage: "url('/textures/grain.png')" }}
      />

      <div className="relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">
            <div className="lg:col-span-1">
              <img
                src="/images/logo/logo-removebg-preview.webp"
                alt="Beco Mágico"
                className="h-20 w-auto"
              />
              <p className="font-sans text-sm text-beco-mute mt-6 leading-[1.6]">
                A hamburgueria temática que transforma refeições em experiências inesquecíveis.
              </p>

              <div className="flex items-center gap-3 mt-6">
                {[
                  { icon: InstagramIcon, href: "https://www.instagram.com/becomagicobrasil/", label: "Instagram" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="size-10 rounded-pill border border-beco-gold/30 text-beco-gold/80 flex items-center justify-center hover:border-beco-gold hover:text-beco-gold hover:bg-beco-gold/5 transition-all"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-beco-gold mb-5">
                A franquia
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "A experiência", href: "#experiencia" },
                  { label: "Os números", href: "#numeros" },
                  { label: "Território", href: "#territorio" },
                  { label: "Diferenciais", href: "#diferenciais" },
                  { label: "Como ser franqueado", href: "#processo" },
                  { label: "Depoimentos", href: "#depoimentos" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-beco-ivorySoft hover:text-beco-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-beco-gold mb-5">
                Contato
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="size-4 text-beco-gold/70 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <a
                    href="mailto:franquias@becomagico.com.br"
                    className="font-sans text-sm text-beco-ivorySoft hover:text-beco-gold transition-colors break-all"
                  >
                    franquias@becomagico.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="size-4 text-beco-gold/70 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="font-sans text-sm text-beco-ivorySoft leading-[1.5]">
                    {/* TODO: confirmar endereço da matriz */}
                    Sede: João Pessoa — PB
                  </p>
                </li>
              </ul>

              <a
                href="#formulario"
                className="group cta-outline inline-flex items-center mt-6 px-5 py-2.5 rounded-md border border-beco-gold/60 text-beco-gold text-sm font-sans font-semibold hover:bg-beco-gold hover:text-beco-bg"
              >
                Quero ser franqueado
                <CtaWand className="ml-2 size-4" />
              </a>
            </div>

            <div>
              <h3 className="font-display font-semibold text-sm uppercase tracking-[0.12em] text-beco-gold mb-5">
                Legal
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Política de privacidade", href: "/privacidade" },
                  { label: "Termos de uso", href: "/termos" },
                  { label: "Política de cookies", href: "/cookies" },
                  { label: "Lei Geral de Proteção de Dados", href: "/lgpd" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-beco-ivorySoft hover:text-beco-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Faixa de selos de associação e reconhecimentos */}
          <div className="border-t border-beco-gold/15 pt-10 pb-8 mt-12">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-500">
              <a
                href="https://www.abf.com.br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Associação Brasileira de Franchising"
                className="group"
              >
                <img
                  src="/selos/abf.webp"
                  alt="ABF — Associação Brasileira de Franchising"
                  className="h-10 md:h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </a>
            </div>

            <p className="font-sans text-[11px] text-beco-mute text-center mt-8 leading-relaxed max-w-2xl mx-auto">
              O Beco Mágico opera em conformidade com a Lei de Franchising (13.966/2019). Toda informação detalhada sobre o modelo de franquia, taxas e obrigações está disponível na Circular de Oferta de Franquia (COF), entregue após a primeira reunião de qualificação.
            </p>
          </div>

          <div className="h-px bg-beco-gold/15" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-8">
            <p className="font-sans text-xs text-beco-mute">
              © {ano} Beco Mágico Franquias. Todos os direitos reservados.
            </p>
            <p className="font-sans text-xs text-beco-mute">
              CNPJ 55.699.495/0001-80
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
