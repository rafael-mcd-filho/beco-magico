"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
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
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Threshold: só começa a aparecer após 300px
      if (currentScrollY < 300) {
        setVisible(false)
        setLastScrollY(currentScrollY)
        return
      }

      // Detecta direção: rolando PRA BAIXO mostra, PRA CIMA esconde
      const isScrollingDown = currentScrollY > lastScrollY
      const isScrollingUp = currentScrollY < lastScrollY

      if (isScrollingDown) {
        setVisible(true)
      } else if (isScrollingUp && currentScrollY > 600) {
        // Em mobile, queremos manter visível ao rolar pra cima depois de muito scroll
        setVisible(true)
      } else if (isScrollingUp) {
        setVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-40 bg-beco-bg/85 backdrop-blur-md border-b border-beco-gold/20"
        >
          <div className="mx-auto max-w-content px-6 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 font-wizard text-base md:text-lg font-normal text-beco-gold whitespace-nowrap"
            >
              <Image
                src="/images/logo/logo-removebg-preview.png"
                alt="Beco Mágico"
                width={48}
                height={48}
                priority
                className="size-12 object-contain md:size-9"
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
              className="inline-flex items-center justify-center rounded-pill bg-beco-gold text-beco-bg font-wizard font-normal text-sm px-4 md:px-5 py-2 md:py-2.5 hover:bg-beco-goldGlow transition-all whitespace-nowrap shrink-0"
            >
              <span className="hidden sm:inline">Quero ser franqueado</span>
              <span className="sm:hidden">Falar agora</span>
              <CtaWand className="ml-1.5 size-4" />
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
