// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'constructor.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartConstructor _$$_DartConstructorFromJson(Map<String, dynamic> json) =>
    _$_DartConstructor(
      name: json['name'] as String,
      properties: (json['properties'] as List<dynamic>?)
              ?.map((e) => DartProperty.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
    );

Map<String, dynamic> _$$_DartConstructorToJson(_$_DartConstructor instance) =>
    <String, dynamic>{
      'name': instance.name,
      'properties': instance.properties,
    };
