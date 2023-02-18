import 'package:flutter/material.dart';

enum WidgetVariant { loading, loaded, error }

class Data {
  final String name;
  final String description;

  Data(this.name, this.description);
}

class Sample1Widget extends StatelessWidget {
  final String name;
  final Function() onTap;
  final int radius;
  final String? description;
  final Color? color;
  final bool enabled;
  final CrossAxisAlignment alignment;
  final WidgetVariant variant;

  const Sample1Widget(
    this.name, {
    required this.onTap,
    required this.radius,
    this.description,
    this.color,
    this.enabled = false,
    this.alignment = CrossAxisAlignment.start,
    this.variant = WidgetVariant.loaded,
    Key? key,
  }) : super(key: key);

  String variantText() {
    switch (variant) {
      case WidgetVariant.loading:
        return "Loading...";
      case WidgetVariant.loaded:
        return "Loaded";
      case WidgetVariant.error:
        return "Error";
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: this.onTap,
        child: Opacity(
            opacity: enabled ? 1 : 0.5,
            child: Container(
              padding: EdgeInsets.all(20),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(this.radius.toDouble()),
                  color: this.color ?? Colors.blue),
              child: Column(crossAxisAlignment: this.alignment, children: [
                Text(
                  this.name,
                  style: TextStyle(fontSize: 21, color: Colors.white),
                ),
                SizedBox(height: 8),
                Text(
                  this.description ?? '',
                  style: TextStyle(fontSize: 14, color: Colors.white),
                ),
                Text(
                  this.variantText(),
                  style: TextStyle(fontSize: 14, color: Colors.white),
                ),
              ]),
            )));
  }
}
