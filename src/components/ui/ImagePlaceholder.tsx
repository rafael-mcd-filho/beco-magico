import { cn } from "@/lib/utils"

type Ratio = "16/9" | "4/3" | "1/1" | "3/4" | "9/16" | "21/9" | "4/5" | "2/3" | "4/1"

type ImagePlaceholderProps = {
  id: string                // ex: "IMAGEM-01"
  description: string       // ex: "Hero — interior unidade Beco com luz quente"
  ratio: Ratio
  treatment?: string        // ex: "overlay vinho 60% + grão"
  dimension?: string        // ex: "2400×1350"
  className?: string
}

// Componente de desenvolvimento. Substituir por <Image> do next/image quando a foto real chegar.
// Manter os IDs IMAGEM-XX como referência cruzada com o documento mestre.
export function ImagePlaceholder({
  id,
  description,
  ratio,
  treatment,
  dimension,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative bg-beco-ivory/[0.04] border-2 border-dashed border-beco-gold/50",
        "flex flex-col items-center justify-center gap-1 text-center p-6",
        "rounded-sm",
        className
      )}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
    >
      <span className="font-mono text-[11px] uppercase tracking-wider text-beco-gold/80">
        {id}
      </span>
      <span className="font-sans text-sm text-beco-ivory/90 max-w-[80%]">
        {description}
      </span>
      <span className="font-mono text-[10px] text-beco-ivory/50">
        Ratio: {ratio}
        {dimension ? ` · ${dimension}` : ""}
      </span>
      {treatment && (
        <span className="font-sans italic text-[11px] text-beco-ivory/40 max-w-[80%]">
          Tratamento: {treatment}
        </span>
      )}
    </div>
  )
}
