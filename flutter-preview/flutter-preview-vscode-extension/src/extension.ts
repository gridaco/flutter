import * as vscode from "vscode";

import FlutterPreviewVSCode from "@vscode.grida.co/flutter-preview";

const { name } = require("../package.json");

const flutterpreview = new FlutterPreviewVSCode({
  namespace: name,
});

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  flutterpreview.attatch(context);
}

// This method is called when your extension is deactivated
export function deactivate() {
  flutterpreview.detach();
}
