import { spawnSync } from "child_process";
import path from "path";
import fs from "fs";
import { FlutterRun } from "../flutter-run";

export class FlutterProject {
  readonly directory: string;
  private runner: FlutterRun;
  constructor(cwd: string, readonly id: string, readonly name?: string) {
    // creates fresh flutter project
    const nameorid = name || id;
    this.directory = path.join(cwd, id);

    spawnSync("flutter", ["create", nameorid], {
      cwd: cwd,
      stdio: "ignore",
    });

    // rename project dir to id
    fs.renameSync(path.join(cwd, nameorid), path.join(cwd, id));
  }

  static template() {}

  writeFile(file, contents) {
    fs.writeFileSync(path.join(this.directory, file), contents);
  }

  run() {
    this.runner = new FlutterRun({
      projectDir: this.directory,
      webServer: true,
    });
    return this.runner.resolve();
  }

  /**
   * this does not actually save the file, it only triggers hot reloading to linked flutter run command. (saving is already done by writeFile)
   */
  save() {
    setTimeout(() => {
      this.runner.restart({
        fullRestart: false,
        reason: "save",
      });
    }, 500);
  }

  restart() {
    return this.runner.restart({
      fullRestart: true,
      reason: "manual",
    });
  }

  stop() {
    return this.runner.stop();
  }
}
