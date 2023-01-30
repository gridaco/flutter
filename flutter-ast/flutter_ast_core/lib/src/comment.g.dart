// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'comment.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartComment _$$_DartCommentFromJson(Map<String, dynamic> json) =>
    _$_DartComment(
      offset: json['offset'] as int,
      end: json['end'] as int,
      lines:
          (json['lines'] as List<dynamic>?)?.map((e) => e as String).toList() ??
              const [],
    );

Map<String, dynamic> _$$_DartCommentToJson(_$_DartComment instance) =>
    <String, dynamic>{
      'offset': instance.offset,
      'end': instance.end,
      'lines': instance.lines,
    };
