import Client, { FlutterProject } from "@flutter-daemon/client";
import { WebSocket } from "ws";

export function is_daemon_running(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    var ws = new WebSocket(url);
    ws.addEventListener("error", (e) => {
      if (e.target.readyState === 3) {
        resolve(false);
      }
    });
    ws.addEventListener("open", () => {
      resolve(true);
      ws.close();
    });
  });
}

const local_flutter_daemon_server_url = "ws://localhost:43070";

export class FlutterDaemon {
  private static _instance: FlutterDaemon;
  static get instance() {
    if (!FlutterDaemon._instance) {
      FlutterDaemon._instance = new FlutterDaemon();
    }
    return FlutterDaemon._instance;
  }
  static client: Client;
  static project: FlutterProject;
  constructor() {
    if (!FlutterDaemon.client) {
      FlutterDaemon.client = new Client(local_flutter_daemon_server_url);
    }
  }

  async initProject(main: string) {
    if (!FlutterDaemon.project) {
      FlutterDaemon.project = await FlutterDaemon.client.project(
        "preview",
        "preview",
        { "lib/main.dart": main }
      );
    }
    return FlutterDaemon.project;
  }

  async save(content: string) {
    await FlutterDaemon.project.writeFile("lib/main.dart", content, true);
  }

  async webLaunchUrl() {
    return await FlutterDaemon.project.webLaunchUrl();
  }
}
