import type { Metadata } from "next"
import { cinzel, inter, wizardWorld } from "./fonts"
import { createMetadata, seo } from "./seo"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  applicationName: seo.siteName,
  generator: "Next.js",
  category: "franquias",
    creator: "Beco M\u00e1gico",
    publisher: "Beco M\u00e1gico",
  keywords: [
        "franquia Beco M\u00e1gico",
        "Beco M\u00e1gico franquias",
    "franquia de hamburgueria",
        "hamburgueria tem\u00e1tica",
    "franquia food service",
    "franquia premium",
    "franquia de restaurante",
    "abrir franquia",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  ...createMetadata({
        title: "Beco M\u00e1gico Franquias | Seja o dono do lugar onde a magia acontece",
    description:
            "Conhe\u00e7a a franquia Beco M\u00e1gico: hamburgueria tem\u00e1tica premium, modelo validado em v\u00e1rias cidades, suporte completo e processo de expans\u00e3o para novos franqueados.",
    path: "/",
  }),
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
