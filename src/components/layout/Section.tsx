"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type SectionBg =
  | "primary"
  | "alt"
  | "surface"
  | "leather"
  | "leatherDark"
  | "forest"
  | "midnight"
  | "ember"

type SectionProps = {
  id?: string
  bg?: SectionBg
  transitionTo?: SectionBg
  className?: string
  children: ReactNode
  noGrain?: boolean
}

const bgClassMap: Record<SectionBg, string> = {
  primary: "bg-beco-bg",
  alt: "bg-beco-bgAlt",
  surface: "bg-beco-surface",
  leather: "bg-beco-leather",
  leatherDark: "bg-beco-leatherDark",
  forest: "bg-beco-forest",
  midnight: "bg-beco-midnight",
  ember: "bg-beco-ember",
}

const bgColorMap: Record<SectionBg, string> = {
  primary: "#2A1810",
  alt: "#1F100A",
  surface: "#4A2E1C",
  leather: "#3D2818",
  leatherDark: "#291B10",
  forest: "#2D3D2A",
  midnight: "#1F2A4A",
  ember: "#C75D2C",
}

export function Section({
  id,
  bg = "primary",
  transitionTo,
  className,
  children,
  noGrain = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-28",
        bgClassMap[bg],
        className
      )}
    >
      {!noGrain && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.06]"
          style={{ backgroundImage: "url('/textures/grain.png')" }}
        />
      )}

      {transitionTo && transitionTo !== bg && (
        <div
          className="absolute inset-x-0 bottom-0 z-[2] h-10 md:h-14 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${bgColorMap[transitionTo]} 100%)`,
          }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
