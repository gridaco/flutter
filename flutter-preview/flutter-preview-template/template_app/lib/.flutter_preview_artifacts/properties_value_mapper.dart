import 'dart:html' as html;
import 'package:flutter/widgets.dart';
import './properties_value.dart';
import './target_widget.dart';

class PropertiesMapper extends StatelessWidget {
  const PropertiesMapper({super.key});

  @override
  Widget build(BuildContext context) {
    // read the value of the "name" property from the parent state container
    final name = value<String>(context, "name");
    final radius = value<int>(context, "radius");
    final description = value<String>(context, "description");
    final enabled = value<bool>(context, "enabled");
    final color = value<Color>(context, "color");
    final alignment = value<CrossAxisAlignment>(context, "alignment");

    return Column(
      children: [
        Sample1Widget(
          name,
          radius: radius,
          description: description,
          enabled: enabled,
          color: color,
          alignment: alignment,
          onTap: GENERIC_CALLBACK_HANDLER,
        ),
      ],
    );
  }
}

Function() GENERIC_CALLBACK_HANDLER = ([dynamic args]) {
  // Send a event to the parent webapp when the widget is tapped
  // post message
  html.window.parent?.postMessage({
    "event": "@inapp/function-invocation-event",
    "name": 'onTap', // TODO:
    "args": args
  }, "*");
};
