import 'dart:ui';

import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_preview_template/samples/sample_1.dart';
import 'dart:html' as html;
import 'samples/sample_1.dart';

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
          initialProperties: {
            "name": "Flutter Preview",
            "radius": 10,
            "description":
                "Flutter Preview is a tool that allows you to preview your Flutter app in the browser.",
            "enabled": true,
            "color": new Color(0xFF000000)
          },
          child: PropertiesMapper(),
        )));
  }
}

// Define a state container widget that manages a map of properties
class PropertiesStateContainer extends InheritedWidget {
  final Map<String, dynamic> properties;

  const PropertiesStateContainer({
    required this.properties,
    required Widget child,
    Key? key,
  }) : super(key: key, child: child);

  // Define a static method to easily access the inherited widget from child widgets
  static PropertiesStateContainer? of(BuildContext context) {
    return context
        .dependOnInheritedWidgetOfExactType<PropertiesStateContainer>();
  }

  // We only need to rebuild this widget when the properties map changes
  @override
  bool updateShouldNotify(PropertiesStateContainer old) {
    return properties != old.properties;
  }
}

T value<T>(
  BuildContext context,
  String key,
) {
  final value = PropertiesStateContainer.of(context)!.properties[key];

  // number
  if (T == int) {
    if (value == null) {
      return 0 as T;
    }

    if (value is String) {
      return int.parse(value) as T;
    } else {
      return value as T;
    }
  }

  // boolean
  if (T == bool) {
    if (value == null) {
      return false as T;
    }

    if (value is bool) {
      return value as T;
    } else {
      // parse string to boolean
      if (value is String) {
        return value.parseBool() as T;
      }
      return value as T;
    }
  }

  // string
  if (T == String) {
    if (value == null) {
      return "" as T;
    }
    return value.toString() as T;
  }

  // color
  if (T == Color) {
    if (value is String) {
      return value.parseColor() as T;
    }
    return value as T;
  }

  // enum
  if (T == Enum) {}

  return value;
}

class PropertiesMapper extends StatelessWidget {
  const PropertiesMapper({super.key});

  @override
  Widget build(BuildContext context) {
    // read the value of the "name" property from the parent state container
    final name = value<String>(context, "name");
    final radius = value<int>(context, "radius");
    final description =
        PropertiesStateContainer.of(context)!.properties["description"];
    final enabled = value<bool>(context, "enabled");
    final color = value<Color>(context, "color");
    final alignment = value<CrossAxisAlignment>(context, "alignment");

    print("new property");
    print({
      "name": name,
      "radius": radius,
      "description": description,
      "enabled": enabled,
      "color": color,
    });

    return Column(
      children: [
        Sample1Widget(
          name,
          radius: radius,
          description: description,
          enabled: enabled,
          color: color,
          onTap: () => {
            // Send a event to the parent webapp when the widget is tapped
            // post message
            html.window.parent?.postMessage({
              "event": "@inapp/function-invocation-event",
              "name": 'onTap', // TODO:
              "args": []
            }, "*")
          },
        ),
      ],
    );
  }
}

// State manager widget that listens for property change events and updates the state container
class PropertiesStateManager extends StatefulWidget {
  final Map<String, dynamic> initialProperties;
  final Widget child;

  const PropertiesStateManager(
      {required this.child, required this.initialProperties, Key? key})
      : super(key: key);

  @override
  _PropertiesStateManagerState createState() => _PropertiesStateManagerState();
}

class _PropertiesStateManagerState extends State<PropertiesStateManager> {
  late Map<String, dynamic> _properties;

  @override
  void initState() {
    super.initState();
    _properties = widget.initialProperties;
  }

  // Define a method to update a property value
  void setProperty(String key, dynamic value) {
    setState(() {
      _properties = {..._properties, key: value};
    });
  }

  @override
  Widget build(BuildContext context) {
    // Provide the properties map to child widgets using the state container
    return PropertiesStateContainer(
        properties: _properties, child: widget.child);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();

    // Listen for property change events from the parent webapp
    html.window.onMessage.listen((event) {
      final dynamic data = event.data;
      if (data["event"] == "@inapp/property-change") {
        final key = data["key"];
        final value = data["value"];
        setProperty(key, value);
      }
    });
  }
}

// EXTENSIONS
extension StringConversions on String {
  bool parseBool() {
    return this.toLowerCase() == 'true';
  }

  Color parseColor() {
    // if string starts with #, remove it
    if (this.startsWith("#")) {
      return Color(int.parse(this.substring(1, 7), radix: 16) + 0xFF000000);
    } else {
      return Color(int.parse(this, radix: 16) + 0xFF000000);
    }
  }
}
