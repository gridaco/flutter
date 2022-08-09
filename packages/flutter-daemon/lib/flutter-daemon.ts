import * as child_process from "child_process";
import * as stream from "stream";
import fs from "fs";
import { AppRestartRequest } from "./types";

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

  constructor() {
    console.log("Starting Flutter Daemon...");
    this.proc = safeSpawn(process.cwd(), "flutter", ["daemon"], {});

    this.proc.stdout.on("data", (data) => {
      console.log(data.toString());
    });
  }

  protected getDevices() {
    this.command("device.getDevices", { id: 2 });
  }

  protected restart({
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
  }

  version() {
    this.command("daemon.version", {});
  }

  protected command(method: string, args: object) {
    if (this.proc) {
      this.proc.stdin.write(
        make_command_str({
          method: method,
          ...args,
          id: Math.random().toString(),
        })
      );
    }
  }
}

function make_command_str(command: object) {
  return "[" + JSON.stringify(command) + "]\r\n";
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
