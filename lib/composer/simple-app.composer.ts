import { MaterialApp, Scaffold } from "../material";
import { SingleChildScrollView, Widget } from "../widgets";


export function composeSimpleApplication(component: Widget | string): string {
    let componentSource: string
    if (component instanceof Widget) {
        componentSource = component.build().finalize()
    } else {
        componentSource = component;
    }

    const materialApp = new MaterialApp({
        title: 'app built with bridged.xyz',
        debugShowCheckedModeBanner: false,
        // showSemanticsDebugger: true,
        // showPerformanceOverlay: true,
        home: new Scaffold({
            body: new SingleChildScrollView(
                {
                    child: Widget.prebuilt(componentSource, { root: false })
                }
            )
        })
    });

    const MATERIAL_APP_SOURCE = materialApp.build().finalize()

    const APP = `
  import 'package:flutter/material.dart';
  
  void main() {
      runApp(App());
  }
  
  class App extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return ${MATERIAL_APP_SOURCE}
    }
  }
  `

    return APP
}
