"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type SectionLabelProps = {
  children: ReactNode
  className?: string
  align?: "left" | "center"
}

export function SectionLabel({ children, className, align = "left" }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex items-center gap-3 mb-4 text-beco-gold",
        align === "center" && "justify-center",
        className
      )}
    >
      <span className="font-bold text-lg leading-none">|</span>
      <span className="font-sans text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em]">
        {children}
      </span>
    </motion.div>
  )
}
