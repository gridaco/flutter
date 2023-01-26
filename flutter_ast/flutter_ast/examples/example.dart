import 'package:flutter_ast/flutter_ast.dart';
import 'dart:io';
import 'dart:convert';

// read file from ./samples/sample.dart
final String source = File("../samples/sample.dart").readAsStringSync();

// main
void main(params) {
  final DartResult result = parseSource(source);
  var encoder = new JsonEncoder.withIndent("  ");
  print(encoder.convert(result.toJson()));
}
