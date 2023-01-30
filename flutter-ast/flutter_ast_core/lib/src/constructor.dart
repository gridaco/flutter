import 'package:freezed_annotation/freezed_annotation.dart';
import 'ast_node.dart';
import 'core.dart';

part 'constructor.freezed.dart';
part 'constructor.g.dart';

@freezed
abstract class DartConstructor extends AstNode with _$DartConstructor {
  const factory DartConstructor({
    required int offset,
    required int end,
    required String name,
    @Default([]) List<DartProperty?> properties,
  }) = _DartConstructor;

  factory DartConstructor.fromJson(Map<String, dynamic> json) =>
      _$DartConstructorFromJson(json);
}
