import { spawnSync } from "child_process";
import path from "path";

export class FlutterProject {
  readonly directory: string;
  constructor(cwd: string, readonly name: string) {
    // creates fresh flutter project
    spawnSync("flutter", ["create", name], {
      cwd: cwd,
    });

    this.directory = path.join(cwd, name);
  }

  static template() {}

  writeFile(path, contents) {}

  run() {}

  /**
   * this does not actually save the file, it only triggers hot reloading to linked flutter run command. (saving is already done by writeFile)
   */
  save() {}
}
