import type { Metadata } from "next"

import { LegalPage, LegalSection } from "@/components/legal/LegalPage"
import { createMetadata } from "../seo"

export const metadata: Metadata = createMetadata({
    title: "Pol\u00edtica de Privacidade | Beco M\u00e1gico Franquias",
  description:
        "Saiba como o Beco M\u00e1gico trata dados pessoais enviados por interessados em conhecer o modelo de franquia.",
  path: "/privacidade",
})

export default function PrivacidadePage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Política de Privacidade"
      description="Esta política explica quais dados pessoais coletamos na página de franquias do Beco Mágico, por que usamos essas informações e como você pode exercer seus direitos."
      updatedAt="26 de abril de 2026"
    >
      <LegalSection title="1. Quem somos">
        <p>
          Esta página é operada pelo Beco Mágico Franquias, com sede em João Pessoa — PB, para apresentar o modelo de franquia, receber interessados e iniciar o processo de qualificação de candidatos.
        </p>
        <p>
          Para assuntos relacionados a privacidade e dados pessoais, o canal de contato é{" "}
          <a className="text-beco-gold hover:text-beco-goldGlow transition-colors" href="mailto:franquias@becomagico.com.br">
            franquias@becomagico.com.br
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Dados que coletamos">
        <p>
          Quando você preenche o formulário de interesse, podemos coletar: nome completo, WhatsApp, cidade, estado, faixa de capital disponível, motivação para abrir uma unidade e confirmação de consentimento para contato.
        </p>
        <p>
          Também podemos tratar informações técnicas de navegação, como endereço IP, data e hora de acesso, páginas visitadas, tipo de dispositivo, navegador e dados de interação, especialmente para segurança, melhoria da experiência e medição de desempenho da página.
        </p>
      </LegalSection>

      <LegalSection title="3. Para que usamos os dados">
        <p>
          Usamos seus dados para responder ao cadastro, avaliar o perfil inicial do candidato, verificar praça de interesse, agendar reuniões, enviar materiais de apresentação, responder dúvidas e conduzir etapas preliminares do processo de franquia.
        </p>
        <p>
          Também podemos usar dados de forma agregada ou estatística para entender a demanda por cidades, melhorar a comunicação da página e planejar expansão territorial.
        </p>
      </LegalSection>

      <LegalSection title="4. Bases legais">
        <p>
          O tratamento pode se apoiar em consentimento, execução de procedimentos preliminares relacionados ao interesse em franquia, legítimo interesse para comunicação e melhoria do serviço, cumprimento de obrigações legais e exercício regular de direitos.
        </p>
      </LegalSection>

      <LegalSection title="5. Compartilhamento">
        <p>
          Seus dados podem ser acessados por equipe interna de expansão, consultores autorizados e fornecedores necessários para operar o atendimento, como ferramentas de formulário, CRM, e-mail, WhatsApp, hospedagem, analytics ou segurança.
        </p>
        <p>
          Não vendemos seus dados pessoais. O compartilhamento com terceiros ocorre apenas quando necessário para as finalidades acima, cumprimento legal ou proteção de direitos.
        </p>
      </LegalSection>

      <LegalSection title="6. Retenção e segurança">
        <p>
          Mantemos os dados pelo período necessário para conduzir o relacionamento com interessados, cumprir obrigações legais, preservar histórico de atendimento e resguardar direitos. Dados podem ser excluídos ou anonimizados quando deixarem de ser necessários.
        </p>
        <p>
          Aplicamos medidas razoáveis de segurança para reduzir risco de acesso não autorizado, perda, alteração ou uso indevido das informações.
        </p>
      </LegalSection>

      <LegalSection title="7. Seus direitos">
        <p>
          Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revogação de consentimento quando aplicável.
        </p>
        <p>
          Para exercer esses direitos, envie uma solicitação para{" "}
          <a className="text-beco-gold hover:text-beco-goldGlow transition-colors" href="mailto:franquias@becomagico.com.br">
            franquias@becomagico.com.br
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  )
}
