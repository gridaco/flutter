import * as vscode from "vscode";
import path from "path";
import { Analyzer } from "@flutter-preview/analyzer";
import { FlutterDaemon } from "./daemon";
import {
  appurl,
  HotRestartAction,
  DaemonStartupLog,
  WebLaunchUrlAction,
  AppStopAction,
  VSCodeCommand,
} from "@flutter-preview/webview";
import { locatePubspec } from "pubspec";

const langs = ["dart"] as const;

const APP_HOST = "https://flutter-preview.webview.vscode.grida.co/app"; // "http://localhost:6632";

export class FlutterPreviewVSCode {
  readonly namespace: string;

  private get commandId() {
    return `${this.namespace}.showPreview`;
  }

  constructor({ namespace }: { namespace: string }) {
    this.namespace = namespace;
  }

  attatch(context: vscode.ExtensionContext) {
    let disposable_dart_preview = vscode.commands.registerCommand(
      this.commandId,
      cmd_dart_preview_handler
    );

    vscode.languages.registerCodeLensProvider(langs, {
      provideCodeLenses: async (document: vscode.TextDocument) => {
        const text = document.getText();
        const analyzer = new Analyzer(text);

        const components = await analyzer.widgets();
        const lenses = components
          .map((_class) => {
            return _class.constructors.map((_constructor) => {
              const args = [document, _class.id, _constructor.name];

              // TODO: support widgets with required arguments
              // at this moment, we don't support widgets with required arguments
              if (_constructor.analysis.requires_arguments) {
                return;
              }

              // factory constructors
              if (_constructor.name !== _class.name) {
                return;

                // TODO: disabling. the start positioning is inaccurate
                const start = document.positionAt(_constructor.start + 2);
                const lens = new vscode.CodeLens(
                  new vscode.Range(start, start),
                  {
                    command: this.commandId,
                    arguments: args,
                    title: `⚡️ Preview ${_class.name}.${_constructor.name}`,
                  }
                );
                return lens;
              }

              // default widget constructor
              if (_constructor.name === _class.name) {
                // for default widget constructor, provide lense at top of the class declaration, not the constructor.
                const start = document.positionAt(_class.start + 2);
                const lens = new vscode.CodeLens(
                  new vscode.Range(start, start),
                  {
                    command: this.commandId,
                    arguments: args,
                    title: `⚡️ Preview ${_class.name}`,
                  }
                );
                return lens;
              }
            });
          })
          .flat()
          .filter(Boolean);

        return lenses;
      },
    });

    context.subscriptions.push(disposable_dart_preview);
  }

  detach() {}
}

async function cmd_dart_preview_handler(
  document: vscode.TextDocument,
  widgetId: string,
  constructorId: string
) {
  const panel_title = `Preview: ${widgetId}`;

  const panel = vscode.window.createWebviewPanel(
    "flutter-preview", // Identifies the type of the webview. Used internally
    panel_title, // Title of the panel displayed to the user
    vscode.ViewColumn.Beside, // Editor column to show the new webview panel in.
    {
      // allow scripts
      enableScripts: true,
      // retain context when hidden
      retainContextWhenHidden: true,
    }
  );

  panel.webview.html = getWebviewContent({
    name: panel_title,
    iframe: appurl(null, APP_HOST),
  });

  const webviewctrl = {
    restart: async () => {
      // force reload
      panel.webview.postMessage({ type: "hot-restart" } as HotRestartAction);
    },
    webLaunchUrl: async (url: string) => {
      panel.webview.postMessage({
        type: "web-launch-url",
        url: url,
      } as WebLaunchUrlAction);
    },
    startupLog: (message: string) => {
      panel.webview.postMessage({
        type: "daemon-startup-log",
        message,
      } as DaemonStartupLog);
    },
    appStop: (error?: string) => {
      panel.webview.postMessage({
        type: "app.stop",
        error,
      } as AppStopAction);
    },
  };

  // run flutter daemon
  const daemon = FlutterDaemon.instance;

  // find nearest pubspec.yaml
  const filedir = path.dirname(document.fileName);
  const pubspec = locatePubspec(filedir);
  if (pubspec) {
    const { base_dir } = pubspec;

    const project = daemon.init(base_dir, {
      path: document.fileName, //path.relative(base_dir, ),
      identifier: widgetId,
      constructor: constructorId,
    });

    console.log("daemon project initiallized", { id: project.client.id });

    project.run();

    project.on("message", (payload) => {
      // if payload is not a json rpc message, it's a daemon log
      // use regex to check
      const trimmed = payload.trim();
      const lines = trimmed.split("\n");
      lines.forEach((line) => {
        if (line.startsWith("[") || line.endsWith("]")) {
          // this is a json rpc message. ignore.
        } else {
          console.log("daemon log", line);
          webviewctrl.startupLog(line);
        }
      });
    });

    project.on("app.log", (e: any) => {
      console.log("app.log", e);
    });

    project.on("app.stop", (e) => {
      vscode.window.showErrorMessage("Compile failed");
      webviewctrl.appStop(
        `Process with id ${e.appId} has stopped due to internal error (Dart Compiled failed)`
      );
    });
  } else {
    vscode.window.showErrorMessage("Cannot find pubspec.yaml");
    return;
  }

  // if save, trigger immediate save
  // if edit, use debounce
  const subscription__on_save = vscode.workspace.onDidSaveTextDocument(
    async (e) => {
      // const text = await document?.getText();
      // TODO: sync the content
      await daemon.restart();
      webviewctrl.restart();
    }
  );

  daemon.webLaunchUrl().then((url) => {
    // update webview when daemon url is ready
    console.info("webLaunchUrl ready", url);
    // webviewctrl.webLaunchUrl(url); // TODO: use this method
    panel.webview.html = getWebviewContent({
      name: panel_title,
      iframe: appurl(
        {
          webLaunchUrl: url,
        },
        APP_HOST
      ),
    });
  });

  panel.webview.onDidReceiveMessage((e: VSCodeCommand) => {
    console.log("vscode recieved message from app", e);

    switch (e.command) {
      case "vscode.env.openExternal": {
        const { target } = e;
        vscode.env.openExternal(vscode.Uri.parse(target));
        break;
      }
    }
  });

  // listen to panel close
  panel.onDidDispose(() => {
    subscription__on_save.dispose();
  });
}

function getWebviewContent({ name, iframe }: { iframe: string; name: string }) {
  return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://flutter-preview.webview.vscode.grida.co/app" />
		<title>${name}</title>
    <script>
    
      // Proxy the message event to the inner iframe
      window.addEventListener('message', event => {
        const message = event.data; // The JSON data our extension sent  
        // get app
        const app = document.getElementById('app');
        // send message to app
        app.contentWindow.postMessage(message, '*');
      });

      // Proxy the message event from the inner iframe to the parent window
      const app = document.getElementById('app');
      app.contentWindow.addEventListener('message', event => {
        const message = event.data; // The JSON data our extension sent
        // send message to parent
        // 1. if vscode command
        if (message.command){
          window.parent.postMessage(message, '*');
        }
        // 2. if load complete
        if (message.event === 'webview-ready'){
          window.parent.postMessage(message, '*');
        }
      });
    </script>
	</head>
	<body style="margin: 0; padding: 0; width: 100%; height: 100vh; overflow: hidden;">
    <iframe
      id="app"
      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      src="${iframe}"
      style="width: 100%; height: 100%; border: none;">
    </iframe>
	</body>
	</html>`;
}
