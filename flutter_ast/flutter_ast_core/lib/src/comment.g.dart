// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'comment.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartComment _$$_DartCommentFromJson(Map<String, dynamic> json) =>
    _$_DartComment(
      lines:
          (json['lines'] as List<dynamic>?)?.map((e) => e as String).toList() ??
              const [],
    );

Map<String, dynamic> _$$_DartCommentToJson(_$_DartComment instance) =>
    <String, dynamic>{
      'lines': instance.lines,
    };
