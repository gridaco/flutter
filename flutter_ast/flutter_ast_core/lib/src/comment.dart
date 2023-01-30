import 'package:freezed_annotation/freezed_annotation.dart';
import 'ast_node.dart';
part 'comment.freezed.dart';
part 'comment.g.dart';

@freezed
abstract class DartComment extends AstNode with _$DartComment {
  const factory DartComment({
    required int offset,
    required int end,
    @Default([]) List<String> lines,
  }) = _DartComment;

  factory DartComment.fromJson(Map<String, dynamic> json) =>
      _$DartCommentFromJson(json);
}

extension DartCommentUtils on DartComment {
  String get comment => this.lines.join('\n');
}
