import { Widget } from "../widgets";


export function composeSimpleApplication(component: Widget): string {
  const componentSource = component.build().finalize()

  const APP = `
  import 'package:flutter/material.dart';
  
  void main() {
      runApp(App());
  }
  
  class App extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
      return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'example',
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
      return ${componentSource}
    }
  }
  `

  return APP
}