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
    this._created = true;
  }

  static template() {}

  private _created = false;
  private async created(): Promise<true> {
    if (this._created) {
      return true;
    }
    return new Promise((resolve, reject) => {
      if (this._created) return true;
      // check if project is created every 100ms
      const interval = setInterval(() => {
        if (fs.existsSync(this.directory)) {
          this._created = true;
          clearInterval(interval);
          resolve(true);
        }
      }, 100);
    });
  }

  async writeFile(file, contents) {
    await this.created();
    fs.writeFileSync(path.join(this.directory, file), contents);
  }

  async readFile(file) {
    await this.created();
    return fs.readFileSync(path.join(this.directory, file), "utf8");
  }

  async run() {
    this.runner = new FlutterRun({
      projectDir: this.directory,
      webServer: true,
    });
    return await this.runner.resolve();
  }

  /**
   * this does not actually save the file, it only triggers hot reloading to linked flutter run command. (saving is already done by writeFile)
   */
  async save() {
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

  on(type, cb) {
    this.runner.on(type, cb);
  }

  onEvent(cb: (type, event) => void) {
    this.runner.onEvent(cb);
  }
}
