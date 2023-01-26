// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'file.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartFile _$$_DartFileFromJson(Map<String, dynamic> json) => _$_DartFile(
      path: json['path'] as String?,
      classes: (json['classes'] as List<dynamic>?)
              ?.map((e) => DartClass.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      enums: (json['enums'] as List<dynamic>?)
              ?.map((e) => DartEnum.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      fields: (json['fields'] as List<dynamic>?)
              ?.map((e) => DartField.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      imports: (json['imports'] as List<dynamic>?)
              ?.map((e) => e as String)
              .toList() ??
          const [],
      methods: (json['methods'] as List<dynamic>?)
              ?.map((e) => DartMethod.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
    );

Map<String, dynamic> _$$_DartFileToJson(_$_DartFile instance) =>
    <String, dynamic>{
      'path': instance.path,
      'classes': instance.classes,
      'enums': instance.enums,
      'fields': instance.fields,
      'imports': instance.imports,
      'methods': instance.methods,
    };
