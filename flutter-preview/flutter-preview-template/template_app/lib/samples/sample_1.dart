import 'package:flutter/material.dart';

class Sample1Widget extends StatelessWidget {
  final String name;
  const Sample1Widget(
    this.name, {
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      child: Text(this.name),
    );
  }
}
