import * as vscode from "vscode";
import { Analyzer } from "./analyzer";

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

  // The code you place here will be executed every time your command is executed
  // Display a message box to the user
  vscode.window.showInformationMessage("Hello World from grida-flutter!");
  const panel = vscode.window.createWebviewPanel(
    "flutter-preview", // Identifies the type of the webview. Used internally
    panel_title, // Title of the panel displayed to the user
    vscode.ViewColumn.Beside, // Editor column to show the new webview panel in.
    {} // Webview options. More on these later.
  );

  const text = await document?.getText();

  panel.webview.html = getWebviewContent(text ?? "");
  panel.webview.onDidReceiveMessage((e) => {
    //
  });
}

function getWebviewContent(src: string) {
  return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<h1>hello world</h1>
		<p>${src}</p>
	</body>
	</html>`;
}

// This method is called when your extension is deactivated
export function deactivate() {}
