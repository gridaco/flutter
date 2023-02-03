// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'import.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

_$_DartImport _$$_DartImportFromJson(Map<String, dynamic> json) =>
    _$_DartImport(
      offset: json['offset'] as int,
      end: json['end'] as int,
      uri: json['uri'] as String?,
      prefix: json['prefix'] as String?,
      show: (json['show'] as List<dynamic>?)?.map((e) => e as String).toList(),
      hide: (json['hide'] as List<dynamic>?)?.map((e) => e as String).toList(),
    );

Map<String, dynamic> _$$_DartImportToJson(_$_DartImport instance) =>
    <String, dynamic>{
      'offset': instance.offset,
      'end': instance.end,
      'uri': instance.uri,
      'prefix': instance.prefix,
      'show': instance.show,
      'hide': instance.hide,
    };
