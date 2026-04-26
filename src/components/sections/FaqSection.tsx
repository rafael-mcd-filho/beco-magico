"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionLabel } from "@/components/layout/SectionLabel"
import { SectionTitle } from "@/components/layout/SectionTitle"
import { fadeUp, stagger, viewportConfig } from "@/lib/motion"

const faqs = [
  // OPERACIONAIS — leve
  {
    q: "Preciso ter experiência em food service?",
    a: "Não. Mais de 70% dos nossos franqueados nunca tinham trabalhado com restaurantes antes. O que importa é perfil de gestão, capital e disposição de operar. A operação é toda treinada pela franqueadora.",
  },
  {
    q: "Quanto preciso ter de capital próprio?",
    a: "Recomendamos pelo menos 60% do investimento em capital próprio (cerca de R$ 300-450k). O restante pode vir de financiamento — o BNDES, Sebrae e bancos parceiros têm linhas específicas pra franquia, e nossa equipe de expansão indica o caminho.",
  },
  {
    q: "Em quanto tempo recupero o investimento?",
    a: "O payback médio da rede é 18-22 meses, com algumas unidades batendo abaixo de 14 meses dependendo da praça. Esse prazo já considera royalty, fundo de marketing e custos operacionais reais.",
  },
  {
    q: "Quem cuida do ponto, da obra e da decoração?",
    a: "Todo o processo é acompanhado pela franqueadora: indicação de fornecedores homologados, projeto arquitetônico padronizado, gestão de obra e treinamento de equipe. Você não precisa virar especialista em obra civil pra abrir um Beco.",
  },
  {
    q: "Quanto tempo até abrir minha unidade?",
    a: "Do primeiro contato até inauguração, em média 5-8 meses. Depende muito de quanto tempo leva pra encontrar o ponto certo na sua cidade — o resto do processo é bastante padronizado.",
  },

  // CONTRATUAIS — médio
  {
    q: "Qual o prazo do contrato?",
    a: "Contrato padrão de 5 anos, com renovação preferencial por mais 5. Cláusulas, taxas e obrigações são detalhadas na COF (Circular de Oferta de Franquia), apresentada após a primeira reunião — e você tem o prazo legal de 8 dias pra reflexão antes de assinar qualquer coisa.",
  },
  {
    q: "Posso abrir mais de uma unidade?",
    a: "Sim, e incentivamos. Multifranqueados ganham desconto progressivo na taxa e prioridade em novas praças. Mas exigimos performance comprovada na primeira unidade antes da segunda — não vendemos território de forma especulativa.",
  },

  // OBJEÇÕES PESADAS — pesado
  {
    q: "E se a região onde eu abrir não funcionar?",
    a: "É a pergunta certa. Antes da assinatura do contrato, fazemos juntos um estudo de viabilidade da praça que inclui análise de fluxo, concorrência, perfil socioeconômico e benchmark com unidades da rede em cidades similares. Se a praça não passa nesse estudo, não recomendamos abrir — preferimos não vender uma franquia do que vender uma franquia que vai fechar. Quando uma unidade enfrenta dificuldade real, nossa equipe entra na operação: revisão de gestão, ajuste de cardápio local, intervenção em marketing e, em casos extremos, renegociação de royalty pra dar fôlego de caixa.",
  },
  {
    q: "Posso vender minha unidade pra outra pessoa depois?",
    a: "Sim. A cessão de franquia é prevista no contrato, com aprovação prévia da franqueadora pra garantir que o novo franqueado tem perfil compatível. Cobramos taxa de transferência (cerca de 20% da taxa de franquia atual) e o processo leva ~60 dias. Várias unidades já passaram por essa transição com sucesso, e em muitas delas o valor de venda foi acima do valor de aquisição.",
  },
  {
    q: "Sou obrigado a comprar de fornecedores específicos?",
    a: "Sim, em alguns casos. Insumos críticos pra padronização (carne premium, brioche da casa, drinks autorais) precisam vir dos fornecedores homologados — porque é o que garante que um Beco em Goiânia tem o mesmo gosto que um Beco em Manaus. Outros itens (FLV, descartáveis, limpeza) você pode comprar localmente. A lista completa de obrigatórios e livres está na COF e a gente discute caso a caso.",
  },
  {
    q: "Como sei que o Beco não vai quebrar daqui a 5 anos?",
    a: "Não dá pra prometer ausência de risco — qualquer franqueadora que prometa isso está mentindo. O que dá pra mostrar é histórico: 6+ anos de operação, expansão consistente com unidades em 4 estados, faturamento por unidade crescendo ano a ano, e nenhuma unidade fechada por descumprimento da franqueadora até hoje. Em reunião, mostramos balanço operacional, contratos com fornecedores estratégicos e plano de expansão dos próximos 3 anos pra você avaliar a saúde da rede com transparência.",
  },
]

function ExtraQuestionBlock({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.7, delay: 0.4 }}
      className={`p-6 border border-beco-gold/30 rounded bg-beco-surface/30 ${className}`}
    >
      <h3 className="font-display font-semibold text-lg text-beco-ivory">
        Tem outra dúvida?
      </h3>
      <p className="font-sans text-sm text-beco-mute mt-2 leading-[1.5]">
        Preencha o formulário abaixo. Nossa equipe responde em até 24h, sem script de telemarketing.
      </p>
      <a
        href="#formulario"
        className="inline-flex items-center mt-4 px-5 py-2.5 rounded-pill bg-beco-gold text-beco-bg font-sans font-semibold text-sm hover:bg-beco-goldGlow transition-all"
      >
        Fazer minha pergunta
        <span className="ml-2">→</span>
      </a>
    </motion.div>
  )
}

export function FaqSection() {
  return (
    <Section bg="alt" id="faq" transitionTo="primary" className="py-24 md:py-32">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            <SectionLabel>PERGUNTAS FREQUENTES</SectionLabel>
            <SectionTitle>O que você precisa saber antes de decidir.</SectionTitle>

            <ExtraQuestionBlock className="mt-8" />
          </div>

          <div className="lg:col-span-7">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
            >
              <Accordion className="space-y-2.5">
                {faqs.map((faq, i) => (
                  <motion.div key={faq.q} variants={fadeUp}>
                    <AccordionItem
                      value={`item-${i}`}
                      className="bg-beco-bgSoft border border-beco-border/40 rounded px-4 transition-[background-color,border-color,box-shadow] duration-300 data-[open]:border-beco-gold/60 data-[open]:bg-beco-surface/45 data-[open]:shadow-[0_14px_34px_rgba(0,0,0,0.14)] lg:px-5"
                    >
                      <AccordionTrigger className="py-3.5 text-left font-display text-sm font-semibold text-beco-ivory hover:no-underline [&_[data-slot=accordion-trigger-icon]]:mt-0.5 [&_[data-slot=accordion-trigger-icon]]:text-beco-gold lg:py-4 lg:text-base">
                        <span className="flex-1">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-sm lg:text-[15px] text-beco-ivorySoft leading-[1.6] pb-4 pr-4 lg:pr-8">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </Section>
  )
}
