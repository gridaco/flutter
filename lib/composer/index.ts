import * as Handlebars from "handlebars"
import { Widget } from "../widgets";


const APP_TEMPLATE = `
import 'package:flutter/material.dart';

void main() {
    runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '{{title}}',
      home: Home(),
    );
  }
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(child: Component()),
    );
  }
}

class Component extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return {{component-source}}
  }
}
`

const template = Handlebars.compile(APP_TEMPLATE)

export function composeSimpleApplication(component: Widget): string {
  const componentSource = component.build().finalize()
  const app = template({
    'title': 'example',
    'component-source': componentSource
  })

  return app
}