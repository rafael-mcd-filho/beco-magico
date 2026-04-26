"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder"

type TestimonialCardProps = {
  quote: string
  name: string
  location: string
  year: string
  photoId: string
  photoDescription: string
  hasVideo?: boolean
  videoUrl?: string
}

export function TestimonialCard({
  quote,
  name,
  location,
  year,
  photoId,
  photoDescription,
  hasVideo = false,
  videoUrl,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="bg-beco-surface border border-beco-border/40 rounded overflow-hidden max-w-[480px]"
    >
      {/* Foto/vídeo */}
      <div className="relative">
        <ImagePlaceholder
          id={photoId}
          description={photoDescription}
          ratio="4/5"
          dimension="800×1000"
          className="w-full !aspect-[4/5]"
        />

        {/* Play button se tiver vídeo */}
        {hasVideo && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              console.log("Abrir vídeo:", videoUrl)
              // TODO: implementar modal de vídeo
            }}
            aria-label="Reproduzir depoimento em vídeo"
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
          >
            <div className="size-16 rounded-pill bg-beco-gold flex items-center justify-center shadow-[0_8px_32px_-4px_rgba(215,154,78,0.5)]">
              <Play className="size-6 text-beco-bg ml-1" fill="currentColor" />
            </div>
          </motion.button>
        )}
      </div>

      {/* Corpo do card */}
      <div className="relative p-8">
        {/* Aspas decorativas */}
        <span
          className="absolute top-3 left-4 font-display text-[96px] leading-none text-beco-gold/40 select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <p className="font-sans italic text-base lg:text-[17px] text-beco-ivory leading-[1.6] mt-12">
          {quote}
        </p>

        <div className="h-px w-10 bg-beco-gold/60 mt-6" />

        <p className="font-display font-semibold text-lg text-beco-ivory mt-4">
          {name}
        </p>
        <p className="font-sans text-[13px] uppercase tracking-[0.1em] text-beco-mute mt-1">
          {location} · {year}
        </p>
      </div>
    </motion.div>
  )
}
