import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type ContainerProps = {
  size?: "default" | "narrow" | "prose" | "full"
  className?: string
  children: ReactNode
}

const sizeMap = {
  default: "max-w-content",
  narrow: "max-w-narrow",
  prose: "max-w-prose",
  full: "w-full",
}

export function Container({ size = "default", className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-6 md:px-8", sizeMap[size], className)}>
      {children}
    </div>
  )
}
