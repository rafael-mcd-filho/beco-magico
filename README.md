# Beco Magico

Landing page de franquia criada com Next.js App Router, Tailwind CSS e rotas API para captacao de leads.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Acesse `http://localhost:3000`.

## Build local

```bash
npm run lint
npm run build
```

## Deploy na Vercel

O projeto esta na raiz do repositorio. Ao importar no painel da Vercel, use:

- Framework Preset: `Next.js`
- Root Directory: `./`
- Install Command: `npm ci`
- Build Command: `npm run build`
- Output Directory: deixe vazio, a Vercel detecta o output do Next.js
- Node.js Version: default da Vercel ou `24.x`

O arquivo `vercel.json` ja fixa os comandos principais para evitar divergencia entre ambientes.

## Variaveis de ambiente

Nao ha variaveis obrigatorias para envio dos leads no fluxo atual.

A API `/api/lead` valida o payload e envia o formulario completo para o webhook `becoformmaior` e o formulario rapido do hero para o webhook `becoformmenor`.
