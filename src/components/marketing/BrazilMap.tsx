"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"

type LabelPlacement = {
  dx: number
  dy: number
  anchor: "start" | "end"
}

type City = {
  name: string
  coordinates: [number, number]
  status: "open" | "occupied"
  label: LabelPlacement
}

const geoUrl = "/maps/brazil-states.geojson"

const cities: City[] = [
  // Ocupadas
  { name: "Recife", coordinates: [-34.877, -8.0476], status: "occupied", label: { dx: -14, dy: 4, anchor: "end" } },
  { name: "João Pessoa", coordinates: [-34.8641, -7.1195], status: "occupied", label: { dx: -34, dy: -26, anchor: "end" } },
  { name: "Manaus", coordinates: [-60.0217, -3.119], status: "occupied", label: { dx: 16, dy: -10, anchor: "start" } },
  { name: "Goiânia", coordinates: [-49.2643, -16.6869], status: "occupied", label: { dx: 16, dy: 8, anchor: "start" } },
  { name: "Natal", coordinates: [-35.2094, -5.7945], status: "occupied", label: { dx: 18, dy: -46, anchor: "end" } },
  { name: "Aracaju", coordinates: [-37.0731, -10.9472], status: "occupied", label: { dx: -14, dy: 22, anchor: "end" } },
  // Abertas
  { name: "Fortaleza", coordinates: [-38.5267, -3.7319], status: "open", label: { dx: -14, dy: -34, anchor: "end" } },
  { name: "Salvador", coordinates: [-38.5014, -12.9777], status: "open", label: { dx: -14, dy: 28, anchor: "end" } },
  { name: "Maceió", coordinates: [-35.7353, -9.6658], status: "open", label: { dx: -14, dy: 14, anchor: "end" } },
  { name: "Belém", coordinates: [-48.4902, -1.4558], status: "open", label: { dx: 22, dy: 16, anchor: "start" } },
  { name: "Teresina", coordinates: [-42.8019, -5.0892], status: "open", label: { dx: -14, dy: -12, anchor: "end" } },
  { name: "São Luís", coordinates: [-44.3028, -2.5307], status: "open", label: { dx: -14, dy: -30, anchor: "end" } },
  { name: "Campina Grande", coordinates: [-35.8811, -7.2291], status: "open", label: { dx: -14, dy: -4, anchor: "end" } },
  { name: "Porto Alegre", coordinates: [-51.2177, -30.0346], status: "open", label: { dx: 16, dy: 8, anchor: "start" } },
]

const occupiedCities = cities.filter((city) => city.status === "occupied")
const openCities = cities.filter((city) => city.status === "open")

function CityLabel({
  city,
  isInView,
  delay,
}: {
  city: City
  isInView: boolean
  delay: number
}) {
  const height = 18
  const isOpen = city.status === "open"
  const labelText = `${isOpen ? "" : "\uD83D\uDD12 "}${city.name}`
  const width = city.name.length * 5.4 + (isOpen ? 18 : 30)
  const x = city.label.anchor === "end" ? city.label.dx - width : city.label.dx
  const y = city.label.dy
  const connectorX = city.label.anchor === "end" ? city.label.dx : city.label.dx
  const textX = city.label.anchor === "end" ? city.label.dx - width + 9 : city.label.dx + 9

  return (
    <motion.g
      initial={{ opacity: 0, y: 5 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
      transition={{ duration: 0.45, delay }}
      className="pointer-events-none"
    >
      <path
        d={`M 0 0 L ${connectorX} ${y + height / 2}`}
        fill="none"
        stroke={isOpen ? "rgba(215,154,78,0.65)" : "rgba(245,238,230,0.35)"}
        strokeWidth={0.7}
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        fill={isOpen ? "rgba(42,24,16,0.94)" : "rgba(31,16,10,0.94)"}
        stroke={isOpen ? "rgba(215,154,78,0.78)" : "rgba(107,66,38,0.95)"}
        strokeWidth={0.8}
      />
      <text
        x={textX}
        y={y + height / 2 + 0.5}
        fontSize={7.2}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontWeight={600}
        dominantBaseline="middle"
        fill={isOpen ? "#D79A4E" : "rgba(245,238,230,0.78)"}
      >
        {labelText}
      </text>
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
      className="relative w-full aspect-[600/700]"
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-54, -15],
          scale: 850,
        }}
        width={600}
        height={700}
        className="w-full h-full"
        aria-label="Mapa do Brasil com praças abertas e ocupadas"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(215,154,78,0.05)"
                stroke="rgba(215,154,78,0.42)"
                strokeWidth={0.8}
                style={{
                  default: { outline: "none" },
                  hover: {
                    fill: "rgba(215,154,78,0.10)",
                    outline: "none",
                  },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {occupiedCities.map((city, i) => (
          <Marker key={city.name} coordinates={city.coordinates}>
            <motion.g
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
            >
              <title>{city.name}</title>
              <CityLabel city={city} isInView={isInView} delay={0.8 + i * 0.08} />
            </motion.g>
          </Marker>
        ))}

        {openCities.map((city, i) => (
          <Marker key={city.name} coordinates={city.coordinates}>
            <motion.g
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.4, delay: 1.0 + i * 0.1 }}
            >
              <title>{city.name}</title>
              <motion.circle
                r={6}
                fill="none"
                stroke="#D79A4E"
                strokeWidth={1.2}
                animate={isInView ? { r: [6, 19], opacity: [0.82, 0] } : { r: 6, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.circle
                r={6}
                fill="none"
                stroke="#D79A4E"
                strokeWidth={1.2}
                animate={isInView ? { r: [6, 19], opacity: [0.64, 0] } : { r: 6, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.66,
                }}
              />
              <circle r={5.2} fill="#D79A4E" />
              <CityLabel city={city} isInView={isInView} delay={1.28 + i * 0.08} />
            </motion.g>
          </Marker>
        ))}
      </ComposableMap>
    </motion.div>
  )
}
