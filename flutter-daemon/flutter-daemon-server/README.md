# Flutter Daemon & WS Server

## APIs

- writeFile
- createProject
- run

## Local dev server

```ts
import Server from "@flutter-builder/daemon/server";

const server = Server();
server.serve();
```

## Client (web app or IDE)

```ts
import Client from "@flutter-builder/daemon/client";

const client = client("ws://localhost:8080").connect();

const app = client.project("tmp");

app.writeFile("lib/main.dart", "void main() {}", {
  save: true,
});

app.on("weblaunchUrl", () => {
  //
});

app.on("restart", () => {
  //
});

// app.log
app.on("log", (log: string, error?: boolean) => {});
// app.progress
app.on("progress", (id: string, message?: string, finished?: boolean) => {});
// app.stop
app.on("stop", (appId: string) => {});

const devices = client.getDevices();

// .addFile("index.html", "<h1>Hello World</h1>");
```

## References

- https://github.com/flutter/flutter/blob/master/packages/flutter_tools/doc/daemon.md
- https://github.com/Dart-Code/Dart-Code/issues/4085
- https://github.com/Dart-Code/Dart-Code

```

```
