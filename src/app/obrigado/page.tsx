import type { Metadata } from "next"
import { ObrigadoContent } from "./ObrigadoContent"

export const metadata: Metadata = {
  title: "Obrigado | Beco Mágico Franquias",
  description: "Recebemos seu cadastro e nossa equipe entrará em contato em até 24h úteis.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ObrigadoPage() {
  return <ObrigadoContent />
}
