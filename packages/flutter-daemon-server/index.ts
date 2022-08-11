import ws from "ws";
import { FlutterProject } from "./lib/flutter-project";
import { clean, INSTANCES_ROOT_DIR, setup } from "./lib/instances";
import type { Request, Response } from "./lib/api";

export default class Server {
  private wss: ws.Server;
  private connections = new Set<ws.WebSocket>();
  projects: FlutterProject[] = [];

  constructor() {
    clean();
    setup();
  }

  listen({ port = 43070 }: { port?: number }) {
    // Creating a new websocket server
    this.wss = new ws.Server({ port: port });
    // Creating connection using websocket
    this.wss.on("connection", (ws) => {
      this.connections.add(ws);
      console.log("new client connected");
      // sending message
      ws.on("message", async (payload, isBinary) => {
        const data: Request = JSON.parse(
          isBinary ? payload.toString() : (payload as any)
        );
        this.handleRequest(ws, data);
      });
      // handling what to do when clients disconnects from server
      ws.on("close", () => {
        console.log("client disconnected");
        this.connections.delete(ws);
      });
      // handling client connection error
      ws.onerror = function (e) {
        console.error("ws: ", e);
      };
    });

    console.log(`The WebSocket server is running on port ${port}`);
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
    return this.projects.find((p) => p.id === id);
  }

  protected async createProject(
    id: string,
    name?: string,
    overwrites?: { [path: string]: string }
  ): Promise<FlutterProject> {
    const p = new FlutterProject(INSTANCES_ROOT_DIR, id, name, {
      overwrites,
    });
    this.projects.push(p);
    await p.run();

    p.onEvent((type, e) => {
      this.proxyEvent(type, e);
    });

    return p;
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
