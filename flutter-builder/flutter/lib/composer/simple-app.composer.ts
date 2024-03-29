import { MaterialApp, Scaffold } from "../material";
import { SingleChildScrollView, Widget } from "../widgets";

const BRANDING_COMMENT = `
/// awesome product built with grida.co at ${Date.now().toLocaleString()}
/// coyright - all yours!
/// 
///
///                  ██████╗ ██████╗ ██╗██████╗  █████╗         ██████╗ ██████╗ 
///                 ██╔════╝ ██╔══██╗██║██╔══██╗██╔══██╗       ██╔════╝██╔═══██╗
///                 ██║  ███╗██████╔╝██║██║  ██║███████║       ██║     ██║   ██║
///                 ██║   ██║██╔══██╗██║██║  ██║██╔══██║       ██║     ██║   ██║
///                 ╚██████╔╝██║  ██║██║██████╔╝██║  ██║  ██╗  ╚██████╗╚██████╔╝
///                  ╚═════╝ ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝  ╚═╝   ╚═════╝ ╚═════╝ 
/// 
///                                                                                     
`;

export function composeAppWithHome(
  home: Widget | string,
  options?: {
    withReplacements: Map<string, string>;
    custom_branding_content: string;
  }
) {
  if (home instanceof Widget) {
    home = home.build().finalize();
  }

  let APP = `import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';


void main() {
    runApp(App());
}

class App extends StatelessWidget {
@override
Widget build(BuildContext context) { return
${home}
}}

${options?.custom_branding_content || BRANDING_COMMENT}
`;

  if (options?.withReplacements) {
    APP = replaceSourceContent(APP, options!.withReplacements);
  }

  return APP;
}

export function composeAppWithComponent(
  component: Widget | string,
  options?: {
    withReplacements: Map<string, string>;
  }
): string {
  let componentSource: string;
  if (component instanceof Widget) {
    // console.log("start composeSimpleApplication .. from instance of Widget");
    componentSource = component.build().finalize();
  } else {
    // console.log("start composeSimpleApplication .. from Prebuilt Widget code");
    componentSource = component;
  }

  const materialApp = new MaterialApp({
    title: "app built with grida.co",
    debugShowCheckedModeBanner: false,
    // showSemanticsDebugger: true,
    // showPerformanceOverlay: true,
    home: new Scaffold({
      body: new SingleChildScrollView({
        child: Widget.prebuilt(componentSource, { root: false }),
      }),
    }),
  });

  let MATERIAL_APP_SOURCE = materialApp.build().finalize();

  if (options?.withReplacements) {
    MATERIAL_APP_SOURCE = replaceSourceContent(
      MATERIAL_APP_SOURCE,
      options.withReplacements
    );
  }
  return composeAppWithHome(MATERIAL_APP_SOURCE);
}

function replaceSourceContent(
  source: string,
  replacements: Map<string, string>
): string {
  for (const key of Object.keys(replacements)) {
    const newValue = replacements[key];
    source = source.split(key).join(newValue);
  }
  return source;
}
