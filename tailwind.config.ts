import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beco: {
          // PRIMÁRIAS — marrom queimado dominante
          bg: "#2A1810",
          bgAlt: "#1F100A",
          bgSoft: "#3D2818",
          surface: "#4A2E1C",
          surfaceAlt: "#332016",
          border: "#6B4226",

          // DOURADOS
          gold: "#D79A4E",
          goldDark: "#A87434",
          goldGlow: "#F0BC6E",
          goldDeep: "#8B5A24",

          // TONS DE TEXTO
          ivory: "#F5EEE6",
          ivorySoft: "#E8D8C3",
          mute: "rgba(245,238,230,0.72)",

          // CORES SECUNDÁRIAS POR SEÇÃO
          ember: "#C75D2C",
          emberDark: "#9C4520",
          emberLight: "#E07A45",

          forest: "#2D3D2A",
          forestDark: "#1F2E1C",
          forestLight: "#4A5C45",

          midnight: "#1F2A4A",
          midnightDark: "#15203A",
          midnightLight: "#3A4870",

          leather: "#3D2818",
          leatherDark: "#291B10",
          leatherLight: "#5A3D24",

          overlay: "rgba(20,12,8,0.65)",
        },
      },
      fontFamily: {
        wizard: ["var(--font-wizard-world)", "var(--font-cinzel)", "Georgia", "serif"],
        display: ["var(--font-cinzel)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-mobile": ["48px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero-tablet": ["72px", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "hero-desktop": ["112px", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "section-mobile": ["36px", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "section-desktop": ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "label": ["12px", { lineHeight: "1.2", letterSpacing: "0.18em" }],
        "metric": ["64px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "metric-lg": ["96px", { lineHeight: "1", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        none: "0",
        xs: "2px",
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
        pill: "9999px",
      },
      maxWidth: {
        content: "1200px",
        narrow: "880px",
        prose: "640px",
      },
      backgroundImage: {
        "grain": "url('/textures/grain.png')",
        "gradient-vignette": "radial-gradient(ellipse at center, transparent 0%, rgba(20,12,8,0.6) 100%)",
        "gradient-hero": "linear-gradient(180deg, rgba(31,16,10,0) 0%, rgba(31,16,10,0.8) 80%, #1F100A 100%)",
        "gradient-ember": "radial-gradient(circle at 30% 50%, rgba(199,93,44,0.15) 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "marquee": "marquee 30s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
}
export default config
