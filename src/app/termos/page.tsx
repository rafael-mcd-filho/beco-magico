import type { Metadata } from "next"

import { LegalPage, LegalSection } from "@/components/legal/LegalPage"
import { createMetadata } from "../seo"

export const metadata: Metadata = createMetadata({
    title: "Termos de Uso | Beco M\u00e1gico Franquias",
  description:
        "Condi\u00e7\u00f5es gerais de uso da p\u00e1gina de franquias do Beco M\u00e1gico e envio de informa\u00e7\u00f5es por interessados.",
  path: "/termos",
})

export default function TermosPage() {
  return (
    <LegalPage
      eyebrow="Termos"
      title="Termos de Uso"
      description="Estes termos regulam o uso da página de franquias do Beco Mágico e o envio de informações por interessados em conhecer o modelo de negócio."
      updatedAt="26 de abril de 2026"
    >
      <LegalSection title="1. Uso da página">
        <p>
          Esta página tem finalidade informativa e comercial, voltada a pessoas interessadas em conhecer o modelo de franquia do Beco Mágico. Ao navegar ou enviar um formulário, você concorda em usar a página de forma lícita, correta e compatível com estes termos.
        </p>
      </LegalSection>

      <LegalSection title="2. Informações sobre franquia">
        <p>
          Os dados apresentados sobre investimento, faturamento, payback, taxas, território, operação e desempenho são referenciais e podem variar conforme praça, ponto comercial, gestão, custos locais, sazonalidade e outros fatores de mercado.
        </p>
        <p>
          A apresentação desta página não constitui proposta vinculante, promessa de resultado, garantia de aprovação ou oferta definitiva de franquia. Informações completas são apresentadas nas etapas de qualificação e na Circular de Oferta de Franquia (COF), conforme a Lei de Franchising.
        </p>
      </LegalSection>

      <LegalSection title="3. Cadastro e contato">
        <p>
          Ao preencher o formulário, você declara que as informações enviadas são verdadeiras, atuais e fornecidas voluntariamente. O envio do formulário autoriza contato da equipe de expansão por WhatsApp, telefone, e-mail ou outros meios informados.
        </p>
        <p>
          O envio do cadastro não garante aprovação como franqueado, reserva de praça ou exclusividade territorial. A análise depende de critérios comerciais, financeiros, operacionais e territoriais.
        </p>
      </LegalSection>

      <LegalSection title="4. Propriedade intelectual">
        <p>
          Textos, marcas, elementos visuais, fotografias, layout, identidade, nomes de produtos e materiais relacionados ao Beco Mágico pertencem aos seus titulares e não podem ser copiados, explorados ou reproduzidos sem autorização.
        </p>
      </LegalSection>

      <LegalSection title="5. Links externos">
        <p>
          A página pode conter links para redes sociais, WhatsApp, sites de associações, fornecedores ou ferramentas externas. O Beco Mágico não controla o conteúdo, as práticas de privacidade ou os termos desses terceiros.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitação de responsabilidade">
        <p>
          Trabalhamos para manter as informações corretas e atualizadas, mas erros, omissões, indisponibilidades técnicas ou alterações de condições podem ocorrer. O uso da página e a tomada de decisão de investimento devem considerar análise própria e orientação profissional adequada.
        </p>
      </LegalSection>

      <LegalSection title="7. Alterações destes termos">
        <p>
          Podemos atualizar estes termos a qualquer momento para refletir mudanças no site, no modelo de atendimento, em exigências legais ou em políticas internas. A versão vigente será sempre a publicada nesta página.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
