import type { Metadata } from "next"

import { LegalPage, LegalSection } from "@/components/legal/LegalPage"

export const metadata: Metadata = {
  title: "Lei Geral de Proteção de Dados | Beco Mágico Franquias",
  description: "Canal e informações para exercício de direitos previstos na LGPD.",
}

export default function LgpdPage() {
  return (
    <LegalPage
      eyebrow="LGPD"
      title="Lei Geral de Proteção de Dados"
      description="Esta página resume como interessados em franquia podem exercer direitos relacionados aos seus dados pessoais tratados pelo Beco Mágico."
      updatedAt="26 de abril de 2026"
    >
      <LegalSection title="1. Aplicação">
        <p>
          A Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) estabelece regras para tratamento de dados pessoais no Brasil. Na página de franquias, os dados são tratados principalmente para atendimento, qualificação de candidatos e comunicação sobre expansão.
        </p>
      </LegalSection>

      <LegalSection title="2. Canal para titulares">
        <p>
          Para solicitações relacionadas a dados pessoais, entre em contato pelo e-mail{" "}
          <a className="text-beco-gold hover:text-beco-goldGlow transition-colors" href="mailto:franquias@becomagico.com.br">
            franquias@becomagico.com.br
          </a>
          . Para localizar seu cadastro, informe nome, WhatsApp usado no formulário e cidade de interesse.
        </p>
      </LegalSection>

      <LegalSection title="3. Direitos que você pode solicitar">
        <p>
          Você pode solicitar confirmação de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade quando aplicável, informação sobre compartilhamento e revisão de consentimento.
        </p>
        <p>
          Também é possível solicitar a eliminação de dados tratados com base em consentimento, observadas hipóteses legais de retenção, como cumprimento de obrigação legal, exercício regular de direitos ou prevenção a fraude.
        </p>
      </LegalSection>

      <LegalSection title="4. Como respondemos">
        <p>
          Após receber a solicitação, poderemos pedir informações adicionais para confirmar a identidade do titular e evitar acesso indevido por terceiros. As respostas serão fornecidas em prazo razoável, conforme a complexidade do pedido e a legislação aplicável.
        </p>
      </LegalSection>

      <LegalSection title="5. Encarregado e fornecedores">
        <p>
          Enquanto o Beco Mágico estrutura seus canais formais de privacidade, o contato operacional para titulares é o e-mail de franquias informado nesta página. Fornecedores que apoiam formulário, CRM, hospedagem, e-mail, WhatsApp ou analytics devem tratar dados apenas conforme instruções e finalidades compatíveis.
        </p>
      </LegalSection>

      <LegalSection title="6. Incidentes de segurança">
        <p>
          Caso ocorra incidente de segurança que possa acarretar risco ou dano relevante aos titulares, serão adotadas medidas de contenção, avaliação e comunicação conforme as regras aplicáveis e orientações da Autoridade Nacional de Proteção de Dados.
        </p>
      </LegalSection>

      <LegalSection title="7. Relação com outras políticas">
        <p>
          Esta página complementa a Política de Privacidade, a Política de Cookies e os Termos de Uso. Em caso de dúvida, consulte também esses documentos ou fale com nossa equipe.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
