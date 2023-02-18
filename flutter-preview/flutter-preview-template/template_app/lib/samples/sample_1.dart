import 'package:flutter/material.dart';

class Sample1Widget extends StatelessWidget {
  final String name;
  final Function() onTap;
  final int radius;
  final String? description;
  final Color? color;
  final bool enabled;
  final CrossAxisAlignment alignment;

  const Sample1Widget(
    this.name, {
    required this.onTap,
    required this.radius,
    this.description,
    this.color,
    this.enabled = false,
    this.alignment = CrossAxisAlignment.start,
    Key? key,
  }) : super(key: key);

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
              ]),
            )));
  }
}
