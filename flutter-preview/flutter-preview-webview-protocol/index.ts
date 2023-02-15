export type VSCodeCommand = VSCodeOpenExternalCommand;
export type VSCodeNotification = NotifyVSCodeThatAppIsReady;
export type EventToInApp = NotifyPropertyChange;

export interface VSCodeOpenExternalCommand {
  command: "vscode.env.openExternal";
  target: string;
}

export interface NotifyVSCodeThatAppIsReady {
  event: "webview-ready";
}

export interface NotifyPropertyChange {
  event: "@inapp/property-change";
  key: string;
  value: any;
}

export type Action =
  | HotRestartAction
  | WebLaunchUrlAction
  | DaemonStartupLog
  | AppStopAction;

export type ActionType = Action["type"];

export interface HotRestartAction {
  type: "hot-restart";
}

export interface WebLaunchUrlAction {
  type: "web-launch-url";
  url: string;
}

export interface DaemonStartupLog {
  type: "daemon-startup-log";
  message: string;
}

export interface AppStopAction {
  type: "app.stop";
  error?: string;
}

export function appurl(
  initial?: { webLaunchUrl?: string } | null,
  baseurl = "https://flutter-preview.webview.vscode.grida.co/app"
) {
  const url = new URL(baseurl);

  if (initial?.webLaunchUrl) {
    url.searchParams.set("webLaunchUrl", initial.webLaunchUrl);
  }

  return url.toString();
}
