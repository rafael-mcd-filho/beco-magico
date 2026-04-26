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

Copie `.env.example` para `.env.local` em desenvolvimento quando precisar testar integracoes:

```bash
LEAD_WEBHOOK_URL=
```

Na Vercel, configure `LEAD_WEBHOOK_URL` em Project Settings > Environment Variables se quiser enviar os leads para Make, Zapier, HubSpot, Pipedrive ou outro endpoint HTTP. Sem essa variavel, a API `/api/lead` valida o formulario, registra o lead nos logs da funcao e retorna sucesso.
