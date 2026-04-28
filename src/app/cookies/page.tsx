import type { Metadata } from "next"

import { LegalPage, LegalSection } from "@/components/legal/LegalPage"
import { createMetadata } from "../seo"

export const metadata: Metadata = createMetadata({
    title: "Pol\u00edtica de Cookies | Beco M\u00e1gico Franquias",
  description:
        "Entenda como cookies e tecnologias similares podem ser usados na p\u00e1gina de franquias do Beco M\u00e1gico.",
  path: "/cookies",
})

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Política de Cookies"
      description="Esta política explica como cookies e tecnologias similares podem ser usados para funcionamento, segurança, medição e melhoria da página de franquias."
      updatedAt="26 de abril de 2026"
    >
      <LegalSection title="1. O que são cookies">
        <p>
          Cookies são pequenos arquivos ou identificadores armazenados no navegador ou dispositivo quando você acessa um site. Tecnologias similares podem cumprir funções parecidas, como lembrar preferências, medir desempenho ou proteger a navegação.
        </p>
      </LegalSection>

      <LegalSection title="2. Como usamos cookies">
        <p>
          Podemos usar cookies necessários para funcionamento técnico da página, segurança, prevenção de abuso, carregamento de recursos e manutenção da sessão de navegação.
        </p>
        <p>
          Também podemos usar cookies ou pixels de medição e marketing para entender tráfego, origem de acessos, desempenho de campanhas e conversões do formulário, sempre de acordo com a legislação aplicável e mecanismos de consentimento quando exigidos.
        </p>
      </LegalSection>

      <LegalSection title="3. Categorias possíveis">
        <p>
          <strong className="text-beco-ivory">Necessários:</strong> viabilizam o funcionamento e a segurança da página. Geralmente não podem ser desativados sem afetar a navegação.
        </p>
        <p>
          <strong className="text-beco-ivory">Preferências:</strong> podem guardar escolhas de navegação, como idioma, estado de consentimento ou configurações de interface.
        </p>
        <p>
          <strong className="text-beco-ivory">Medição:</strong> ajudam a entender visitas, páginas acessadas, tempo de navegação e interações, preferencialmente de forma agregada.
        </p>
        <p>
          <strong className="text-beco-ivory">Marketing:</strong> podem apoiar campanhas, mensuração de anúncios e remarketing, quando ferramentas desse tipo estiverem ativas.
        </p>
      </LegalSection>

      <LegalSection title="4. Terceiros">
        <p>
          A página pode integrar serviços de terceiros, como hospedagem, formulários, CRM, analytics, pixels, WhatsApp, Instagram ou ferramentas de segurança. Esses terceiros podem usar seus próprios cookies conforme suas políticas.
        </p>
      </LegalSection>

      <LegalSection title="5. Como gerenciar cookies">
        <p>
          Você pode bloquear, apagar ou gerenciar cookies diretamente nas configurações do navegador. A desativação de cookies necessários pode comprometer funcionalidades da página.
        </p>
        <p>
          Quando cookies opcionais forem utilizados com base em consentimento, poderemos disponibilizar mecanismo específico para aceitar, recusar ou ajustar preferências.
        </p>
      </LegalSection>

      <LegalSection title="6. Atualizações">
        <p>
          Esta política pode ser atualizada se novas ferramentas de medição, atendimento, publicidade ou segurança forem adicionadas à página.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
