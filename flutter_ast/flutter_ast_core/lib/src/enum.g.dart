// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'enum.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartEnum _$$_DartEnumFromJson(Map<String, dynamic> json) => _$_DartEnum(
      name: json['name'] as String,
      values:
          (json['values'] as List<dynamic>).map((e) => e as String).toList(),
    );

Map<String, dynamic> _$$_DartEnumToJson(_$_DartEnum instance) =>
    <String, dynamic>{
      'name': instance.name,
      'values': instance.values,
    };
