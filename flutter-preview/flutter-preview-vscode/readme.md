# `@vscode.grida.co/flutter-preview`

## Usage

This is a package for Grida VSCode Extension and for `flutter-preview-vscode` extension as a development workspace.

```bash
yarn add @vscode.grida.co/flutter-preview
```

```ts
import FlutterPreviewExtension from "@vscode.grida.co/flutter-preview";

FlutterPreviewExtension.configure({
  // the namespace is a package identifier for the extension
  // depending to the host, you have to use different namespace
  // e.g. vscode.grida.co, flutter-preview-vscode.grida.co
  // will generate a command id like `vscode.grida.co:preview`
  namespace: "vscode.grida.co",
});

FlutterPreviewExtension.inject({
  context,
});
```

**Inside your VSCode Extension `package.json`...**

```json
{
  ...
  // optional
  "keywords": [
    ...
    "flutter",
    "design",
    "preview",
    "components"
  ],
  // required*
  "activationEvents": [
    ...
    "onLanguage:dart",
    "onStartupFinished"
  ],
  "contributes": {
    "commands": [
      ...
      // required*
      {
        "command": "<ns>.showPreview",
        "title": "Preview"
      }
    ],
    "menus": {
      ...
      "editor/title": [
        ...
        // required*
        {
          "when": "<ns>.componentsDetected",
          "command": "<ns>.showPreview",
          "group": "navigation"
        }
      ]
    }
  },
  ...
  "dependencies": {
    ...
    "@vscode.grida.co/flutter-preview": "0.0.0"
  }
}
```
