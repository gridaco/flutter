import fs from "fs-extra";
import glob from "glob";
import tmp from "tmp";
import path from "path";
import mustache from "mustache";
import ast, { DartImport } from "flutter-ast";
import {
  AppEventMap,
  FlutterProject,
  IFlutterRunnerClient,
} from "@flutter-daemon/server";
import * as templates from "./templates";

interface IFlutterPreviewWidgetClass {
  /**
   * relative path to the widget file, e.g. './src/demo.dart'
   */
  readonly path: string;

  /**
   * the widget class name, e.g. 'Demo'
   */
  readonly identifier: string;

  text: string;

  /**
   * the imported source files, e.g. ['package:flutter/material.dart']
   */
  imports: DartImport[];

  /**
   * the widget class start offset in the file
   */
  offset: number;

  /**
   * the widget class end offset in the file
   */
  end: number;
}

class FlutterPreviewWidgetClass implements IFlutterPreviewWidgetClass {
  // private _cached: IFlutterPreviewWidgetClass;

  get text() {
    const _text = fs.readFileSync(this.path, "utf-8");
    return _text;
  }

  path: string;
  identifier: string;
  constructorName: string;

  get imports(): DartImport[] {
    // TODO: add caching
    return ast.parse(this.text).file.imports;
  }

  get offset() {
    // TODO: add caching
    return ast
      .parse(this.text)
      .file.classes.find((c) => c.name === this.identifier).offset;
  }

  get end() {
    // TODO: add caching
    return ast
      .parse(this.text)
      .file.classes.find((c) => c.name === this.identifier).end;
  }

  get initializationName() {
    return initializationNameOf({
      class: this.identifier,
      constructor: this.constructorName,
    });
  }

  constructor({ path, identifier, constructor }: ITargetIdentifier) {
    this.path = path;
    this.identifier = identifier;
    this.constructorName = constructor;
  }

  static from(p: ITargetIdentifier) {
    return new FlutterPreviewWidgetClass(p);
  }
}

export class FlutterPreviewProject implements IFlutterRunnerClient {
  /**
   * the origin path of the project, where the pubspec.yaml file is located
   */
  readonly origin: string;

  /**
   * the root path of the project, where the pubspec.yaml file is copied to
   */
  readonly root: string;

  private m_target: FlutterPreviewWidgetClass;

  readonly client: FlutterProject;

  constructor({
    origin,
    target,
  }: {
    origin: string;
    target: ITargetIdentifier;
  }) {
    this.origin = origin;

    this.root = tmp.dirSync({
      keep: false,
      unsafeCleanup: true,
    }).name;

    // initially clone the files to new virtual project
    this.__initial_clone();

    // target the widget (modifies the lib/main.dart)
    this.target(target);

    this.client = FlutterProject.at(this.root);

    this.logstatus();
  }

  logstatus() {
    console.info({
      origin: this.origin,
      root: this.root,
      main: this.main,
      target: this.m_target,
    });
  }

  private __initial_clone() {
    // copy the files to the root (write files)
    this.initialCloneTargets.forEach((file) => {
      const origin = path.join(this.origin, file);
      const target = path.join(this.root, file);
      fs.copySync(origin, target);
    });
  }

  private abspath(p: string) {
    if (path.isAbsolute(p)) {
      return p;
    }
    return path.join(this.root, p);
  }

  private resolve_assets() {
    // if the pubspec.yaml file has assets, copy them to the root (in this case, we can use symlinks)
    // Learn more about the spec - https://docs.flutter.dev/development/tools/pubspec
    //
    // e.g.
    //
    // flutter:
    //    assets:
    //      - assets/<file>
    //    fonts:
    //      - family: NotoSans
    //        fonts:
    //          - asset: assets/fonts/NotoSans-Regular.ttf
    //  ....
  }

