// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'constructor.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DartConstructor _$DartConstructorFromJson(Map<String, dynamic> json) {
  return _DartConstructor.fromJson(json);
}

/// @nodoc
mixin _$DartConstructor {
  String get name => throw _privateConstructorUsedError;
  List<DartProperty> get properties => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DartConstructorCopyWith<DartConstructor> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DartConstructorCopyWith<$Res> {
  factory $DartConstructorCopyWith(
          DartConstructor value, $Res Function(DartConstructor) then) =
      _$DartConstructorCopyWithImpl<$Res, DartConstructor>;
  @useResult
  $Res call({String name, List<DartProperty> properties});
}

/// @nodoc
class _$DartConstructorCopyWithImpl<$Res, $Val extends DartConstructor>
    implements $DartConstructorCopyWith<$Res> {
  _$DartConstructorCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? properties = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      properties: null == properties
          ? _value.properties
          : properties // ignore: cast_nullable_to_non_nullable
              as List<DartProperty>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_DartConstructorCopyWith<$Res>
    implements $DartConstructorCopyWith<$Res> {
  factory _$$_DartConstructorCopyWith(
          _$_DartConstructor value, $Res Function(_$_DartConstructor) then) =
      __$$_DartConstructorCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, List<DartProperty> properties});
}

/// @nodoc
class __$$_DartConstructorCopyWithImpl<$Res>
    extends _$DartConstructorCopyWithImpl<$Res, _$_DartConstructor>
    implements _$$_DartConstructorCopyWith<$Res> {
  __$$_DartConstructorCopyWithImpl(
      _$_DartConstructor _value, $Res Function(_$_DartConstructor) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? properties = null,
  }) {
    return _then(_$_DartConstructor(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      properties: null == properties
          ? _value._properties
          : properties // ignore: cast_nullable_to_non_nullable
              as List<DartProperty>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DartConstructor implements _DartConstructor {
  const _$_DartConstructor(
      {required this.name, final List<DartProperty> properties = const []})
      : _properties = properties;

  factory _$_DartConstructor.fromJson(Map<String, dynamic> json) =>
      _$$_DartConstructorFromJson(json);

  @override
  final String name;
  final List<DartProperty> _properties;
  @override
  @JsonKey()
  List<DartProperty> get properties {
    if (_properties is EqualUnmodifiableListView) return _properties;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_properties);
  }

  @override
  String toString() {
    return 'DartConstructor(name: $name, properties: $properties)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DartConstructor &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other._properties, _properties));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, name, const DeepCollectionEquality().hash(_properties));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DartConstructorCopyWith<_$_DartConstructor> get copyWith =>
      __$$_DartConstructorCopyWithImpl<_$_DartConstructor>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_DartConstructorToJson(
      this,
    );
  }
}

abstract class _DartConstructor implements DartConstructor {
  const factory _DartConstructor(
      {required final String name,
      final List<DartProperty> properties}) = _$_DartConstructor;

  factory _DartConstructor.fromJson(Map<String, dynamic> json) =
      _$_DartConstructor.fromJson;

  @override
  String get name;
  @override
  List<DartProperty> get properties;
  @override
  @JsonKey(ignore: true)
  _$$_DartConstructorCopyWith<_$_DartConstructor> get copyWith =>
      throw _privateConstructorUsedError;
}
