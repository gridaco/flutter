import * as vscode from "vscode";
import { Analyzer } from "./analyzer";
import { is_daemon_running, FlutterDaemon } from "./daemon";
const langs = ["dart"] as const;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable_dart_preview = vscode.commands.registerCommand(
    "grida-flutter.showPreview",
    cmd_dart_preview_handler
  );

  vscode.languages.registerCodeLensProvider(langs, {
    provideCodeLenses: async (document: vscode.TextDocument) => {
      const analyzer = new Analyzer(document);

      const components = await analyzer.widgets();
      return components.map((c) => {
        const start = document.positionAt(c.start + 2);
        const lens = new vscode.CodeLens(new vscode.Range(start, start), {
          command: "grida-flutter.showPreview",
          arguments: [document, c.id],
          title: `⚡️ Preview ${c.name}`,
        });
        return lens;
      });
    },
  });

  context.subscriptions.push(disposable_dart_preview);
}

async function cmd_dart_preview_handler(
  document?: vscode.TextDocument,
  componentId?: string
) {
  const panel_title = `Preview: ${componentId}`;

  const service_ready = await is_daemon_running("ws://localhost:43070");

  if (service_ready) {
    vscode.window.showInformationMessage("Flutter daemon connected");
  } else {
    vscode.window.showErrorMessage("Flutter daemon is not running");
    return;
  }

  const panel = vscode.window.createWebviewPanel(
    "flutter-preview", // Identifies the type of the webview. Used internally
    panel_title, // Title of the panel displayed to the user
    vscode.ViewColumn.Beside, // Editor column to show the new webview panel in.
    {
      // allow scripts
      enableScripts: true,
    }
  );

  const text = await document?.getText();

  // run flutter daemon
  const daemon = FlutterDaemon.instance;
  await daemon.initProject(text ?? "");
  const url = await daemon.webLaunchUrl();

  // listen to document changes
  const changeSubscription = vscode.workspace.onDidChangeTextDocument(
    async (e) => {
      if (e.document.uri.toString() === document?.uri.toString()) {
        const text = await document?.getText();
        vscode.window.showInformationMessage("Saving changes to daemon");
        await daemon.save(text ?? "");

        // // force reload
        // panel.webview.html = getWebviewContent({
        //   name: panel_title,
        //   iframe: url,
        // });
      }
    }
  );

  panel.webview.html = getWebviewContent({
    name: panel_title,
    iframe: url,
  });
  panel.webview.onDidReceiveMessage((e) => {
    //
  });

  // listen to panel close
  panel.onDidDispose(() => {
    changeSubscription.dispose();
  });
}

function getWebviewContent({ name, iframe }: { iframe: string; name: string }) {
  return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${name}</title>
	</head>
	<body style="margin: 0; padding: 0; width: 100%; height: 100vh; overflow: hidden;">
    <iframe
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      src="${iframe}"
      style="width: 100%; height: 100%;">
    </iframe>
	</body>
	</html>`;
}

// This method is called when your extension is deactivated
export function deactivate() {}
