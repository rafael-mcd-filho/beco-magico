import type { Metadata } from "next"
import { cinzel, inter, wizardWorld } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Beco Mágico Franquias | Seja o dono do lugar onde a magia acontece",
  description: "A hamburgueria temática que conquistou famílias em todo o Brasil. Conheça o modelo de franquia: investimento R$500-750k, payback 18-22 meses, suporte completo.",
  openGraph: {
    title: "Beco Mágico Franquias",
    description: "Seja o dono do lugar onde a magia acontece. Modelo validado em 6+ cidades.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beco Mágico Franquias",
    description: "Seja o dono do lugar onde a magia acontece.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${wizardWorld.variable} ${cinzel.variable} ${inter.variable}`}>
      <body className="bg-beco-bg text-beco-ivory font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
