import ws from "ws";
import { FlutterProject } from "../lib/flutter-project";
import { clean, INSTANCES_ROOT_DIR, setup } from "../lib/instances";
import type { Request } from "../lib/api";

export class Server {
  readonly wss: ws.Server;
  projects: FlutterProject[] = [];

  constructor({ port = 8080 }: { port?: number }) {
    // Creating a new websocket server
    this.wss = new ws.Server({ port: port });

    clean();
    setup();

    // Creating connection using websocket
    this.wss.on("connection", (ws) => {
      console.log("new client connected");
      // sending message
      ws.on("message", async (payload, isBinary) => {
        const data: Request = JSON.parse(
          isBinary ? payload.toString() : (payload as any)
        );

        console.log("received: ", data.type);
        switch (data.type) {
          case "create-new-project": {
            this.createProject(data.id, data.name).run();
            break;
          }
          case "write-file": {
            const project = this.project(data.projectId);
            await project.writeFile(data.path, data.content);
            if (data.save) {
              project.save();
            }
            break;
          }
          case "restart": {
            const project = this.project(data.projectId);
            project.restart();
            break;
          }
          case "stop": {
            const project = this.project(data.projectId);
            project.stop();
            break;
          }
        }
      });
      // handling what to do when clients disconnects from server
      ws.on("close", () => {
        console.log("the client has connected");
      });
      // handling client connection error
      ws.onerror = function (e) {
        console.error("ws: ", e);
      };
    });

    console.log("The WebSocket server is running on port 8080");
  }

  protected project(id: string): FlutterProject | undefined {
    return this.projects.find((p) => p.id === id);
  }

  protected createProject(id: string, name?: string): FlutterProject {
    const p = new FlutterProject(INSTANCES_ROOT_DIR, id, name);
    this.projects.push(p);
    return p;
  }
}
