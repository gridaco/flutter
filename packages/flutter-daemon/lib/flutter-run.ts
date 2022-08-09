import { FlutterDaemon } from "./flutter-daemon";
import type { AppRestartRequest, AppStopRequest, AppStopEvent } from "./types";
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
  private _appId: string | null = null;
  get appId(): string | null {
    return this._appId;
  }

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
    super();
    const args = [];
    if (webServer) {
      args.push("-d", "web-server");
    }
    //
  }

  public restart({ ...req }: Omit<AppRestartRequest, "appId">) {
    const payload: AppRestartRequest = {
      appId: this.appId,
      ...req,
    };

    super.restart(payload);
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

  onStart(callback: (data: any) => void) {}
  onDebugPort(callback: (data: any) => void) {}
  onStarted(callback: (data: any) => void) {}
  onLog(callback: (data: any) => void) {}
  onProgress(callback: (data: any) => void) {}
  onStop(callback: (data: any) => void) {}
}
