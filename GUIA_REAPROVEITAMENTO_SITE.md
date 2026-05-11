# Guia tecnico para reaproveitar o que funcionou neste site

Este documento resume os padroes tecnicos, estruturais e de experiencia que deram certo nesta landing page para levar para outro projeto. A ideia nao e copiar a paleta, e sim reaproveitar a arquitetura visual, a ordem das secoes, os efeitos, os componentes e as decisoes de SEO/performance.

## Stack e base do projeto

- Next.js com App Router em `src/app`.
- Componentes de UI e secoes em `src/components`.
- Tailwind CSS como camada principal de estilo.
- `framer-motion` para animacoes de entrada, hover e contadores.
- `lucide-react` para icones consistentes.
- `next/image` para imagens abaixo da dobra e assets editoriais.
- `next/font` para carregar fontes locais e Google Fonts com variaveis CSS.
- `zod` + `react-hook-form` para validacao de lead.
- `next/dynamic` + `react-intersection-observer` para carregar secoes pesadas so perto da viewport.

Arquivos-chave:

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/seo.ts`
- `src/app/globals.css`
- `tailwind.config.ts`
- `src/components/layout/*`
- `src/components/sections/*`
- `src/lib/motion.ts`

## Arquitetura geral da landing

A pagina funciona bem porque segue uma ordem de decisao clara:

1. `StickyNav`
2. `HeroSection`
3. `ExperienceSection`
4. `MarketSection`
5. `MetricsSection`
6. `TerritorySection`
7. `UnitsGallerySection`
8. `DifferentialsSection`
9. `FranchiseeProcessSection`
10. `TestimonialsSection`
11. `HistorySection`
12. `FaqSection`
13. `LeadFormSection`
14. `FooterSection`
15. `WhatsappFloat`

Essa ordem cria uma narrativa boa para conversao:

- primeiro vende a oportunidade;
- depois mostra a experiencia/produto;
- depois prova que existe mercado;
- depois traz numeros de negocio;
- depois reduz risco com territorio, suporte e processo;
- depois traz prova social;
- depois responde objecoes;
- por fim fecha com formulario e canais de contato.

## Primitivas de layout que vale copiar

### `Section`

O componente `Section` centraliza:

- padding vertical padrao (`py-20 md:py-28`);
- `position: relative` e `overflow-hidden` para permitir fundos e decoracoes;
- camada opcional de textura/ruido em overlay;
- transicao visual para a proxima secao via gradiente no rodape;
- mapa semantico de fundos por nome (`primary`, `alt`, `surface`, etc.).

Padrao a reaproveitar:

```tsx
<Section bg="primary" transitionTo="forest" id="secao">
  <Container>...</Container>
</Section>
```

O que deu certo: as secoes nao parecem blocos soltos. A transicao `transitionTo` costura uma secao na outra e evita cortes bruscos.

### `Container`

O componente `Container` resolve largura e padding horizontal:

- `default`: largura maxima de conteudo principal;
- `narrow`: bom para textos centrais;
- `prose`: bom para blocos de texto;
- `full`: usado quando a secao precisa respirar mais.

Isso evita repetir `mx-auto px-6 md:px-8 max-w-*` em todos os componentes.

### `SectionLabel`

Padrao de label pequeno acima do titulo:

- linha vertical curta;
- texto uppercase;
- tracking alto;
- animacao leve ao entrar na viewport;
- alinhamento `left` ou `center`.

Isso cria consistencia editorial e ajuda a pessoa a entender a funcao da secao antes de ler o titulo.

### `SectionTitle`

Padrao para titulos grandes:

- usa fonte de display;
- aceita `as="h1"` ou `as="h2"`;
- tamanhos responsivos predefinidos;
- animacao de entrada com `framer-motion`;
- `text-balance` para quebras melhores.

O que vale levar: deixar os titulos das secoes com uma API simples e consistente em vez de recriar classes em cada secao.

### `Divider`

Separador minimalista reutilizavel:

- largura curta ou total;
- alinhamento esquerda ou centro;
- cores semanticas;
- usado para pausas internas em secoes densas.

## Hero

Arquivo de referencia: `src/components/sections/HeroSection.tsx`.

O hero funciona porque combina conteudo de conversao, imagem, prova rapida e formulario sem virar uma tela generica.

Elementos que vale copiar:

- `section` full-width com `overflow-hidden`.
- Imagem de fundo via `<picture>` com asset mobile e desktop separados.
- `fetchPriority="high"` e `loading="eager"` no asset principal.
- Preload das imagens do hero em `src/app/layout.tsx`.
- Overlay em gradiente para legibilidade do texto.
- Camadas decorativas absolutas com `pointer-events-none`.
- Badge de urgencia no topo do hero.
- Label de contexto acima do H1.
- H1 quebrado palavra por palavra para animacao sequencial.
- Palavra-chave destacada dentro do H1.
- Subheadline curta em uppercase.
- Copy principal dentro de um bloco destacado, com borda, sombra e revelacao animada.
- CTA principal com icone.
- Lista lateral de qualificacao do lead com icones de check.
- Mini formulario de contato ja no hero.
- Faixa de metricas em marquee logo abaixo do conteudo principal.
- Indicador de scroll apenas em telas maiores.

Estrutura recomendada:

```tsx
<section className="hero-section relative overflow-hidden">
  <HeroBackground />
  <OverlayLayers />
  <Container>
    <UrgencyBadge />
    <div className="grid lg:grid-cols-12">
      <HeroCopy />
      <HeroQualificationAndQuickForm />
    </div>
    <HeroStatsMarquee />
    <ScrollCue />
  </Container>
</section>
```

Pontos tecnicos importantes:

- No mobile, a imagem precisa de enquadramento proprio. Nao dependa so de `object-position` desktop.
- O texto nao fica direto sobre a foto sem overlay.
- O CTA ancora para `#formulario`, sem depender apenas do WhatsApp.
- O mini formulario reduz friccao para usuarios prontos no primeiro contato.
- A lista "quem estamos procurando" qualifica o lead antes do formulario completo.

## Faixa abaixo do hero

Arquivo de referencia: `HeroStatsMarquee` dentro de `HeroSection`.

O padrao que deu certo:

- faixa de largura total usando `ml-[calc(50%-50vw)] w-screen`;
- borda superior e inferior;
- fundo translucido com `backdrop-blur`;
- mascaras nas laterais com gradiente para o marquee entrar e sair suavemente;
- track duplicado varias vezes para loop continuo;
- numeros com destaque e labels curtos em uppercase;
- animacao CSS linear infinita;
- fallback de movimento desativado em `prefers-reduced-motion`.

Use para mostrar 3 a 5 metricas rapidas:

- unidades;
- estados/cidades;
- clientes;
- anos de mercado;
- notas/reviews;
- volume de atendimento.

Evite colocar texto longo nessa faixa. Ela funciona como prova rapida, nao como secao explicativa.

## Secao imediatamente abaixo da dobra

Arquivo de referencia: `ExperienceSection`.

O que funcionou:

- primeira secao apos hero nao fala de numero nem formulario; fala da experiencia/produto;
- layout duas colunas: texto forte + imagem vertical imersiva;
- fundo proprio, com pattern e pequenos pontos animados;
- imagem com moldura, borda interna e sombra profunda;
- copy narrativa, nao lista tecnica;
- transicao visual no final para a proxima area.

Padrao:

```tsx
<section id="experiencia" className="relative overflow-hidden">
  <AtmosphereLayers />
  <Container>
    <div className="grid lg:grid-cols-12 items-center">
      <TextColumn />
      <VerticalImageColumn />
    </div>
  </Container>
</section>
```

Isso ajuda porque a pagina comeca vendendo a sensacao e a diferenciacao antes de entrar em numeros.

## Secoes de mercado e metricas

Arquivos de referencia:

- `MarketSection.tsx`
- `MetricsSection.tsx`
- `AnimatedCounter.tsx`

Padroes que deram certo:

- header centralizado com label, titulo e paragrafo curto;
- grid de dados macro com divisores, sem transformar tudo em card;
- numeros grandes usando `AnimatedCounter`;
- valores com `font-variant-numeric: tabular-nums` quando necessario;
- bloco de insight com borda lateral para destacar a tese;
- cards de metricas com icone, numero, label, detalhe e micrografico visual;
- cards destacados ocupando mais colunas;
- hover discreto com translacao e mudanca de borda/sombra;
- CTA apos os numeros, nao antes.

`AnimatedCounter` e um componente reaproveitavel:

- dispara somente quando entra na viewport;
- usa `framer-motion` para animar valor;
- formata com `toLocaleString("pt-BR")`;
- aceita `prefix`, `suffix` e `decimals`.

Padrao para card de metrica:

```tsx
<MetricCard
  icon={TrendingUp}
  value={<AnimatedCounter to={3} prefix="R$ " suffix="MM+" />}
  label="Faturamento medio anual"
  detail="Descricao curta e honesta."
  accent="bars"
/>
```

O que levar para outro site: misturar dados grandes, explicacao curta e algum elemento grafico simples aumenta confianca sem depender de tabelas pesadas.

## Territorio, mapa e disponibilidade

Arquivos de referencia:

- `TerritorySection.tsx`
- `LazyBrazilMap.tsx`
- `BrazilMap.tsx`

O que funcionou:

- mapa carregado sob demanda, nao no primeiro render;
- placeholder visual enquanto o mapa nao entra na viewport;
- `react-simple-maps` com GeoJSON local;
- marcadores por status (`open` e `occupied`);
- pulso animado apenas em desktop;
- lista paralela para "vagas abertas" e "ocupadas";
- bloco de alerta abaixo do mapa para urgencia real;
- CTA contextual: verificar cidade.

Padrao a copiar:

```tsx
const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => <MapPlaceholder />,
})

function LazyMap() {
  const { ref, inView } = useInView({ rootMargin: "500px 0px", triggerOnce: true })
  return <div ref={ref}>{inView ? <Map /> : <MapPlaceholder />}</div>
}
```

Esse padrao e bom para qualquer visual pesado: mapas, graficos, videos, carrosseis e experiencias interativas.

## Galeria de unidades/produtos

Arquivo de referencia: `UnitsGallerySection.tsx`.

O que funcionou:

- carrossel real com Embla;
- autoplay com pausa no hover;
- controles explicitos de anterior/proximo;
- cards com proporcao fixa;
- imagens com `next/image`, `fill` e `sizes`;
- hover de zoom leve na imagem;
- card final de convite para a proxima cidade/unidade;
- faixa curta de informacao abaixo da galeria.

Padrao:

```tsx
const [carouselRef, carouselApi] = useEmblaCarousel(
  { align: "start", loop: true, slidesToScroll: 1 },
  [Autoplay({ delay: 2600, stopOnInteraction: false, stopOnMouseEnter: true })]
)
```

O que levar: a galeria nao e so decorativa; ela tambem fecha com uma acao ou convite.

## Diferenciais

Arquivo de referencia: `DifferentialsSection.tsx`.

Padrao que funcionou:

- header centralizado;
- grid de 3 beneficios fortes;
- icones de linha fina com `lucide-react`;
- cada item tem titulo e descricao objetiva;
- imagens editoriais abaixo para dar materialidade;
- decoracoes de canto com baixa opacidade.

Evite exagerar na quantidade. Tres diferenciais bem escritos e visuais funcionam melhor que uma grade grande de beneficios genericos.

## Processo / passo a passo

Arquivo de referencia: `FranchiseeProcessSection.tsx`.

O que funcionou:

- array de etapas tipado (`ProcessStep[]`);
- cada etapa tem numero, titulo, badge, descricao e icone;
- timeline desktop horizontal com cards alternados;
- timeline mobile vertical;
- linha animada preenchendo ao entrar na viewport;
- cards com altura minima controlada;
- CTA no final da timeline.

Padrao de dados:

```tsx
type ProcessStep = {
  num: string
  title: string
  badge: string
  desc: string
  icon: LucideIcon
}
```

Esse formato e facil de portar para qualquer processo comercial: diagnostico, proposta, assinatura, implantacao, entrega, acompanhamento.

## Depoimento e prova social

Arquivo de referencia: `TestimonialsSection.tsx`.

O que funcionou:

- uma prova social em destaque, nao muitos cards pequenos;
- video com `poster`, `controls`, `playsInline` e `preload="metadata"`;
- layout duas colunas;
- quote grande ao lado do video;
- aspas decorativas com baixa opacidade;
- informacao de origem no footer do blockquote.

Padrao:

```tsx
<video
  src="/depoimento/video.mp4"
  poster="/depoimento/poster.jpg"
  controls
  playsInline
  preload="metadata"
/>
```

Para outro site, priorize depoimento em video quando a decisao envolve confianca, investimento ou alto ticket.

## Historia / autoridade emocional

Arquivo de referencia: `HistorySection.tsx`.

O que funcionou:

- secao mais emocional apos prova social e antes do FAQ;
- fundo atmosferico com pattern;
- pequenos pontos animados usando `animate-twinkle`;
- titulo editorial com destaque em uma palavra;
- texto longo, mas dividido e com pontos de negocio destacados em `strong`;
- imagem grande ao lado.

Esse tipo de secao ajuda a conectar marca, memoria e resultado de negocio sem virar uma pagina institucional.

## FAQ

Arquivo de referencia: `FaqSection.tsx`.

O FAQ funciona bem porque trata objecoes reais e tambem contribui para SEO.

Padroes que vale copiar:

- lista de perguntas em array local;
- separacao mental das perguntas: operacionais, contratuais e objecoes pesadas;
- sidebar sticky no desktop com titulo e CTA secundario;
- accordion com estado visual aberto;
- bloco "tem outra duvida" no desktop e mobile;
- JSON-LD `FAQPage` renderizado na propria secao;
- respostas completas, sem soar como checklist curto demais.

Estrutura tecnica:

```tsx
const faqs = [{ q: "...", a: "..." }]

<Accordion>
  {faqs.map((faq, i) => (
    <AccordionItem value={`item-${i}`}>
      <AccordionTrigger>{faq.q}</AccordionTrigger>
      <AccordionContent>{faq.a}</AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

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
```

## Formulario de lead

Arquivos de referencia:

- `LeadFormSection.tsx`
- `LeadForm.tsx`
- `HeroQuickContactForm.tsx`
- `LeadFormSchema.ts`
- `src/app/api/lead/route.ts`

Padroes que deram certo:

- mini formulario no hero para lead quente;
- formulario completo no final para lead que precisa de mais contexto;
- ambos enviam para `/api/lead`;
- schema com `zod`;
- formulario completo com `react-hook-form` e `zodResolver`;
- mascara de WhatsApp;
- estados de loading e erro;
- redirect para `/obrigado` apos sucesso;
- API aceita lead completo ou contato rapido;
- webhook externo por tipo de formulario: completo em `becoformmaior`, rapido em `becoformmenor`;
- `cache: "no-store"` no envio para webhook;
- runtime explicitado como `nodejs`.

Padrao recomendado:

```tsx
const fullLead = leadFormSchema.safeParse(body)
const miniLead = fullLead.success ? null : miniLeadFormSchema.safeParse(body)

if (!fullLead.success && !miniLead?.success) {
  return NextResponse.json({ error: "Dados invalidos" }, { status: 400 })
}
```

O que levar: formularios diferentes podem alimentar a mesma API se o schema separar lead completo e lead rapido.

## CTAs

Arquivos de referencia:

- `globals.css`
- `CtaWand.tsx`
- usos em `HeroSection`, `MetricsSection`, `TerritorySection`, `FaqSection`, `LeadFormSection` e `FooterSection`.

O que funcionou:

- dois tipos principais: CTA cheio (`cta-gold`) e CTA contornado (`cta-outline`);
- hover com leve translacao vertical;
- sombra interna sutil + sombra externa;
- icone pequeno animado no hover;
- textos de CTA contextualizados por secao;
- todos os CTAs principais apontam para `#formulario`.

Padrao:

```tsx
<a href="#formulario" className="group cta-gold inline-flex items-center">
  Texto do CTA
  <CtaWand className="ml-2 size-4" />
</a>
```

## Navegacao e WhatsApp flutuante

Arquivos de referencia:

- `StickyNav.tsx`
- `WhatsappFloat.tsx`
- `tracking.ts`

O que funcionou na nav:

- aparece so depois de rolar;
- usa backdrop blur;
- links para secoes internas;
- CTA sempre visivel no canto direito;
- texto do CTA muda no mobile;
- logo reduzido no mobile.

O que funcionou no WhatsApp:

- aparece so depois de certa rolagem;
- some quando o formulario esta visivel;
- link com mensagem pre-preenchida;
- evento rastreavel via `trackEvent`;
- animacao de entrada/saida;
- `aria-label` claro.

Padrao de visibilidade:

```tsx
if (window.scrollY < 600) setVisible(false)

const formSection = document.getElementById("formulario")
const isFormVisible = rect.top < window.innerHeight && rect.bottom > 0
if (isFormVisible) setVisible(false)
```

Isso evita competir com o formulario quando a pessoa ja esta no ponto de conversao.

## Animacoes e efeitos

Arquivos de referencia:

- `src/lib/motion.ts`
- `src/app/globals.css`

Padroes bons:

- variantes compartilhadas: `fadeUp`, `fadeIn`, `slideInLeft`, `slideInRight`, `scaleIn`, `stagger`;
- `viewportConfig` unico com `once: true`;
- easing consistente `[0.22, 1, 0.36, 1]`;
- hover discreto em cards (`y: -3` ou `y: -4`);
- entrada por palavra no hero;
- marquee CSS para metricas;
- scroll cue simples;
- contadores animados somente quando visiveis;
- respeito a `prefers-reduced-motion`.

Regra de ouro: animacao aqui serve para hierarquia e ritmo, nao para chamar atencao o tempo todo.

Inclua sempre:

```css
@media (prefers-reduced-motion: reduce) {
  .classe-animada {
    animation: none;
    transform: none;
  }
}
```

## Sombras, bordas e profundidade

O que deu certo:

- bordas finas com baixa opacidade;
- sombras longas e suaves em imagens grandes;
- sombras mais compactas em botoes;
- cards com hover elevando poucos pixels;
- `inset 0 1px 0` para criar acabamento de superficie;
- linha superior em gradiente dentro de cards;
- bordas internas em imagens para acabamento premium.

Padroes:

```tsx
className="border rounded shadow-[0_24px_80px_-44px_rgba(0,0,0,0.9)]"
```

```tsx
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-current to-transparent" />
```

Leve a tecnica, nao os valores exatos.

## Fundos, texturas e divisao entre secoes

O site usa fundos por camadas:

- cor/base semantica da secao;
- gradiente radial discreto para direcionar olhar;
- pattern decorativo com baixa opacidade;
- textura/ruido em `mix-blend-overlay`;
- imagem editorial de fundo quando a secao precisa de atmosfera;
- gradiente no rodape da secao para transicionar para a proxima.

Padrao de transicao:

```tsx
<div
  className="absolute inset-x-0 bottom-0 z-[2] h-10 md:h-14 pointer-events-none"
  style={{
    background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${nextBg} 100%)`,
  }}
/>
```

Importante: qualquer textura referenciada precisa existir no projeto destino. Se usar `/textures/grain.png`, garanta que o arquivo foi levado tambem.

## Icones

O que funcionou:

- `lucide-react` para quase tudo;
- icones com `strokeWidth` mais fino quando o layout e premium/editorial;
- icones pequenos dentro de cards, listas e CTAs;
- icones decorativos grandes com opacidade baixa dentro de cards;
- SVG manual apenas quando nao ha icone equivalente, como Instagram ou WhatsApp.

Boas praticas:

- icone informativo deve ter texto proximo;
- icone puramente decorativo deve usar `aria-hidden="true"`;
- botoes de carrossel devem ter `aria-label`;
- mantenha tamanho de icone consistente por contexto.

## Performance

Padroes que vale copiar:

- hero com imagem prioritaria e preload no `layout`;
- secoes abaixo da dobra carregadas com `dynamic(..., { ssr: false })`;
- `LazyMount` baseado em Intersection Observer;
- mapa carregado apenas quando perto da viewport;
- video com `preload="metadata"`, nao carregamento total;
- carrossel fora do primeiro render;
- `optimizePackageImports` para `lucide-react` e `framer-motion`;
- imagens editoriais com `next/image`, `fill` e `sizes`;
- assets decorativos com `loading="lazy"`.

Padrao de lazy sections:

```tsx
function LazyMount({ children, rootMargin = "400px 0px" }) {
  const { ref, inView } = useInView({ rootMargin, triggerOnce: true })
  return <div ref={ref}>{inView && children}</div>
}
```

Use para secoes que nao precisam participar do HTML inicial.

## SEO

Arquivos de referencia:

- `src/app/seo.ts`
- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `public/manifest.webmanifest`
- `public/og-image.webp`

O que deu certo:

- helper central `createMetadata`;
- `metadataBase` no layout;
- canonical por pagina;
- Open Graph completo;
- Twitter card;
- imagem padrao de compartilhamento;
- robots index/follow por padrao;
- suporte a `noIndex`;
- `sitemap.ts` com rotas principais e paginas legais;
- `robots.ts` bloqueando API e pagina de obrigado;
- manifest web app;
- `lang="pt-BR"` no HTML;
- keywords, applicationName, category, creator e publisher;
- JSON-LD de FAQ dentro da secao de FAQ.

Padrao de helper:

```tsx
export function createMetadata({
  title,
  description,
  path = "/",
  image = defaultImage,
  noIndex = false,
}: SeoConfig): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "pt_BR",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  }
}
```

Para outro projeto, mantenha:

- uma fonte unica de `siteUrl`;
- uma imagem OG padrao;
- canonical absoluto;
- sitemap gerado por codigo;
- robots bloqueando rotas que nao devem ranquear;
- schema FAQ quando houver FAQ real.

## Acessibilidade e UX

Boas decisoes presentes:

- `html lang="pt-BR"`;
- foco visivel global com `*:focus-visible`;
- `aria-label` em mapa, video, botoes de carrossel e WhatsApp;
- imagens decorativas com `alt=""` e `aria-hidden`;
- controles reais de video e carrossel;
- formularios com `label htmlFor`;
- mensagens de erro proximas aos campos;
- estados `disabled` durante envio;
- `scroll-behavior: smooth`;
- reducao de movimento para quem prefere menos animacao.

Levar para outro site: acessibilidade basica nao precisa parecer "feature"; ela melhora conversao porque reduz atrito.

## Paginas legais e confianca

O footer ganha confianca porque inclui:

- links internos para secoes comerciais;
- dados de contato;
- links legais;
- selo/associacao;
- nota legal sobre franquia/COF;
- CNPJ;
- ano dinamico.

Arquivos relacionados:

- `src/components/sections/FooterSection.tsx`
- `src/components/legal/LegalPage.tsx`
- `src/app/privacidade/page.tsx`
- `src/app/termos/page.tsx`
- `src/app/cookies/page.tsx`
- `src/app/lgpd/page.tsx`

Para outro site de conversao, manter paginas legais e nota de conformidade ajuda a reduzir risco percebido.

## Checklist para replicar em outro projeto

- Criar primitivas: `Section`, `Container`, `SectionLabel`, `SectionTitle`, `Divider`.
- Definir tokens semanticos no Tailwind, sem espalhar cores soltas nos componentes.
- Montar a landing em narrativa de decisao, nao em blocos aleatorios.
- Hero com imagem real, overlay, H1 forte, CTA, qualificadores e mini formulario.
- Faixa de metricas curta logo abaixo do hero.
- Primeira secao abaixo da dobra vendendo experiencia/produto.
- Secao de mercado com dados macro.
- Secao de metricas com contadores e cards.
- Secao de territorio/disponibilidade quando houver escassez geografica ou operacional.
- Galeria com imagens reais e convite no final.
- Diferenciais em no maximo 3 a 6 itens fortes.
- Processo em timeline desktop/mobile.
- Depoimento em video se houver decisao de alto valor.
- Secao de historia/autoridade antes do FAQ.
- FAQ com objecoes reais e JSON-LD.
- Formulario completo no fim e formulario rapido no hero.
- API unica para receber leads completos e rapidos.
- WhatsApp flutuante que some perto do formulario.
- Sticky nav que aparece apos scroll.
- SEO centralizado em helper.
- Sitemap e robots gerados por codigo.
- Manifest, favicon, OG image e `metadataBase`.
- Lazy load para secoes pesadas.
- `prefers-reduced-motion` para animacoes CSS.
- `aria-label`, labels de formulario e foco visivel.

## Resumo reutilizavel

O que mais deu certo foi a combinacao de:

- arquitetura de secoes padronizada;
- narrativa comercial bem ordenada;
- hero com conversao imediata;
- prova rapida em marquee;
- imagens reais e proporcoes controladas;
- dados animados sem exagero;
- objecoes respondidas no FAQ;
- formulario com validacao forte;
- SEO tecnico completo;
- lazy loading agressivo abaixo da dobra;
- detalhes visuais consistentes em bordas, sombras, fundos e icones.

Para outro site, comece copiando a estrutura e as primitivas. Depois troque copy, assets, metricas, segmentos e identidade visual.
