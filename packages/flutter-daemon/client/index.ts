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
  //
  run() {}
  stop() {}
  restart() {}
  writeFile() {}
  save() {}
  onLog(cb: () => void) {}
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
