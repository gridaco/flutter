import express from "express";
import next from "next";
import Daemon from "@flutter-daemon/server";
const port = parseInt(process.env.PORT as any, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const daemon = new Daemon();
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  daemon.listen({});

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
