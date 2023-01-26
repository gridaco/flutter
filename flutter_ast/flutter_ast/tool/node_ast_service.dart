@JS()
library node_flutter_ast_service;

import 'package:flutter_ast/flutter_ast.dart';
// import 'package:flutter_ast_core/flutter_ast_core.dart';
import 'package:js/js.dart';
// import 'package:analyzer/error/error.dart';

// @JS()
// @anonymous
// class DartResult {
//   external factory DartResult({DartFile file, List<AnalysisError> errors});
//   external DartFile get file;
//   external List<AnalysisError> get errors;
// }

@JS('exports.parse')
external set parse(Function parse);

void main() {
  parse = allowInterop(parseSource);
  // parse = allowInterop((String source) {
  //   AnalysisError exception;
  //   try {
  //     final result = parseSource(source);
  //     return DartResult(file: result.file, errors: result.errors);
  //   } catch (err) {
  //     // Couldn't parse it as a compilation unit.
  //     exception = err;
  //   }

  //   // If we get here, it couldn't be parsed at all.
  //   return DartResult(file: null, errors: [exception]);
  // });
}
