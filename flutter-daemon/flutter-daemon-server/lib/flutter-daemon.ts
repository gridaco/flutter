import * as child_process from "child_process";
import * as stream from "stream";
import fs from "fs";
import {
  AppEvent,
  AppDebugPortEvent,
  AppLogEvent,
  AppProgressEvent,
  AppRestartRequest,
  AppStartedEvent,
  AppStartEvent,
  AppStopEvent,
  DaemonConnectedEvent,
  AppEventMap,
} from "./types";

export const isCI = !!process.env.CI;
export const isDartCodeTestRun = !!process.env.DART_CODE_IS_TEST_RUN;
export const isWin = process.platform.startsWith("win");
export const isMac = process.platform === "darwin";
export const isLinux = !isWin && !isMac;
export const isChromeOS = isLinux && fs.existsSync("/dev/.cros_milestone");

export type SpawnedProcess = child_process.ChildProcess & {
  stdin: stream.Writable;
  stdout: stream.Readable;
  stderr: stream.Readable;
};

export abstract class FlutterDaemon {
  proc?: SpawnedProcess;

  constructor(cwd: string, { bin, args }: { bin?: string; args: string[] }) {
    console.log("Starting Flutter Daemon...");
    this.proc = safeSpawn(cwd, bin || "flutter", args, {});
    this.proc.stdout.on("data", (payload) => {
      const events = parse_events(payload.toString());
      events.forEach((event) => {
        switch (event.event) {
          case "app.progress":
            this.onProgress(event.params as AppProgressEvent);
            break;
          case "app.webLaunchUrl":
            // this.onWebLaunchUrl(event.params as AppStartedEvent);
            break;
          case "app.start":
            this.onStart(event.params as AppStartEvent);
            break;
          case "app.started":
            this.onStarted(event.params as AppStartedEvent);
            break;
          case "daemon.connected":
          // this.onConnected(event.params as DaemonConnectedEvent);
        }
        console.info("o:", event);
      });
    });
  }

  protected getDevices() {
    this.command("device.getDevices", { id: 2 });
  }

  protected async restart({
    appId,
    fullRestart = false,
    reason,
    pause,
    debounce,
  }: AppRestartRequest) {
    this.command("app.restart", {
      appId,
      fullRestart,
      reason,
      pause,
      debounce,
    });
    return new Promise((resolve) => {
      this.on("app.progress", (e) => {
        if (e.finished) {
          resolve(e);
        }
      });
    });
  }

  version() {
    this.command("daemon.version", {});
  }

  protected command(method: string, args: object) {
    if (this.proc) {
      const payload = make_command_str({
        method: method,
        params: {
          ...args,
        },
        id: Math.random().toString(),
      });
      console.log(`Calling ${method}`, payload);
      this.proc.stdin.write(payload);
    }
  }

  abstract onStart(e: AppStartEvent);
  abstract onDebugPort(e: AppDebugPortEvent);
  abstract onStarted(e: AppStartedEvent);
  abstract onLog(e: AppLogEvent);
  abstract onProgress(e: AppProgressEvent);
  abstract onStop(e: AppStopEvent);

  on<K extends keyof AppEventMap>(
    event: K,
    callback: (e: AppEventMap[K]) => void
  ) {
    this.proc.stdout.on("data", (payload) => {
      const events = parse_events(payload.toString());
      events.forEach((e) => {
        if (e.event === event) {
          callback(e.params as AppEventMap[K]);
        }
      });
    });
  }

  onEvent(callback: (type, e: AppEvent) => void) {
    this.proc.stdout.on("data", (payload) => {
      const events = parse_events(payload.toString());
      events.forEach((e) => {
        callback(e.event, e.params);
      });
    });
  }

  public kill() {
    if (this.proc) {
      this.proc.kill();
    }
  }
}

function make_command_str(command: object) {
  return "[" + JSON.stringify(command) + "]\r\n";
}

function parse_events(str: string): {
  event: string;
  params?: AppEvent;
}[] {
  return str
    .split("\n")
    .map((l) => {
      l = l.trim();
      if (l.startsWith("[") && l.endsWith("]")) {
        return JSON.parse(l)[0];
      }
    })
    .filter((i) => "event" in (i || {}));
}

function safeSpawn(
  workingDirectory: string | undefined,
  binPath: string,
  args: string[],
  env: { [key: string]: string | undefined } | undefined
): SpawnedProcess {
  const quotedArgs = args.map(quoteAndEscapeArg);
  const customEnv = Object.assign({}, process.env, env);
  return child_process.spawn(binPath, quotedArgs, {
    cwd: workingDirectory,
    env: customEnv,
    shell: true,
  }) as SpawnedProcess;
}

function quoteAndEscapeArg(arg: string) {
  // Spawning processes on Windows with funny symbols in the path requires quoting. However if you quote an
  // executable with a space in its path and an argument also has a space, you have to then quote _all_ of the
  // arguments!
  // https://github.com/nodejs/node/issues/7367
  let escaped = arg.replace(/"/g, `\\"`);
  // Additionally, on Windows escape redirection symbols with ^ if they come
  // directly after quotes (?).
  // https://ss64.com/nt/syntax-esc.html
  if (isWin) escaped = escaped.replace(/"([<>])/g, '"^$1');
  return `"${escaped}"`;
}
