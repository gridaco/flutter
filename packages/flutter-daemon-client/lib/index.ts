import type {
  Response,
  Request,
  DaemonConnectedEvent,
  ReadFileResponse,
  AppEventMap,
  RequestMap,
  UseProjectResponse,
  ImportProjectResponse,
} from "@flutter-daemon/server";
import assert from "assert";
import { FlutterProject } from "./flutter-project";
import { WebSocket } from "ws";

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

  async import(path: string) {
    const res = await this.request<ImportProjectResponse>(
      cmd("import-project", { path })
    );

    if ("error" in res) {
      throw new Error(res.error);
    } else {
      const { id, name } = res;
      const p = new FlutterProject(id, name, this);
      this.projects.set(id, p);
      return p;
    }
  }

  async project(
    id: string,
    name?: string,
    overwrites?: { [path: string]: string }
  ): Promise<FlutterProject> {
    const { appId, webLaunchUrl, used } =
      await this.request<UseProjectResponse>(
        cmd("use-project", { id, name, overwrites })
      );

    const p = new FlutterProject(
      id,
      name,
      this,
      used === "existing"
        ? {
            appId,
            webLaunchUrl,
          }
        : undefined
    );
    this.projects.set(id, p);
    return p;
  }

  async restart(projectId: string) {
    await this._connect();
    return await this.request(cmd("restart", { projectId: projectId }));
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

  async stop(projectId: string) {
    await this._connect();
    this.request(cmd("stop", { projectId }));
  }

  on<K extends keyof ClientEventMap>(
    type: K,
    callback: (e: ClientEventMap[K]) => void
  ) {
    this.ws.addEventListener("message", (e) => {
      const data = JSON.parse(e.data as any);
      if (data.type == type) {
        callback(data);
      }
    });
  }

  async request<T extends Response = Response>(r: Request): Promise<T> {
    assert(r.$id);
    await this._connect();
    this.ws.send(JSON.stringify(r));

    return new Promise((resolve, reject) => {
      const listener = (e) => {
        const data = JSON.parse(e.data);
        if (data.$id && data.$id === r.$id) {
          resolve(data as T);
          this.ws.removeEventListener("message", listener);
        }
      };

      this.ws.addEventListener("message", listener);
    });
  }
}

function cmd<K extends keyof RequestMap>(
  type: K,
  o: Omit<RequestMap[K], "type" | "$id">
): RequestMap[K] {
  return { type: type, ...o, $id: $id() } as RequestMap[K];
}

function $id() {
  return Math.random().toString(36).substr(2, 9);
}

export { FlutterProject } from "./flutter-project";
