import Client from "./index";
import type { AppEventMap } from "@flutter-daemon/server";
/**
 * A client side flutter project interface instance with binded server connection.
 *
 * @example
 * ```ts
 * const project = new FlutterProject("test");
 * project.writeFile("lib/main.dart", "void main() {}");
 * await project.run();
 *
 * ```
 */
export class FlutterProject {
  constructor(
    readonly id,
    readonly name: string | undefined,
    readonly client: Client,
    cached?: {
      appId: string;
      webLaunchUrl: string;
    }
  ) {
    if (cached) {
      this._appId = cached.appId;
      this._webLaunchUrl = cached.webLaunchUrl;
    } else {
      client.on("app.started", (e) => {
        // TODO: change to app.start
        console.log("on:app.started", e);
        this._appId = e.appId;
      });
      client.on("app.webLaunchUrl", (e) => {
        console.log("on:app.webLaunchUrl", e);
        this._webLaunchUrl = e.url;
      });
    }
  }

  protected _appId: string | undefined;
  get appId(): string {
    return this._appId;
  }

  async run() {}

  async stop() {}

  async restart() {
    return await this.client.restart(this.id);
  }

  async writeFile(path: string, content: string, save?: boolean) {
    return await this.client.writeFile(this.id, path, content, save);
  }

  async readFile(path: string): Promise<string> {
    return await this.client.readFile(this.id, path);
  }

  private _webLaunchUrl: string | null = null;
  async webLaunchUrl(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (this._webLaunchUrl) {
        resolve(this._webLaunchUrl);
        return;
      }

      this.on("app.webLaunchUrl", (e) => {
        this._webLaunchUrl = e.url;
        resolve(e.url);
      });
    });
  }

  async save() {
    return await this.client.restart(this.id);
  }

  on<K extends keyof AppEventMap>(type: K, cb: (e: AppEventMap[K]) => void) {
    this.client.on(type, cb);
  }
}

export class FlutterWebProject extends FlutterProject {
  private _url: string | null;
  get url(): string | null {
    return this._url;
  }

  private _devtools: string | null;
  get devtools(): string | null {
    return this._devtools;
  }

  get started(): boolean {
    return this._url !== null;
  }
}
