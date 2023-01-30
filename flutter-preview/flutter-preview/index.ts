import fs from "fs-extra";
import glob from "glob";
import tmp from "tmp";
import path from "path";
import mustache from "mustache";
import ast from "flutter-ast";
import { FlutterProject, IFlutterRunnerClient } from "@flutter-daemon/server";

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
  imports: string[];

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

  get imports(): string[] {
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

  constructor({ path, identifier }: ITargetIdentifier) {
    this.path = path;
    this.identifier = identifier;
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

  client: FlutterProject;

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

  private main_override() {
    // read & analyze the main entry file
    const src = fs.readFileSync(this.main, "utf-8");
    const { imports } = ast.parse(src).file;

    const _seed_imports = new Set([
      // default imports
      "package:flutter/material.dart",
      ...imports,
    ]);

    // add the target node as import
    // make it relative to lib/main.dart -> e.g. './src/demo.dart'
    _seed_imports.add(
      path.relative(
        path.join(this.root, "./lib"),
        path.join(this.root, this.m_target.path)
      )
    );

    // get the template file content
    const main_dart_mustache = fs.readFileSync(
      path.join(__dirname, "templates/main.dart.mustache")
    );

    // render the template
    const main_dart_src = mustache.render(main_dart_mustache.toString(), {
      imports: Array.from(_seed_imports),
      title: "Preview - " + this.m_target.identifier,
      widget: this.m_target.identifier,
    });

    // write the file
    fs.writeFileSync(this.main, main_dart_src);
  }

  /**
   * the main entry file, e.g. './lib/main.dart'
   *
   * @default './lib/main.dart'
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
      path: path.isAbsolute(_.path) ? path.relative(origin, _.path) : _.path,
      identifier: _.identifier,
    });

    this.main_override();
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
  on(type: any, cb: any): void {
    return this.client.on(type, cb);
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

interface ITargetIdentifier {
  path: string;
  identifier: string;
}
