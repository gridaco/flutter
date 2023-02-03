import {
  FlutterPreviewProject,
  ITargetIdentifier,
} from "@flutter-preview/core";

export class FlutterDaemon {
  private static _instance: FlutterDaemon;
  static get instance() {
    if (!FlutterDaemon._instance) {
      FlutterDaemon._instance = new FlutterDaemon();
    }
    return FlutterDaemon._instance;
  }
  static project: FlutterPreviewProject;

  constructor() {}

  init(path: string, target: ITargetIdentifier) {
    if (!FlutterDaemon.project) {
      FlutterDaemon.project = new FlutterPreviewProject({
        origin: path,
        target,
      });
    } else {
      if (FlutterDaemon.project.origin !== path) {
        throw new Error("Cannot change project path");
      }
      this.target(target);
    }

    return FlutterDaemon.project;
  }

  async target(_: ITargetIdentifier) {
    FlutterDaemon.project.target(_);
    this.restart();
  }

  async restart() {
    await FlutterDaemon.project.restart();
  }

  async webLaunchUrl() {
    return await FlutterDaemon.project.webLaunchUrl();
  }
}
