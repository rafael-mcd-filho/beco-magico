import type { Metadata } from "next"
import { ObrigadoContent } from "./ObrigadoContent"
import { createMetadata } from "../seo"

export const metadata: Metadata = createMetadata({
    title: "Cadastro Recebido | Beco M\u00e1gico Franquias",
  description:
        "Recebemos seu interesse na franquia Beco M\u00e1gico. Nossa equipe de expans\u00e3o entrar\u00e1 em contato para seguir com a avalia\u00e7\u00e3o.",
  path: "/obrigado",
  noIndex: true,
})

export default function ObrigadoPage() {
  return <ObrigadoContent />
}
