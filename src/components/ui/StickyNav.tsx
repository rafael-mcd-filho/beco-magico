"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { CtaWand } from "@/components/ui/CtaWand"

const navLinks = [
  { label: "Mercado", href: "#mercado" },
  { label: "Números", href: "#numeros" },
  { label: "Território", href: "#territorio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
]

export function StickyNav() {
  const [visible, setVisible] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 300) {
        setVisible(false)
        lastScrollY.current = currentScrollY
        return
      }

      const isScrollingDown = currentScrollY > lastScrollY.current
      const isScrollingUp = currentScrollY < lastScrollY.current

      if (isScrollingDown) {
        setVisible(true)
      } else if (isScrollingUp && currentScrollY > 600) {
        setVisible(true)
      } else if (isScrollingUp) {
        setVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 border-b border-beco-gold/20 bg-beco-bg/85 backdrop-blur-md transition-[opacity,transform] duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-content px-6 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 font-wizard text-base md:text-lg font-normal text-beco-gold whitespace-nowrap"
        >
          <Image
            src="/images/logo/logo-removebg-preview.webp"
            alt="Beco Mágico"
            width={64}
            height={64}
            priority
            className="size-16 object-contain md:size-9"
          />
          <span className="hidden md:inline">Beco Mágico</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-wizard text-sm font-normal text-beco-ivorySoft hover:text-beco-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#formulario"
          className="group cta-gold inline-flex items-center justify-center rounded-md bg-beco-gold text-beco-bg font-wizard font-normal text-sm px-4 md:px-5 py-2 md:py-2.5 hover:bg-beco-goldGlow whitespace-nowrap shrink-0"
        >
          <span className="hidden sm:inline">Quero ser franqueado</span>
          <span className="sm:hidden">Falar agora</span>
          <CtaWand className="ml-1.5 size-4" />
        </a>
      </div>
    </nav>
  )
}
