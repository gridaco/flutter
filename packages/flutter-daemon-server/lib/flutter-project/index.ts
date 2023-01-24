import { spawnSync } from "child_process";
import path from "path";
import fs from "fs";
import { FlutterRun } from "../flutter-run";
import { validateFlutterProject } from "../utils/validate-flutter-project-dir";

export class FlutterProject {
  private runner: FlutterRun;
  constructor(
    readonly root: string,
    readonly id: string,
    readonly name?: string
  ) {}

  /**
   * @deprecated
   */
  static template() {
    throw new Error("not implemented");
  }

  /**
   * Use the local filesystem to link to an existing flutter project
   * @param path path to existing flutter project on local filesystem
   */
  static from(path: string): FlutterProject {
    const validation = validateFlutterProject(path);
    if (!validation) {
      throw new Error(validation.error.join(", "));
    }

    const { name } = validation;

    return new FlutterProject(
      path,
      // set path as id
      path,
      name
    );
  }

  /**
   * Create a new (or use existing) temporary virtualized flutter project at tempdir
   */
  static async new({
    cwd,
    id,
    name,
    options,
  }: {
    cwd: string;
    id: string;
    name?: string;
    options?: {
      useExisting?: boolean;
      overwrites: { [path: string]: string };
    };
  }): Promise<FlutterProject> {
    // creates fresh flutter project
    const nameorid = name || id;

    const projectPath = path.join(cwd, id);

    if (options?.useExisting) {
      if (validateFlutterProject(projectPath).valid) {
        return;
      }
    }

    spawnSync("flutter", ["create", nameorid], {
      cwd: cwd,
      stdio: "ignore",
    });

    // rename project dir to id
    await fs.promises.rename(path.join(cwd, nameorid), path.join(cwd, id));

    if (options?.overwrites) {
      for (const [file, content] of Object.entries(options.overwrites)) {
        fs.promises.writeFile(path.join(projectPath, file), content);
      }
    }

    return new FlutterProject(projectPath, id, name);
  }

  async writeFile(file, contents) {
    await fs.promises.writeFile(path.join(this.root, file), contents);
  }

  async readFile(file) {
    return fs.readFileSync(path.join(this.root, file), "utf8");
  }

  async run() {
    this.runner = new FlutterRun({
      projectDir: this.root,
      webServer: true,
    });
    return await this.runner.resolve();
  }

  async appId(): Promise<string> {
    await this.runner.resolve();
    return this.runner.appId;
  }

  async webLaunchUrl() {
    return await this.runner.webLaunchUrl();
  }

  /**
   * this does not actually save the file, it only triggers hot reloading to linked flutter run command. (saving is already done by writeFile)
   */
  async save() {
    await this.runner.restart({
      fullRestart: false,
      reason: "save",
    });
  }

  async restart() {
    return await this.runner.restart({
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

  kill() {
    return this.runner.kill();
  }
}
