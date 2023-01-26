// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'class.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartClass _$$_DartClassFromJson(Map<String, dynamic> json) => _$_DartClass(
      constructors: (json['constructors'] as List<dynamic>?)
              ?.map((e) => DartConstructor.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      comments: (json['comments'] as List<dynamic>?)
              ?.map((e) => DartComment.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      fields: (json['fields'] as List<dynamic>?)
              ?.map((e) => DartField.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      methods: (json['methods'] as List<dynamic>?)
              ?.map((e) => DartMethod.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      name: json['name'] as String,
      isAbstract: json['isAbstract'] as bool?,
      extendsClause: json['extendsClause'] as String?,
      implementsClause: json['implementsClause'] as String?,
      withClause: json['withClause'] as String?,
    );

Map<String, dynamic> _$$_DartClassToJson(_$_DartClass instance) =>
    <String, dynamic>{
      'constructors': instance.constructors,
      'comments': instance.comments,
      'fields': instance.fields,
      'methods': instance.methods,
      'name': instance.name,
      'isAbstract': instance.isAbstract,
      'extendsClause': instance.extendsClause,
      'implementsClause': instance.implementsClause,
      'withClause': instance.withClause,
    };
