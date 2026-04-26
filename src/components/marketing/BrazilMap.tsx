"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"

type City = {
  name: string
  coordinates: [number, number]
  status: "open" | "occupied"
}

const geoUrl = "/maps/brazil-states.geojson"

const cities: City[] = [
  { name: "Recife", coordinates: [-34.877, -8.0476], status: "occupied" },
  { name: "Joao Pessoa", coordinates: [-34.8641, -7.1195], status: "occupied" },
  { name: "Manaus", coordinates: [-60.0217, -3.119], status: "occupied" },
  { name: "Goiania", coordinates: [-49.2643, -16.6869], status: "occupied" },
  { name: "Natal", coordinates: [-35.2094, -5.7945], status: "occupied" },
  { name: "Aracaju", coordinates: [-37.0731, -10.9472], status: "occupied" },
  { name: "Fortaleza", coordinates: [-38.5267, -3.7319], status: "open" },
  { name: "Salvador", coordinates: [-38.5014, -12.9777], status: "open" },
  { name: "Maceio", coordinates: [-35.7353, -9.6658], status: "open" },
  { name: "Belem", coordinates: [-48.4902, -1.4558], status: "open" },
  { name: "Teresina", coordinates: [-42.8019, -5.0892], status: "open" },
  { name: "Sao Luis", coordinates: [-44.3028, -2.5307], status: "open" },
  { name: "Campina Grande", coordinates: [-35.8811, -7.2291], status: "open" },
  { name: "Porto Alegre", coordinates: [-51.2177, -30.0346], status: "open" },
]

function CityMarker({
  city,
  isInView,
  delay,
}: {
  city: City
  isInView: boolean
  delay: number
}) {
  const isOpen = city.status === "open"
  const color = isOpen ? "#3FCF7F" : "#E45B4F"
  const glow = isOpen ? "rgba(63,207,127,0.25)" : "rgba(228,91,79,0.25)"

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.4, delay }}
      className="pointer-events-none"
    >
      <title>
        {city.name} - {isOpen ? "vaga aberta" : "ocupada"}
      </title>
      <motion.circle
        r={6}
        fill="none"
        stroke={color}
        strokeWidth={1.4}
        animate={isInView ? { r: [6, 20], opacity: [0.82, 0] } : { r: 6, opacity: 0 }}
        transition={{ duration: 2.1, repeat: Infinity, ease: "easeOut" }}
      />
      <circle r={8} fill={glow} />
      <circle r={4.5} fill={color} stroke="#2A1810" strokeWidth={1.4} />
    </motion.g>
  )
}

export function BrazilMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(mapRef, { once: true, margin: "-20%" })

  return (
    <motion.div
      ref={mapRef}
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      whileInView={{ clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-[600/700] w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[360px]"
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-54, -15],
          scale: 850,
        }}
        width={600}
        height={700}
        className="h-full w-full"
        aria-label="Mapa do Brasil com pracas abertas e ocupadas"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(215,154,78,0.04)"
                stroke="rgba(215,154,78,0.42)"
                strokeWidth={0.8}
                style={{
                  default: { outline: "none" },
                  hover: {
                    fill: "rgba(215,154,78,0.09)",
                    outline: "none",
                  },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {cities.map((city, i) => (
          <Marker key={city.name} coordinates={city.coordinates}>
            <CityMarker city={city} isInView={isInView} delay={0.55 + i * 0.05} />
          </Marker>
        ))}
      </ComposableMap>
    </motion.div>
  )
}
