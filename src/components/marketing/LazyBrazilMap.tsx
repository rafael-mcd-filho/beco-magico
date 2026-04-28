"use client"

import dynamic from "next/dynamic"
import { useInView } from "react-intersection-observer"

const BrazilMap = dynamic(
  () => import("@/components/marketing/BrazilMap").then((mod) => mod.BrazilMap),
  {
    ssr: false,
    loading: () => <MapPlaceholder />,
  },
)

function MapPlaceholder() {
  return (
    <div
      className="relative mx-auto aspect-[600/700] w-full max-w-[300px] overflow-hidden rounded border border-beco-gold/15 bg-beco-bg/20 sm:max-w-[330px] lg:max-w-[360px]"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-full border border-beco-gold/15" />
      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-beco-gold/10 blur-2xl" />
      <div className="absolute left-1/2 top-1/2 h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-beco-gold/20" />
      <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 bg-beco-gold/20" />
    </div>
  )
}

export function LazyBrazilMap() {
  const { ref, inView } = useInView({
    rootMargin: "500px 0px",
    triggerOnce: true,
  })

  return (
    <div ref={ref}>
      {inView ? <BrazilMap /> : <MapPlaceholder />}
    </div>
  )
}
