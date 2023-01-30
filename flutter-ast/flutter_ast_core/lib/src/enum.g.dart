// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'enum.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartEnum _$$_DartEnumFromJson(Map<String, dynamic> json) => _$_DartEnum(
      offset: json['offset'] as int,
      end: json['end'] as int,
      name: json['name'] as String,
      values:
          (json['values'] as List<dynamic>).map((e) => e as String).toList(),
    );

Map<String, dynamic> _$$_DartEnumToJson(_$_DartEnum instance) =>
    <String, dynamic>{
      'offset': instance.offset,
      'end': instance.end,
      'name': instance.name,
      'values': instance.values,
    };
