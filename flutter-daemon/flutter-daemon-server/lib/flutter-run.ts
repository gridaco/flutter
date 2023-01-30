import { FlutterDaemon } from "./flutter-daemon";
import type {
  AppRestartRequest,
  AppStopRequest,
  AppStopEvent,
  AppStartEvent,
  AppWebLaunchUrlEvent,
} from "./types";
type FlutterRunEvents =
  | "start"
  | "debugPort"
  | "started"
  | "log"
  | "progress"
  | "stop";

/**
 * flutter run --machine
 */
export class FlutterRun extends FlutterDaemon {
  private readonly web: boolean;
  private _appId: string | null = null;
  get appId(): string | null {
    return this._appId;
  }

  readonly directory: string;

  constructor({
    projectDir,
    webServer = true,
  }: {
    /**
     * flutter project directory
     */
    projectDir: string;
    /**
     * if set true, -d web-server will be added.
     */
    webServer?: boolean;
  }) {
    const args = ["run", "--machine"];
    if (webServer) {
      args.push("-d", "web-server");
    }

    super(projectDir, {
      bin: "flutter", // TODO: add flutter bin locator
      args,
    });
    this.web = true;
    this.directory = projectDir;
    //

    this.on("app.webLaunchUrl", (e) => {
      this._webLaunchUrl = e.url;
    });
  }

  public async restart({ ...req }: Omit<AppRestartRequest, "appId">) {
    const payload: AppRestartRequest = {
      appId: this.appId,
      ...req,
    };

    return super.restart(payload);
  }

  public callServiceExtension() {
    throw new Error("Method not implemented.");
  }

  public detach() {}

  public stop() {
    const payload: AppStopRequest = {
      appId: this.appId,
    };
  }

  public resolve() {
    // awaits till the app is started
    return new Promise((resolve, reject) => {
      if (this.appId) {
        resolve(this.appId);
      } else {
        this.on("app.start", (event: AppStartEvent) => {
          this._appId = event.appId;
          resolve(this.appId);
        });
      }
    });
  }

  private _webLaunchUrl: string | null = null;
  async webLaunchUrl(): Promise<string> {
    if (this._webLaunchUrl) return this._webLaunchUrl;
    return new Promise((resolve, reject) => {
      this.on("app.webLaunchUrl", (event: AppWebLaunchUrlEvent) => {
        this._webLaunchUrl = event.url;
        resolve(event.url);
      });
    });
  }

  onStart({ appId }: AppStartEvent) {
    this._appId = appId;
  }

  onDebugPort() {}
  onStarted() {}
  onLog() {}
  onProgress() {}
  onStop() {}
}
