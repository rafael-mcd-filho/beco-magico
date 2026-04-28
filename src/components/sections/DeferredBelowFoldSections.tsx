"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const BelowFoldSections = dynamic(
  () => import("@/components/sections/BelowFoldSections").then((mod) => mod.BelowFoldSections),
  {
    ssr: false,
    loading: () => <BelowFoldPlaceholder />,
  },
)

function BelowFoldPlaceholder() {
  return (
    <div
      className="min-h-24 bg-beco-midnight"
      aria-hidden="true"
    />
  )
}

export function DeferredBelowFoldSections() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (shouldLoad) return

    const load = () => setShouldLoad(true)
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number
      cancelIdleCallback?: (handle: number) => void
    }

    const idleId = win.requestIdleCallback
      ? win.requestIdleCallback(load, { timeout: 2500 })
      : window.setTimeout(load, 1800)

    window.addEventListener("scroll", load, { once: true, passive: true })
    window.addEventListener("pointerdown", load, { once: true, passive: true })

    return () => {
      if (win.cancelIdleCallback && typeof idleId === "number") {
        win.cancelIdleCallback(idleId)
      } else {
        window.clearTimeout(idleId)
      }

      window.removeEventListener("scroll", load)
      window.removeEventListener("pointerdown", load)
    }
  }, [shouldLoad])

  return shouldLoad ? <BelowFoldSections /> : <BelowFoldPlaceholder />
}
