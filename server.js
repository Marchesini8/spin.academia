import { createServer } from "node:http";
import next from "next";

const production = process.argv.includes("--production");
const hostname = process.env.HOST ?? "0.0.0.0";
const port = Number.parseInt(process.env.PORT ?? "3000", 10);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  console.error("PORT precisa ser um número entre 1 e 65535.");
  process.exit(1);
}

const app = next({ dev: !production, hostname, port });
const handle = app.getRequestHandler();

await app.prepare();

const server = createServer((request, response) => {
  handle(request, response).catch((error) => {
    console.error("Erro ao processar a página:", error);
    if (!response.headersSent) response.statusCode = 500;
    response.end("Erro interno do servidor");
  });
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`A porta ${port} já está em uso. Use outra: $env:PORT=3001; node server.js`);
  } else {
    console.error(error);
  }
  process.exit(1);
});

server.listen(port, hostname, () => {
  const mode = production ? "produção" : "desenvolvimento";
  console.log(`Spin Academia (${mode}): http://localhost:${port}`);
});

function shutdown() {
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
