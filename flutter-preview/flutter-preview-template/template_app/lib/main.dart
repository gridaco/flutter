import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';
import 'package:flutter_preview_template/samples/sample_1.dart';
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
          child: PropertiesStateManager(
            initialProperties: {
              "name": "Flutter Preview",
            },
            child: PropertiesMapper(),
          ),
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

// Example widget that reads a single property from the parent state container
class ExampleWidget extends StatelessWidget {
  final String name;

  const ExampleWidget({required this.name, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Get the property value from the parent state container

    return Text(name);
  }
}

class PropertiesMapper extends StatelessWidget {
  const PropertiesMapper({super.key});

  @override
  Widget build(BuildContext context) {
    // read the value of the "name" property from the parent state container
    final name = PropertiesStateContainer.of(context)!.properties["name"];
    return Column(
      children: [
        ExampleWidget(name: name),
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
