// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'enum.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DartEnum _$DartEnumFromJson(Map<String, dynamic> json) {
  return _DartEnum.fromJson(json);
}

/// @nodoc
mixin _$DartEnum {
  String get name => throw _privateConstructorUsedError;
  List<String> get values => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DartEnumCopyWith<DartEnum> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DartEnumCopyWith<$Res> {
  factory $DartEnumCopyWith(DartEnum value, $Res Function(DartEnum) then) =
      _$DartEnumCopyWithImpl<$Res, DartEnum>;
  @useResult
  $Res call({String name, List<String> values});
}

/// @nodoc
class _$DartEnumCopyWithImpl<$Res, $Val extends DartEnum>
    implements $DartEnumCopyWith<$Res> {
  _$DartEnumCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? values = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      values: null == values
          ? _value.values
          : values // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_DartEnumCopyWith<$Res> implements $DartEnumCopyWith<$Res> {
  factory _$$_DartEnumCopyWith(
          _$_DartEnum value, $Res Function(_$_DartEnum) then) =
      __$$_DartEnumCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, List<String> values});
}

/// @nodoc
class __$$_DartEnumCopyWithImpl<$Res>
    extends _$DartEnumCopyWithImpl<$Res, _$_DartEnum>
    implements _$$_DartEnumCopyWith<$Res> {
  __$$_DartEnumCopyWithImpl(
      _$_DartEnum _value, $Res Function(_$_DartEnum) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? values = null,
  }) {
    return _then(_$_DartEnum(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      values: null == values
          ? _value._values
          : values // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DartEnum implements _DartEnum {
  const _$_DartEnum({required this.name, required final List<String> values})
      : _values = values;

  factory _$_DartEnum.fromJson(Map<String, dynamic> json) =>
      _$$_DartEnumFromJson(json);

  @override
  final String name;
  final List<String> _values;
  @override
  List<String> get values {
    if (_values is EqualUnmodifiableListView) return _values;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_values);
  }

  @override
  String toString() {
    return 'DartEnum(name: $name, values: $values)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DartEnum &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality().equals(other._values, _values));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, name, const DeepCollectionEquality().hash(_values));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DartEnumCopyWith<_$_DartEnum> get copyWith =>
      __$$_DartEnumCopyWithImpl<_$_DartEnum>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_DartEnumToJson(
      this,
    );
  }
}

abstract class _DartEnum implements DartEnum {
  const factory _DartEnum(
      {required final String name,
      required final List<String> values}) = _$_DartEnum;

  factory _DartEnum.fromJson(Map<String, dynamic> json) = _$_DartEnum.fromJson;

  @override
  String get name;
  @override
  List<String> get values;
  @override
  @JsonKey(ignore: true)
  _$$_DartEnumCopyWith<_$_DartEnum> get copyWith =>
      throw _privateConstructorUsedError;
}
