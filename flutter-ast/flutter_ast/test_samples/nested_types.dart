//ignore_for_file: uri_does_not_exist,undefined_class,extends_non_class,undefined_named_parameter,undefined_method,undefined_identifier
import 'package:flutter/material.dart';

class SubData {
  late int index;
}

class Model {
  String name;
  SubData subData;

  Model(this.name, this.subData);
}

/// This is a doc comment
class MyScreen extends StatelessWidget {
  const MyScreen({
    Key key,
    required this.data,
  }) : super(key: key);

  final Model data;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      width: 20,
      child: Center(
        child: Builder((context) {
          return Text('Hello World');
        }),
      ),
    );
  }
}
