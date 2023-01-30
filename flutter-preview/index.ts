import fs from "fs";

interface FlutterPreviewWidgetClass {
  /**
   * relative path to the widget file, e.g. './src/demo.dart'
   */
  path: string;

  /**
   * the widget class name, e.g. 'Demo'
   */
  identifier: string;

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

class FlutterPreviewProject {
  /**
   * the origin path of the project, where the pubspec.yaml file is located
   */
  origin: string;

  /**
   * the root path of the project, where the pubspec.yaml file is copied to
   */
  root: string;

  /**
   * the main entry file, e.g. './lib/main.dart'
   *
   * @default './lib/main.dart'
   */
  main: string;

  target: FlutterPreviewWidgetClass;

  constructor() {}

  /**
   * sync the project to the target widget using symlink
   */
  sync() {
    fs.symlinkSync(this.origin, this.root, "dir");
  }

  restart() {}
}
