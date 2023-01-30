import 'package:freezed_annotation/freezed_annotation.dart';
import 'ast_node.dart';

part 'enum.freezed.dart';
part 'enum.g.dart';

@freezed
abstract class DartEnum extends AstNode with _$DartEnum {
  const factory DartEnum({
    required int offset,
    required int end,
    required String name,
    required List<String> values,
  }) = _DartEnum;

  factory DartEnum.fromJson(Map<String, dynamic> json) =>
      _$DartEnumFromJson(json);
}
