// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'core.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartCore _$$_DartCoreFromJson(Map<String, dynamic> json) => _$_DartCore(
      type: json['type'] as String,
      value: json['value'] as String,
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$_DartCoreToJson(_$_DartCore instance) =>
    <String, dynamic>{
      'type': instance.type,
      'value': instance.value,
      'runtimeType': instance.$type,
    };

_$DartProperty _$$DartPropertyFromJson(Map<String, dynamic> json) =>
    _$DartProperty(
      name: json['name'] as String,
      key: json['key'] as String?,
      type: json['type'] as String,
      value: json['value'] == null
          ? null
          : DartCore.fromJson(json['value'] as Map<String, dynamic>),
      isOptional: json['isOptional'] as bool? ?? true,
      isNamed: json['isNamed'] as bool? ?? false,
      isPositional: json['isPositional'] as bool? ?? false,
      isRequired: json['isRequired'] as bool? ?? false,
      isRequiredPositional: json['isRequiredPositional'] as bool? ?? false,
      isSynthetic: json['isSynthetic'] as bool? ?? false,
      isRequiredNamed: json['isRequiredNamed'] as bool? ?? false,
      isOptionalNamed: json['isOptionalNamed'] as bool? ?? false,
      position: json['position'] as int?,
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$DartPropertyToJson(_$DartProperty instance) =>
    <String, dynamic>{
      'name': instance.name,
      'key': instance.key,
      'type': instance.type,
      'value': instance.value,
      'isOptional': instance.isOptional,
      'isNamed': instance.isNamed,
      'isPositional': instance.isPositional,
      'isRequired': instance.isRequired,
      'isRequiredPositional': instance.isRequiredPositional,
      'isSynthetic': instance.isSynthetic,
      'isRequiredNamed': instance.isRequiredNamed,
      'isOptionalNamed': instance.isOptionalNamed,
      'position': instance.position,
      'runtimeType': instance.$type,
    };

_$DartField _$$DartFieldFromJson(Map<String, dynamic> json) => _$DartField(
      name: json['name'] as String,
      type: json['type'] as String,
      value: json['value'] == null
          ? null
          : DartCore.fromJson(json['value'] as Map<String, dynamic>),
      isFinal: json['isFinal'] as bool? ?? false,
      isConst: json['isConst'] as bool? ?? false,
      isStatic: json['isStatic'] as bool? ?? false,
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$DartFieldToJson(_$DartField instance) =>
    <String, dynamic>{
      'name': instance.name,
      'type': instance.type,
      'value': instance.value,
      'isFinal': instance.isFinal,
      'isConst': instance.isConst,
      'isStatic': instance.isStatic,
      'runtimeType': instance.$type,
    };
