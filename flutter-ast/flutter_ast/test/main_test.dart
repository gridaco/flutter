// main test script for testing sample dart files located under `test_samples` to match the expected output
// test dart fiels : <unit>.dart
// expected output: <unit>.out.json

import 'package:flutter_ast/flutter_ast.dart';
import 'dart:io';
import 'dart:convert';
import 'package:path/path.dart';
import 'package:test/test.dart';

// read file from <root>/test_samples/*.dart
final units = Directory("test_samples")
    .listSync()
    .where((element) =>
        element.path.endsWith(".dart") &&
        // filter out the units with `_` prefix
        !basename(element.path).startsWith("_"))
    .map((e) => e.path.split("/").last.split(".").first)
    .toList();

void main() {
  for (final unit in units) {
    test('test $unit', () {
      final String source = File("test_samples/$unit.dart").readAsStringSync();
      final DartResult result = parseSource(source);
      final String expected =
          File("test_samples/$unit.out.json").readAsStringSync();
      final String actual =
          JsonEncoder.withIndent("  ").convert(result.toJson());
      expect(actual, expected);
    });
  }
}
