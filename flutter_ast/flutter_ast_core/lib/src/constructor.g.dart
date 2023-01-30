// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'constructor.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartConstructor _$$_DartConstructorFromJson(Map<String, dynamic> json) =>
    _$_DartConstructor(
      offset: json['offset'] as int,
      end: json['end'] as int,
      name: json['name'] as String,
      properties: (json['properties'] as List<dynamic>?)
              ?.map((e) => e == null
                  ? null
                  : DartProperty.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
    );

Map<String, dynamic> _$$_DartConstructorToJson(_$_DartConstructor instance) =>
    <String, dynamic>{
      'offset': instance.offset,
      'end': instance.end,
      'name': instance.name,
      'properties': instance.properties,
    };
