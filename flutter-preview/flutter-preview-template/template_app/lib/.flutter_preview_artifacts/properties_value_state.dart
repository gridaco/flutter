import 'dart:html' as html;
import 'package:flutter/widgets.dart';

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
