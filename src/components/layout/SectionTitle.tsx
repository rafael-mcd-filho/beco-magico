"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type SectionTitleProps = {
  children: ReactNode
  as?: "h1" | "h2"
  size?: "hero" | "section"
  className?: string
  align?: "left" | "center"
}

const sizeMap = {
  hero: "text-hero-mobile md:text-hero-tablet lg:text-hero-desktop",
  section: "text-section-mobile md:text-section-desktop",
}

export function SectionTitle({
  children,
  as = "h2",
  size = "section",
  className,
  align = "left",
}: SectionTitleProps) {
  const Tag = as

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tag
        className={cn(
          "font-wizard",
          "font-normal text-beco-ivory",
          sizeMap[size],
          "text-balance tracking-normal",
          align === "center" && "text-center",
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
