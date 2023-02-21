import 'package:flutter/material.dart';
import '.flutter_preview_artifacts/preview.dart';

void main() {
  runApp(const FlutterPreview());
}

class FlutterPreview extends StatelessWidget {
  const FlutterPreview({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        title: "{{title}}",
        theme: ThemeData(),
        home: Scaffold(
            body: PropertiesStateManager(
          initialProperties: FLUTTER_PREVIEW_TARGET_WIDGET_INITIAL_PROPERTIES,
          child: PropertiesMapper(),
        )));
  }
}
