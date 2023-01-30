import 'package:freezed_annotation/freezed_annotation.dart';
import 'ast_node.dart';
import 'core.dart';

part 'method.freezed.dart';
part 'method.g.dart';

@freezed
abstract class DartMethod extends AstNode with _$DartMethod {
  const factory DartMethod({
    required int offset,
    required int end,
    required String? name,
    @Default([]) List<DartProperty> parameters,
    required MethodNode? body,
  }) = _DartMethod;

  factory DartMethod.fromJson(Map<String, dynamic> json) =>
      _$DartMethodFromJson(json);
}

@freezed
abstract class MethodNode extends AstNode with _$MethodNode {
  const factory MethodNode({
    required int offset,
    required int end,
    required String name,
  }) = MethodBase;

  const factory MethodNode.values({
    required int offset,
    required int end,
    required String name,
    List<MethodNode>? values,
  }) = MethodValues;

  const factory MethodNode.binary({
    required int offset,
    required int end,
    required String name,
    required MethodNode? left,
    required MethodNode? right,
    required String operation,
  }) = MethodBinary;

  const factory MethodNode.constructor({
    required int offset,
    required int end,
    required String name,
    required String value,
    @Default({}) Map<String, MethodNode?> arguments,
  }) = MethodConstructor;

  const factory MethodNode.simple({
    required int offset,
    required int end,
    required String name,
    required dynamic value,
  }) = MethodSimple;

  factory MethodNode.fromJson(Map<String, dynamic> json) =>
      _$MethodNodeFromJson(json);
}
