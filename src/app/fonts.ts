import { Cinzel, Inter } from "next/font/google"
import localFont from "next/font/local"

export const wizardWorld = localFont({
  src: "../../public/fonts/WizardWorldSimplified-Kxr7.ttf",
  variable: "--font-wizard-world",
  display: "block",
})

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700"],
  display: "block",
})

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "optional",
})
