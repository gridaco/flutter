import type {
  Response,
  Request,
  DaemonConnectedEvent,
  AppEventMap,
} from "@flutter-daemon/server";
import { ReadFileResponse } from "@flutter-daemon/server";
import { FlutterProject } from "./flutter-project";

type ClientEventMap = {
  connected: DaemonConnectedEvent;
  "read-file": ReadFileResponse;
} & AppEventMap;

export default class Client {
  readonly ws: WebSocket;
  readonly projects: Map<string, FlutterProject> = new Map();
  constructor(readonly serverurl: string | `ws://localhost:${number}`) {
    // connect to ws server
    this.ws = new WebSocket(serverurl);

    this.ws.addEventListener("open", (e) => {
      this._connected = true;
    });
  }

  async project(id: string, name?: string): Promise<FlutterProject> {
    await this.request(cmd("create-new-project", { id, name }));
    const p = new FlutterProject(id, name, this);
    this.projects.set(id, p);
    return p;
  }

  async restart(projectId: string) {
    await this._connect();
    return this.request(cmd("restart", { projectId: projectId }));
  }

  async writeFile(
    projectId: string,
    path: string,
    content: string,
    save: boolean
  ) {
    await this._connect();
    this.request(cmd("write-file", { projectId, path, content, save }));
  }

  private _connected: boolean = false;
  private async _connect() {
    if (this._connected) return true;
    return new Promise((resolve, reject) => {
      this.ws.addEventListener("open", (e) => {
        this._connected = true;
        resolve(true);
      });
    });
  }

  async readFile(projectId: string, path: string): Promise<string> {
    await this._connect();
    return (
      (await this.request(
        cmd("read-file", { projectId, path })
      )) as ReadFileResponse
    ).content;
  }

  async stop(appId: string) {
    await this._connect();
    this.request(cmd("stop", { appId }));
  }

  on<K extends keyof ClientEventMap>(
    type: K,
    callback: (e: ClientEventMap[K]) => void
  ) {
    this.ws.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);
      console.log("on:message", data);
      if (data.type == type) {
        callback(data);
      }
    });
  }

  async request(r: Request): Promise<Response> {
    await this._connect();
    this.ws.send(JSON.stringify(r));

    return new Promise((resolve, reject) => {
      const listener = (e) => {
        const data = JSON.parse(e.data);
        if (data.$id && data.$id === r.$id) {
          resolve(data as Response);
          this.ws.removeEventListener("message", listener);
        }
      };

      this.ws.addEventListener("message", listener);
    });
  }
}

function cmd<K extends Request["type"]>(
  type: K,
  o: Omit<Request, "type" | "$id">
): Request {
  return { type: type, ...o, $id: $id() } as Request;
}

function $id() {
  return Math.random().toString(36).substr(2, 9);
}

export { FlutterProject } from "./flutter-project";
