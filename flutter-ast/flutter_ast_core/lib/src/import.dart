import 'dart:ffi';

import 'package:freezed_annotation/freezed_annotation.dart';
import 'ast_node.dart';

part 'import.freezed.dart';
part 'import.g.dart';

@freezed
abstract class DartImport extends AstNode with _$DartImport {
  const factory DartImport({
    required int offset,
    required int end,
    required String? uri,
    // required Bool deffered,

    /// The prefix used to import the library.
    /// the token following after the `as` keyword in `import 'package:foo/foo.dart' as foo;` - `foo`
    required String? prefix,
    required List<String>? show,
    required List<String>? hide,
  }) = _DartImport;

  factory DartImport.fromJson(Map<String, dynamic> json) =>
      _$DartImportFromJson(json);
}
