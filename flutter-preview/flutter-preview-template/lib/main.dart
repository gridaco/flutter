// ignore_for_file: uri_does_not_exist, expected_executable, invocation_of_non_function_expression, undefined_identifier
{{#imports}}
import '../{{{.}}}';
{{/imports}}
import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'dart:html' as html;


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
          body: Center(
        child: {
          {widget}
        }(),
      )),
    );
  }
}


class PropertiesMessageListener extends StatefulWidget {
  final Widget child;
  PropertiesMessageListener({
    Key? key,
    required this.child,
  }) : super(key: key);

  @override
  _PropertiesMessageListener createState() => _PropertiesMessageListener();
}

class _PropertiesMessageListener extends State<PropertiesMessageListener> {

  @override
  void initState() {
    html.window.addEventListener('message', listen, true);
    super.initState();
  }

  @override
  void dispose() {
    html.window.removeEventListener('message', listen, true);
    super.dispose();
  }

  void listen(html.Event event) {
    var data = (event as html.MessageEvent).data;
    setState(() {
      //...
    });
  }

  @override
  Widget build(BuildContext context) {
    return Provider(
      create: (BuildContext context) {
        return {};
      },
      child: widget.child,
    );
  }
}