"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, animate } from "framer-motion"

type AnimatedCounterProps = {
  from?: number
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })
  const motionValue = useMotionValue(from)
  const [display, setDisplay] = useState(from)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    })
    return () => controls.stop()
  }, [isInView, motionValue, to, duration])

  // Formato BR: separador de milhar "." e decimal ","
  const formatted = display.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
