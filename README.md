# Spin Academia

Landing page da Spin Academia, construída com Next.js e otimizada para celulares.

## Rodar localmente

Requisitos: Node.js 22.13 ou mais recente.

```bash
npm install
node server.js
```

Acesse [http://localhost:3000](http://localhost:3000).

O mesmo servidor pode ser iniciado com:

```bash
npm run dev
```

Se a porta 3000 já estiver ocupada, no PowerShell use:

```powershell
$env:PORT=3001
node server.js
```

## Compilar e executar em modo de produção

```bash
npm run build
npm start
```

## Hospedagem

- Netlify: `npm run build:netlify`
- OpenAI Sites: `npm run build:sites`
