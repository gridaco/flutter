import ws from "ws";
import { FlutterProject } from "./lib/flutter-project";
import * as virtualized from "./lib/virtualized";
import type { Request, Response } from "./lib/api";

export default class Server {
  private wss: ws.Server;
  private connections = new Set<ws.WebSocket>();
  readonly projects: Map<string, FlutterProject> = new Map();

  constructor() {
    virtualized.clean();
    virtualized.setup();
  }

  listen({ port = 43070 }: { port?: number }) {
    // Creating a new websocket server
    this.wss = new ws.Server({ port: port });
    // Creating connection using websocket
    this.wss.on("connection", (ws) => {
      this.connections.add(ws);
      console.info("new client connected");
      // sending message
      ws.on("message", async (payload, isBinary) => {
        const data: Request = JSON.parse(
          isBinary ? payload.toString() : (payload as any)
        );
        this.handleRequest(ws, data);
      });
      // handling what to do when clients disconnects from server
      ws.on("close", () => {
        console.info("client disconnected");
        this.connections.delete(ws);
      });
      // handling client connection error
      ws.onerror = function (e) {
        console.error("ws: ", e);
      };
    });

    console.info(
      `The Flutter Daemon server is running on.. ws://localhost:${port}`
    );
  }

  protected async handleRequest(ws, data: Request) {
    console.log("received: ", data.type);
    switch (data.type) {
      case "create-new-project": {
        this.createProject(data.id, data.name, data.overwrites).then(() => {
          this.response(ws, {
            ...data,
            $id: data.$id,
            type: "create-new-project",
          });
        });
        break;
      }
      case "use-project": {
        const { project, existing } = await this.useProject(
          data.id,
          data.name,
          data.overwrites
        );
        this.response(ws, {
          ...data,
          ...{
            appId: existing ? await project.appId() : undefined,
            webLaunchUrl: existing ? await project.webLaunchUrl() : undefined,
          },
          $id: data.$id,
          used: existing ? "existing" : "new",
          type: "use-project",
        });
        break;
        //
      }
      case "import-project": {
        const { path } = data;
        this.importProject(path)
          .then((project) => {
            this.response(ws, {
              $id: data.$id,
              type: "import-project",
              path,
              id: project.id,
              name: project.name,
            });
          })
          .catch((e) => {
            this.response(ws, {
              $id: data.$id,
              type: "import-project",
              path,
              error: e.message,
            });
          });

        break;
      }
      case "write-file": {
        const project = this.project(data.projectId);
        await project.writeFile(data.path, data.content);
        if (data.save) {
          await project.save();
        }
        this.response(ws, {
          ...data,
          $id: data.$id,
          type: "write-file",
        });
        break;
      }
      case "restart": {
        const project = this.project(data.projectId);
        await project.restart();
        this.response(ws, {
          ...data,
          $id: data.$id,
          type: "restart",
        });
        break;
      }
      case "stop": {
        const project = this.project(data.projectId);
        project.stop();
        this.response(ws, {
          ...data,
          $id: data.$id,
          type: "stop",
        });
        break;
      }
      case "read-file": {
        const project = this.project(data.projectId);
        const content = await project.readFile(data.path);
        this.response(ws, {
          ...data,
          $id: data.$id,
          type: "read-file",
          content,
        });
      }
    }
  }

  protected project(id: string): FlutterProject | undefined {
    return this.projects.get(id);
  }

  protected async importProject(path: string) {
    const p = FlutterProject.from(path);

    console.info("import flutter project at: ", path);

    // set path as id (which project.id is)
    this.projects.set(p.id, p);

    await p.run();

    p.onEvent((type, e) => {
      this.proxyEvent(type, e);
    });

    return p;
  }

  protected async createProject(
    id: string,
    name?: string,
    overwrites?: { [path: string]: string },
    killExisting: boolean = true
  ): Promise<FlutterProject> {
    if (killExisting && this.projects.has(id)) {
      this.projects.get(id).kill();
    }

    const p = await FlutterProject.new({
      cwd: virtualized.INSTANCES_ROOT_DIR,
      id,
      name,
      options: {
        overwrites,
      },
    });

    console.info(
      "virtualized flutter project at: ",
      virtualized.INSTANCES_ROOT_DIR
    );

    this.projects.set(id, p);

    await p.run();

    p.onEvent((type, e) => {
      this.proxyEvent(type, e);
    });

    return p;
  }

  protected async useProject(
    id: string,
    name?: string,
    overwrites?: { [path: string]: string }
  ): Promise<{ project: FlutterProject; existing: boolean }> {
    if (this.projects.has(id)) {
      return { project: this.projects.get(id), existing: true };
    } else {
      return {
        project: await this.createProject(id, name, overwrites),
        existing: false,
      };
    }
  }

  protected response(ws: ws.WebSocket, r: Response) {
    ws.send(JSON.stringify(r));
  }

  protected proxyEvent(type, params) {
    // console.log("proxyEvent: ", type, params);
    this.connections.forEach((ws) => {
      ws.send(JSON.stringify({ type, ...params }));
    });
  }
}

export * from "./lib/api";
export * from "./lib/types";
