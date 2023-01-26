// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'method.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartMethod _$$_DartMethodFromJson(Map<String, dynamic> json) =>
    _$_DartMethod(
      name: json['name'] as String,
      parameters: (json['parameters'] as List<dynamic>?)
              ?.map((e) => DartProperty.fromJson(e as Map<String, dynamic>))
              .toList() ??
          const [],
      body: MethodNode.fromJson(json['body'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$$_DartMethodToJson(_$_DartMethod instance) =>
    <String, dynamic>{
      'name': instance.name,
      'parameters': instance.parameters,
      'body': instance.body,
    };

_$MethodBase _$$MethodBaseFromJson(Map<String, dynamic> json) => _$MethodBase(
      name: json['name'] as String,
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$MethodBaseToJson(_$MethodBase instance) =>
    <String, dynamic>{
      'name': instance.name,
      'runtimeType': instance.$type,
    };

_$MethodValues _$$MethodValuesFromJson(Map<String, dynamic> json) =>
    _$MethodValues(
      name: json['name'] as String,
      values: (json['values'] as List<dynamic>?)
          ?.map((e) => MethodNode.fromJson(e as Map<String, dynamic>))
          .toList(),
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$MethodValuesToJson(_$MethodValues instance) =>
    <String, dynamic>{
      'name': instance.name,
      'values': instance.values,
      'runtimeType': instance.$type,
    };

_$MethodBinary _$$MethodBinaryFromJson(Map<String, dynamic> json) =>
    _$MethodBinary(
      name: json['name'] as String,
      left: MethodNode.fromJson(json['left'] as Map<String, dynamic>),
      right: MethodNode.fromJson(json['right'] as Map<String, dynamic>),
      operation: json['operation'] as String,
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$MethodBinaryToJson(_$MethodBinary instance) =>
    <String, dynamic>{
      'name': instance.name,
      'left': instance.left,
      'right': instance.right,
      'operation': instance.operation,
      'runtimeType': instance.$type,
    };

_$MethodConstructor _$$MethodConstructorFromJson(Map<String, dynamic> json) =>
    _$MethodConstructor(
      name: json['name'] as String,
      value: json['value'] as String,
      arguments: (json['arguments'] as Map<String, dynamic>?)?.map(
            (k, e) =>
                MapEntry(k, MethodNode.fromJson(e as Map<String, dynamic>)),
          ) ??
          const {},
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$MethodConstructorToJson(_$MethodConstructor instance) =>
    <String, dynamic>{
      'name': instance.name,
      'value': instance.value,
      'arguments': instance.arguments,
      'runtimeType': instance.$type,
    };

_$MethodSimple _$$MethodSimpleFromJson(Map<String, dynamic> json) =>
    _$MethodSimple(
      name: json['name'] as String,
      value: json['value'],
      $type: json['runtimeType'] as String?,
    );

Map<String, dynamic> _$$MethodSimpleToJson(_$MethodSimple instance) =>
    <String, dynamic>{
      'name': instance.name,
      'value': instance.value,
      'runtimeType': instance.$type,
    };
