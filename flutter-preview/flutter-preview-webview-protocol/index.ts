export type Action = HotRestartAction | WebLaunchUrlAction;
export type ActionType = Action["type"];

export interface HotRestartAction {
  type: "hot-restart";
}

export interface WebLaunchUrlAction {
  type: "web-launch-url";
  url: string;
}

export function appurl(
  initial?: { webLaunchUrl?: string },
  baseurl = "https://flutter-preview.webview.vscode.grida.co"
) {
  const url = new URL(baseurl);

  if (initial?.webLaunchUrl) {
    url.searchParams.set("webLaunchUrl", initial.webLaunchUrl);
  }

  return url.toString();
}
