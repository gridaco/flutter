import fs from "fs-extra";
import glob from "glob";
import tmp from "tmp";
import path from "path";
import mustache from "mustache";
import ast from "flutter-ast";
import { FlutterProject } from "@flutter-daemon/server";

interface IFlutterPreviewWidgetClass {
  /**
   * relative path to the widget file, e.g. './src/demo.dart'
   */
  readonly path: string;

  /**
   * the widget class name, e.g. 'Demo'
   */
  readonly identifier: string;

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
  path: string;
  identifier: string;
  get imports(): string[] {
    // TODO:
    return [""];
  }
  get offset() {
    // TODO:
    return 0;
  }
  get end() {
    // TODO:
    return 0;
  }

  constructor({ path, identifier }: { path: string; identifier: string }) {
    this.path = path;
    this.identifier = identifier;
  }

  static from(p: { path: string; identifier: string }) {
    return new FlutterPreviewWidgetClass(p);
  }
}

export class FlutterPreviewProject {
  /**
   * the origin path of the project, where the pubspec.yaml file is located
   */
  readonly origin: string;

  /**
   * the root path of the project, where the pubspec.yaml file is copied to
   */
  readonly root: string;

  private target: FlutterPreviewWidgetClass;

  client: FlutterProject;

  constructor({
    origin,
    target,
  }: {
    origin: string;
    target: {
      path: string;
      identifier: string;
    };
  }) {
    this.origin = origin;

    this.root = tmp.dirSync({
      keep: false,
      unsafeCleanup: true,
    }).name;

    this.target = FlutterPreviewWidgetClass.from({
      // if the path is absolute, then use make it relative to the origin
      path: path.isAbsolute(target.path)
        ? path.relative(origin, target.path)
        : target.path,
      identifier: target.identifier,
    });

    this.__initial_clone();
    this.__initial_main_override();

    this.client = FlutterProject.at(this.root);

    this.logstatus();
  }

  logstatus() {
    console.info({
      origin: this.origin,
      root: this.root,
      main: this.main,
      target: this.target,
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

  private __initial_main_override() {
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
        path.join(this.root, this.target.path)
      )
    );

    // get the template file content
    const main_dart_mustache = fs.readFileSync(
      path.join(__dirname, "templates/main.dart.mustache")
    );

    // render the template
    const main_dart_src = mustache.render(main_dart_mustache.toString(), {
      imports: Array.from(_seed_imports),
      title: "Preview - " + this.target.identifier,
      widget: this.target.identifier,
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

  restart() {}
}
