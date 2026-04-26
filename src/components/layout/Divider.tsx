import { cn } from "@/lib/utils"

type DividerProps = {
  width?: "short" | "full"
  color?: "gold" | "border" | "ember"
  className?: string
  align?: "left" | "center"
}

export function Divider({
  width = "short",
  color = "gold",
  className,
  align = "left",
}: DividerProps) {
  const widthMap = { short: "w-20", full: "w-full" }
  const colorMap = {
    gold: "bg-beco-gold",
    border: "bg-beco-border opacity-40",
    ember: "bg-beco-ember",
  }
  return (
    <div
      className={cn(
        "h-px",
        widthMap[width],
        colorMap[color],
        align === "center" && "mx-auto",
        className
      )}
    />
  )
}
