// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'file.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DartFile _$DartFileFromJson(Map<String, dynamic> json) {
  return _DartFile.fromJson(json);
}

/// @nodoc
mixin _$DartFile {
  String? get path => throw _privateConstructorUsedError;
  List<DartClass> get classes => throw _privateConstructorUsedError;
  List<DartEnum> get enums => throw _privateConstructorUsedError;
  List<DartField> get fields => throw _privateConstructorUsedError;
  List<String> get imports => throw _privateConstructorUsedError;
  List<DartMethod> get methods => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DartFileCopyWith<DartFile> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DartFileCopyWith<$Res> {
  factory $DartFileCopyWith(DartFile value, $Res Function(DartFile) then) =
      _$DartFileCopyWithImpl<$Res, DartFile>;
  @useResult
  $Res call(
      {String? path,
      List<DartClass> classes,
      List<DartEnum> enums,
      List<DartField> fields,
      List<String> imports,
      List<DartMethod> methods});
}

/// @nodoc
class _$DartFileCopyWithImpl<$Res, $Val extends DartFile>
    implements $DartFileCopyWith<$Res> {
  _$DartFileCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? path = freezed,
    Object? classes = null,
    Object? enums = null,
    Object? fields = null,
    Object? imports = null,
    Object? methods = null,
  }) {
    return _then(_value.copyWith(
      path: freezed == path
          ? _value.path
          : path // ignore: cast_nullable_to_non_nullable
              as String?,
      classes: null == classes
          ? _value.classes
          : classes // ignore: cast_nullable_to_non_nullable
              as List<DartClass>,
      enums: null == enums
          ? _value.enums
          : enums // ignore: cast_nullable_to_non_nullable
              as List<DartEnum>,
      fields: null == fields
          ? _value.fields
          : fields // ignore: cast_nullable_to_non_nullable
              as List<DartField>,
      imports: null == imports
          ? _value.imports
          : imports // ignore: cast_nullable_to_non_nullable
              as List<String>,
      methods: null == methods
          ? _value.methods
          : methods // ignore: cast_nullable_to_non_nullable
              as List<DartMethod>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_DartFileCopyWith<$Res> implements $DartFileCopyWith<$Res> {
  factory _$$_DartFileCopyWith(
          _$_DartFile value, $Res Function(_$_DartFile) then) =
      __$$_DartFileCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String? path,
      List<DartClass> classes,
      List<DartEnum> enums,
      List<DartField> fields,
      List<String> imports,
      List<DartMethod> methods});
}

/// @nodoc
class __$$_DartFileCopyWithImpl<$Res>
    extends _$DartFileCopyWithImpl<$Res, _$_DartFile>
    implements _$$_DartFileCopyWith<$Res> {
  __$$_DartFileCopyWithImpl(
      _$_DartFile _value, $Res Function(_$_DartFile) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? path = freezed,
    Object? classes = null,
    Object? enums = null,
    Object? fields = null,
    Object? imports = null,
    Object? methods = null,
  }) {
    return _then(_$_DartFile(
      path: freezed == path
          ? _value.path
          : path // ignore: cast_nullable_to_non_nullable
              as String?,
      classes: null == classes
          ? _value._classes
          : classes // ignore: cast_nullable_to_non_nullable
              as List<DartClass>,
      enums: null == enums
          ? _value._enums
          : enums // ignore: cast_nullable_to_non_nullable
              as List<DartEnum>,
      fields: null == fields
          ? _value._fields
          : fields // ignore: cast_nullable_to_non_nullable
              as List<DartField>,
      imports: null == imports
          ? _value._imports
          : imports // ignore: cast_nullable_to_non_nullable
              as List<String>,
      methods: null == methods
          ? _value._methods
          : methods // ignore: cast_nullable_to_non_nullable
              as List<DartMethod>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DartFile implements _DartFile {
  const _$_DartFile(
      {this.path,
      final List<DartClass> classes = const [],
      final List<DartEnum> enums = const [],
      final List<DartField> fields = const [],
      final List<String> imports = const [],
      final List<DartMethod> methods = const []})
      : _classes = classes,
        _enums = enums,
        _fields = fields,
        _imports = imports,
        _methods = methods;

  factory _$_DartFile.fromJson(Map<String, dynamic> json) =>
      _$$_DartFileFromJson(json);

  @override
  final String? path;
  final List<DartClass> _classes;
  @override
  @JsonKey()
  List<DartClass> get classes {
    if (_classes is EqualUnmodifiableListView) return _classes;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_classes);
  }

  final List<DartEnum> _enums;
  @override
  @JsonKey()
  List<DartEnum> get enums {
    if (_enums is EqualUnmodifiableListView) return _enums;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_enums);
  }

  final List<DartField> _fields;
  @override
  @JsonKey()
  List<DartField> get fields {
    if (_fields is EqualUnmodifiableListView) return _fields;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_fields);
  }

  final List<String> _imports;
  @override
  @JsonKey()
  List<String> get imports {
    if (_imports is EqualUnmodifiableListView) return _imports;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_imports);
  }

  final List<DartMethod> _methods;
  @override
  @JsonKey()
  List<DartMethod> get methods {
    if (_methods is EqualUnmodifiableListView) return _methods;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_methods);
  }

  @override
  String toString() {
    return 'DartFile(path: $path, classes: $classes, enums: $enums, fields: $fields, imports: $imports, methods: $methods)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DartFile &&
            (identical(other.path, path) || other.path == path) &&
            const DeepCollectionEquality().equals(other._classes, _classes) &&
            const DeepCollectionEquality().equals(other._enums, _enums) &&
            const DeepCollectionEquality().equals(other._fields, _fields) &&
            const DeepCollectionEquality().equals(other._imports, _imports) &&
            const DeepCollectionEquality().equals(other._methods, _methods));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      path,
      const DeepCollectionEquality().hash(_classes),
      const DeepCollectionEquality().hash(_enums),
      const DeepCollectionEquality().hash(_fields),
      const DeepCollectionEquality().hash(_imports),
      const DeepCollectionEquality().hash(_methods));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DartFileCopyWith<_$_DartFile> get copyWith =>
      __$$_DartFileCopyWithImpl<_$_DartFile>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_DartFileToJson(
      this,
    );
  }
}

abstract class _DartFile implements DartFile {
  const factory _DartFile(
      {final String? path,
      final List<DartClass> classes,
      final List<DartEnum> enums,
      final List<DartField> fields,
      final List<String> imports,
      final List<DartMethod> methods}) = _$_DartFile;

  factory _DartFile.fromJson(Map<String, dynamic> json) = _$_DartFile.fromJson;

  @override
  String? get path;
  @override
  List<DartClass> get classes;
  @override
  List<DartEnum> get enums;
  @override
  List<DartField> get fields;
  @override
  List<String> get imports;
  @override
  List<DartMethod> get methods;
  @override
  @JsonKey(ignore: true)
  _$$_DartFileCopyWith<_$_DartFile> get copyWith =>
      throw _privateConstructorUsedError;
}