  /**
   * override the main.dart file since we cannot customize the entry file for the daemon proc
   */
  private override_main_dart() {
    // if - the target is inside the main.dart file, we need to copy the main.dart content to X, remove the `void main() {}`, re-import the X from the newly seeded main.dart file.
    // else - the target is elsewhere from the main.dart file (normal case)

    const src = fs.readFileSync(
      path.join(this.origin, "lib/main.dart"),
      "utf-8"
    );
    const { imports } = ast.parse(src).file;
    const _seed_imports = new Set([
      // default imports
      "package:flutter/material.dart",
      // TODO: add main imports later... (disabling it to test the speed of initial compilation)
      // ...imports,
    ]);

    if (this.abspath(this.m_target.path) === this.main) {
      // create new random file (valid dart file) on the same directory as the main.dart
      const _tmp =
        tmp.tmpNameSync({
          dir: path.dirname(this.main),
        }) + ".dart";

      // write the content of the main.dart to the tmp file
      // while copying the content, remove the `void main() {}` part
      const main_method = ast
        .parse(src)
        .file.methods.find((m) => m.name === "main");

      const { offset, end } = main_method;

      const newsrc = src.slice(0, offset) + src.slice(end);

      fs.writeFileSync(_tmp, newsrc);

      // add the copied main file as import
      // make it relative to lib/main.dart -> e.g. 'xxx_tmp_xxx.dart'
      _seed_imports.add(
        path.relative(path.join(this.root, "./lib"), path.join(_tmp))
      );
    } else {
      // read & analyze the main entry file

      // add the target node as import
      // make it relative to lib/main.dart -> e.g. './src/demo.dart'
      _seed_imports.add(
        path.relative(
          path.join(this.root, "./lib"),
          path.join(this.root, this.m_target.path)
        )
      );
    }

    // render the template
    const main_dart_src = mustache.render(templates.main_dart_mustache, {
      imports: Array.from(_seed_imports),
      title: "Preview - " + this.m_target.identifier,
      widget: this.m_target.initializationName,
    });

    // write the file
    fs.writeFileSync(this.main, main_dart_src);
  }

  /**
   * the main entry file, e.g. '~/root/lib/main.dart'
   *
   * @default path.join(this.root, './lib/main.dart')
   */
  get main(): string {
    return path.join(this.root, "./lib/main.dart");
  }

  get initialCloneTargets() {
    return [
      ...this.watchTargets,
      // web
      ...glob.sync("web/**/*", { cwd: this.origin }),
      // artifacts - .dart_tool
      ...glob.sync(".dart_tool/**/*", { cwd: this.origin }),
      // artifacts - build/web
      ...glob.sync("build/web/**/*", { cwd: this.origin }),
    ];
  }

  get watchTargets() {
    return [
      // pubspec.yaml
      ...glob.sync("pubspec.yaml", { cwd: this.origin }),
      // lib files
      ...glob.sync("lib/**/*", { cwd: this.origin }),
    ];
  }

  /**
   * sync the project to the target widget using symlink
   */
  sync() {
    console.log(this.watchTargets);

    // fs.symlinkSync(this.origin, this.root, "dir");
  }

  target(_: ITargetIdentifier) {
    this.m_target = FlutterPreviewWidgetClass.from({
      // if the path is absolute, then use make it relative to the origin
      path: path.isAbsolute(_.path)
        ? path.relative(this.origin, _.path)
        : _.path,
      ..._,
    });

    this.override_main_dart();
  }

  // #region IFlutterRunnerClient
  run(): Promise<unknown> {
    return this.client.run();
  }
  appId(): Promise<string> {
    return this.client.appId();
  }
  webLaunchUrl(): Promise<string> {
    return this.client.webLaunchUrl();
  }
  save(): Promise<unknown> {
    return this.client.save();
  }
  stop(): void {
    return this.client.stop();
  }
  on<K extends keyof AppEventMap>(
    type: K,
    callback: (e: AppEventMap[K]) => void
  ) {
    return this.client.on(type, callback);
  }
  onEvent(cb: (type: any, event: any) => void): void {
    return this.client.onEvent(cb);
  }
  kill(): void {
    return this.client.kill();
  }
  restart() {
    return this.client.restart();
  }
  // #endregion IFlutterRunnerClient
}

function initializationNameOf({
  class: _class,
  constructor: _constructor,
}: {
  class: string;
  constructor: string;
}) {
  if (_class === _constructor) {
    return _constructor;
  } else {
    return `${_class}.${_constructor}`;
  }
}

export interface ITargetIdentifier {
  path: string;
  identifier: string;
  constructor: string;
}
