"use client"

import dynamic from "next/dynamic"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

import { ExperienceSection } from "@/components/sections/ExperienceSection"

const MarketSection = dynamic(
  () => import("@/components/sections/MarketSection").then((m) => ({ default: m.MarketSection })),
  { ssr: false },
)
const MetricsSection = dynamic(
  () => import("@/components/sections/MetricsSection").then((m) => ({ default: m.MetricsSection })),
  { ssr: false },
)
const TerritorySection = dynamic(
  () => import("@/components/sections/TerritorySection").then((m) => ({ default: m.TerritorySection })),
  { ssr: false },
)
const UnitsGallerySection = dynamic(
  () => import("@/components/sections/UnitsGallerySection").then((m) => ({ default: m.UnitsGallerySection })),
  { ssr: false },
)
const DifferentialsSection = dynamic(
  () => import("@/components/sections/DifferentialsSection").then((m) => ({ default: m.DifferentialsSection })),
  { ssr: false },
)
const FranchiseeProcessSection = dynamic(
  () => import("@/components/sections/FranchiseeProcessSection").then((m) => ({ default: m.FranchiseeProcessSection })),
  { ssr: false },
)
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })),
  { ssr: false },
)
const HistorySection = dynamic(
  () => import("@/components/sections/HistorySection").then((m) => ({ default: m.HistorySection })),
  { ssr: false },
)
const FaqSection = dynamic(
  () => import("@/components/sections/FaqSection").then((m) => ({ default: m.FaqSection })),
  { ssr: false },
)
const LeadFormSection = dynamic(
  () => import("@/components/sections/LeadFormSection").then((m) => ({ default: m.LeadFormSection })),
  { ssr: false },
)

function LazyMount({ children, rootMargin = "400px 0px" }: { children: ReactNode; rootMargin?: string }) {
  const { ref, inView } = useInView({ rootMargin, triggerOnce: true })
  return <div ref={ref}>{inView && children}</div>
}

export function BelowFoldSections() {
  return (
    <>
      <ExperienceSection />
      <LazyMount><MarketSection /></LazyMount>
      <LazyMount><MetricsSection /></LazyMount>
      <LazyMount><TerritorySection /></LazyMount>
      <LazyMount><UnitsGallerySection /></LazyMount>
      <LazyMount><DifferentialsSection /></LazyMount>
      <LazyMount><FranchiseeProcessSection /></LazyMount>
      <LazyMount><TestimonialsSection /></LazyMount>
      <LazyMount><HistorySection /></LazyMount>
      <LazyMount rootMargin="600px 0px"><FaqSection /></LazyMount>
      <LazyMount rootMargin="600px 0px"><LeadFormSection /></LazyMount>
    </>
  )
}
