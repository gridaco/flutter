@JS()
library node_flutter_ast_service;

import 'dart:js';
import 'package:flutter_ast/flutter_ast.dart';
import 'package:flutter_ast_core/flutter_ast_core.dart';
import 'package:js/js.dart';
import 'dart:convert';
import 'package:analyzer/error/error.dart';

@JS()
@anonymous
class Result {
  external factory Result({String? file, List<AnalysisError> errors});
  external String? get file;
  external List<AnalysisError> get errors;
}

@JS('exports.parse')
external set parse(Function parse);

void main() {
  parse = allowInterop((String source) {
    var encoder = new JsonEncoder.withIndent("  ");
    final result = parseSource(source);

    final List<AnalysisError> exceptions = [];
    try {
      final fileobj = encoder.convert(result.file.toJson());
      return Result(file: fileobj);
    } on AnalysisError catch (err) {
      // Couldn't parse it as a compilation unit.
      exceptions.add(err);
    }

    // If we get here, it couldn't be parsed at all.
    return Result(file: null, errors: exceptions);
  });
}
