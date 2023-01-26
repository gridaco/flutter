// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'method.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DartMethod _$DartMethodFromJson(Map<String, dynamic> json) {
  return _DartMethod.fromJson(json);
}

/// @nodoc
mixin _$DartMethod {
  String get name => throw _privateConstructorUsedError;
  List<DartProperty> get parameters => throw _privateConstructorUsedError;
  MethodNode get body => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DartMethodCopyWith<DartMethod> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DartMethodCopyWith<$Res> {
  factory $DartMethodCopyWith(
          DartMethod value, $Res Function(DartMethod) then) =
      _$DartMethodCopyWithImpl<$Res, DartMethod>;
  @useResult
  $Res call({String name, List<DartProperty> parameters, MethodNode body});

  $MethodNodeCopyWith<$Res> get body;
}

/// @nodoc
class _$DartMethodCopyWithImpl<$Res, $Val extends DartMethod>
    implements $DartMethodCopyWith<$Res> {
  _$DartMethodCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? parameters = null,
    Object? body = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      parameters: null == parameters
          ? _value.parameters
          : parameters // ignore: cast_nullable_to_non_nullable
              as List<DartProperty>,
      body: null == body
          ? _value.body
          : body // ignore: cast_nullable_to_non_nullable
              as MethodNode,
    ) as $Val);
  }

  @override
  @pragma('vm:prefer-inline')
  $MethodNodeCopyWith<$Res> get body {
    return $MethodNodeCopyWith<$Res>(_value.body, (value) {
      return _then(_value.copyWith(body: value) as $Val);
    });
  }
}

/// @nodoc
abstract class _$$_DartMethodCopyWith<$Res>
    implements $DartMethodCopyWith<$Res> {
  factory _$$_DartMethodCopyWith(
          _$_DartMethod value, $Res Function(_$_DartMethod) then) =
      __$$_DartMethodCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, List<DartProperty> parameters, MethodNode body});

  @override
  $MethodNodeCopyWith<$Res> get body;
}

/// @nodoc
class __$$_DartMethodCopyWithImpl<$Res>
    extends _$DartMethodCopyWithImpl<$Res, _$_DartMethod>
    implements _$$_DartMethodCopyWith<$Res> {
  __$$_DartMethodCopyWithImpl(
      _$_DartMethod _value, $Res Function(_$_DartMethod) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? parameters = null,
    Object? body = null,
  }) {
    return _then(_$_DartMethod(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      parameters: null == parameters
          ? _value._parameters
          : parameters // ignore: cast_nullable_to_non_nullable
              as List<DartProperty>,
      body: null == body
          ? _value.body
          : body // ignore: cast_nullable_to_non_nullable
              as MethodNode,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DartMethod implements _DartMethod {
  const _$_DartMethod(
      {required this.name,
      final List<DartProperty> parameters = const [],
      required this.body})
      : _parameters = parameters;

  factory _$_DartMethod.fromJson(Map<String, dynamic> json) =>
      _$$_DartMethodFromJson(json);

  @override
  final String name;
  final List<DartProperty> _parameters;
  @override
  @JsonKey()
  List<DartProperty> get parameters {
    if (_parameters is EqualUnmodifiableListView) return _parameters;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_parameters);
  }

  @override
  final MethodNode body;

  @override
  String toString() {
    return 'DartMethod(name: $name, parameters: $parameters, body: $body)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DartMethod &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality()
                .equals(other._parameters, _parameters) &&
            (identical(other.body, body) || other.body == body));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name,
      const DeepCollectionEquality().hash(_parameters), body);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DartMethodCopyWith<_$_DartMethod> get copyWith =>
      __$$_DartMethodCopyWithImpl<_$_DartMethod>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_DartMethodToJson(
      this,
    );
  }
}

abstract class _DartMethod implements DartMethod {
  const factory _DartMethod(
      {required final String name,
      final List<DartProperty> parameters,
      required final MethodNode body}) = _$_DartMethod;

  factory _DartMethod.fromJson(Map<String, dynamic> json) =
      _$_DartMethod.fromJson;

  @override
  String get name;
  @override
  List<DartProperty> get parameters;
  @override
  MethodNode get body;
  @override
  @JsonKey(ignore: true)
  _$$_DartMethodCopyWith<_$_DartMethod> get copyWith =>
      throw _privateConstructorUsedError;
}

MethodNode _$MethodNodeFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'default':
      return MethodBase.fromJson(json);
    case 'values':
      return MethodValues.fromJson(json);
    case 'binary':
      return MethodBinary.fromJson(json);
    case 'constructor':
      return MethodConstructor.fromJson(json);
    case 'simple':
      return MethodSimple.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'MethodNode',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$MethodNode {
  String get name => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String name) $default, {
    required TResult Function(String name, List<MethodNode>? values) values,
    required TResult Function(
            String name, MethodNode left, MethodNode right, String operation)
        binary,
    required TResult Function(
            String name, String value, Map<String, MethodNode> arguments)
        constructor,
    required TResult Function(String name, dynamic value) simple,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String name)? $default, {
    TResult? Function(String name, List<MethodNode>? values)? values,
    TResult? Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult? Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult? Function(String name, dynamic value)? simple,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String name)? $default, {
    TResult Function(String name, List<MethodNode>? values)? values,
    TResult Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult Function(String name, dynamic value)? simple,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(MethodBase value) $default, {
    required TResult Function(MethodValues value) values,
    required TResult Function(MethodBinary value) binary,
    required TResult Function(MethodConstructor value) constructor,
    required TResult Function(MethodSimple value) simple,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(MethodBase value)? $default, {
    TResult? Function(MethodValues value)? values,
    TResult? Function(MethodBinary value)? binary,
    TResult? Function(MethodConstructor value)? constructor,
    TResult? Function(MethodSimple value)? simple,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(MethodBase value)? $default, {
    TResult Function(MethodValues value)? values,
    TResult Function(MethodBinary value)? binary,
    TResult Function(MethodConstructor value)? constructor,
    TResult Function(MethodSimple value)? simple,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $MethodNodeCopyWith<MethodNode> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $MethodNodeCopyWith<$Res> {
  factory $MethodNodeCopyWith(
          MethodNode value, $Res Function(MethodNode) then) =
      _$MethodNodeCopyWithImpl<$Res, MethodNode>;
  @useResult
  $Res call({String name});
}

/// @nodoc
class _$MethodNodeCopyWithImpl<$Res, $Val extends MethodNode>
    implements $MethodNodeCopyWith<$Res> {
  _$MethodNodeCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_value.copyWith(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$MethodBaseCopyWith<$Res>
    implements $MethodNodeCopyWith<$Res> {
  factory _$$MethodBaseCopyWith(
          _$MethodBase value, $Res Function(_$MethodBase) then) =
      __$$MethodBaseCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name});
}

/// @nodoc
class __$$MethodBaseCopyWithImpl<$Res>
    extends _$MethodNodeCopyWithImpl<$Res, _$MethodBase>
    implements _$$MethodBaseCopyWith<$Res> {
  __$$MethodBaseCopyWithImpl(
      _$MethodBase _value, $Res Function(_$MethodBase) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
  }) {
    return _then(_$MethodBase(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$MethodBase implements MethodBase {
  const _$MethodBase({required this.name, final String? $type})
      : $type = $type ?? 'default';

  factory _$MethodBase.fromJson(Map<String, dynamic> json) =>
      _$$MethodBaseFromJson(json);

  @override
  final String name;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'MethodNode(name: $name)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$MethodBase &&
            (identical(other.name, name) || other.name == name));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$MethodBaseCopyWith<_$MethodBase> get copyWith =>
      __$$MethodBaseCopyWithImpl<_$MethodBase>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String name) $default, {
    required TResult Function(String name, List<MethodNode>? values) values,
    required TResult Function(
            String name, MethodNode left, MethodNode right, String operation)
        binary,
    required TResult Function(
            String name, String value, Map<String, MethodNode> arguments)
        constructor,
    required TResult Function(String name, dynamic value) simple,
  }) {
    return $default(name);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String name)? $default, {
    TResult? Function(String name, List<MethodNode>? values)? values,
    TResult? Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult? Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult? Function(String name, dynamic value)? simple,
  }) {
    return $default?.call(name);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String name)? $default, {
    TResult Function(String name, List<MethodNode>? values)? values,
    TResult Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult Function(String name, dynamic value)? simple,
    required TResult orElse(),
  }) {
    if ($default != null) {
      return $default(name);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(MethodBase value) $default, {
    required TResult Function(MethodValues value) values,
    required TResult Function(MethodBinary value) binary,
    required TResult Function(MethodConstructor value) constructor,
    required TResult Function(MethodSimple value) simple,
  }) {
    return $default(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(MethodBase value)? $default, {
    TResult? Function(MethodValues value)? values,
    TResult? Function(MethodBinary value)? binary,
    TResult? Function(MethodConstructor value)? constructor,
    TResult? Function(MethodSimple value)? simple,
  }) {
    return $default?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(MethodBase value)? $default, {
    TResult Function(MethodValues value)? values,
    TResult Function(MethodBinary value)? binary,
    TResult Function(MethodConstructor value)? constructor,
    TResult Function(MethodSimple value)? simple,
    required TResult orElse(),
  }) {
    if ($default != null) {
      return $default(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$MethodBaseToJson(
      this,
    );
  }
}

abstract class MethodBase implements MethodNode {
  const factory MethodBase({required final String name}) = _$MethodBase;

  factory MethodBase.fromJson(Map<String, dynamic> json) =
      _$MethodBase.fromJson;

  @override
  String get name;
  @override
  @JsonKey(ignore: true)
  _$$MethodBaseCopyWith<_$MethodBase> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$MethodValuesCopyWith<$Res>
    implements $MethodNodeCopyWith<$Res> {
  factory _$$MethodValuesCopyWith(
          _$MethodValues value, $Res Function(_$MethodValues) then) =
      __$$MethodValuesCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, List<MethodNode>? values});
}

/// @nodoc
class __$$MethodValuesCopyWithImpl<$Res>
    extends _$MethodNodeCopyWithImpl<$Res, _$MethodValues>
    implements _$$MethodValuesCopyWith<$Res> {
  __$$MethodValuesCopyWithImpl(
      _$MethodValues _value, $Res Function(_$MethodValues) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? values = freezed,
  }) {
    return _then(_$MethodValues(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      values: freezed == values
          ? _value._values
          : values // ignore: cast_nullable_to_non_nullable
              as List<MethodNode>?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$MethodValues implements MethodValues {
  const _$MethodValues(
      {required this.name, final List<MethodNode>? values, final String? $type})
      : _values = values,
        $type = $type ?? 'values';

  factory _$MethodValues.fromJson(Map<String, dynamic> json) =>
      _$$MethodValuesFromJson(json);

  @override
  final String name;
  final List<MethodNode>? _values;
  @override
  List<MethodNode>? get values {
    final value = _values;
    if (value == null) return null;
    if (_values is EqualUnmodifiableListView) return _values;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(value);
  }

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'MethodNode.values(name: $name, values: $values)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$MethodValues &&
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
  _$$MethodValuesCopyWith<_$MethodValues> get copyWith =>
      __$$MethodValuesCopyWithImpl<_$MethodValues>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String name) $default, {
    required TResult Function(String name, List<MethodNode>? values) values,
    required TResult Function(
            String name, MethodNode left, MethodNode right, String operation)
        binary,
    required TResult Function(
            String name, String value, Map<String, MethodNode> arguments)
        constructor,
    required TResult Function(String name, dynamic value) simple,
  }) {
    return values(name, this.values);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String name)? $default, {
    TResult? Function(String name, List<MethodNode>? values)? values,
    TResult? Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult? Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult? Function(String name, dynamic value)? simple,
  }) {
    return values?.call(name, this.values);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String name)? $default, {
    TResult Function(String name, List<MethodNode>? values)? values,
    TResult Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult Function(String name, dynamic value)? simple,
    required TResult orElse(),
  }) {
    if (values != null) {
      return values(name, this.values);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(MethodBase value) $default, {
    required TResult Function(MethodValues value) values,
    required TResult Function(MethodBinary value) binary,
    required TResult Function(MethodConstructor value) constructor,
    required TResult Function(MethodSimple value) simple,
  }) {
    return values(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(MethodBase value)? $default, {
    TResult? Function(MethodValues value)? values,
    TResult? Function(MethodBinary value)? binary,
    TResult? Function(MethodConstructor value)? constructor,
    TResult? Function(MethodSimple value)? simple,
  }) {
    return values?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(MethodBase value)? $default, {
    TResult Function(MethodValues value)? values,
    TResult Function(MethodBinary value)? binary,
    TResult Function(MethodConstructor value)? constructor,
    TResult Function(MethodSimple value)? simple,
    required TResult orElse(),
  }) {
    if (values != null) {
      return values(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$MethodValuesToJson(
      this,
    );
  }
}

abstract class MethodValues implements MethodNode {
  const factory MethodValues(
      {required final String name,
      final List<MethodNode>? values}) = _$MethodValues;

  factory MethodValues.fromJson(Map<String, dynamic> json) =
      _$MethodValues.fromJson;

  @override
  String get name;
  List<MethodNode>? get values;
  @override
  @JsonKey(ignore: true)
  _$$MethodValuesCopyWith<_$MethodValues> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$MethodBinaryCopyWith<$Res>
    implements $MethodNodeCopyWith<$Res> {
  factory _$$MethodBinaryCopyWith(
          _$MethodBinary value, $Res Function(_$MethodBinary) then) =
      __$$MethodBinaryCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, MethodNode left, MethodNode right, String operation});

  $MethodNodeCopyWith<$Res> get left;
  $MethodNodeCopyWith<$Res> get right;
}

/// @nodoc
class __$$MethodBinaryCopyWithImpl<$Res>
    extends _$MethodNodeCopyWithImpl<$Res, _$MethodBinary>
    implements _$$MethodBinaryCopyWith<$Res> {
  __$$MethodBinaryCopyWithImpl(
      _$MethodBinary _value, $Res Function(_$MethodBinary) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? left = null,
    Object? right = null,
    Object? operation = null,
  }) {
    return _then(_$MethodBinary(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      left: null == left
          ? _value.left
          : left // ignore: cast_nullable_to_non_nullable
              as MethodNode,
      right: null == right
          ? _value.right
          : right // ignore: cast_nullable_to_non_nullable
              as MethodNode,
      operation: null == operation
          ? _value.operation
          : operation // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $MethodNodeCopyWith<$Res> get left {
    return $MethodNodeCopyWith<$Res>(_value.left, (value) {
      return _then(_value.copyWith(left: value));
    });
  }

  @override
  @pragma('vm:prefer-inline')
  $MethodNodeCopyWith<$Res> get right {
    return $MethodNodeCopyWith<$Res>(_value.right, (value) {
      return _then(_value.copyWith(right: value));
    });
  }
}

/// @nodoc
@JsonSerializable()
class _$MethodBinary implements MethodBinary {
  const _$MethodBinary(
      {required this.name,
      required this.left,
      required this.right,
      required this.operation,
      final String? $type})
      : $type = $type ?? 'binary';

  factory _$MethodBinary.fromJson(Map<String, dynamic> json) =>
      _$$MethodBinaryFromJson(json);

  @override
  final String name;
  @override
  final MethodNode left;
  @override
  final MethodNode right;
  @override
  final String operation;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'MethodNode.binary(name: $name, left: $left, right: $right, operation: $operation)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$MethodBinary &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.left, left) || other.left == left) &&
            (identical(other.right, right) || other.right == right) &&
            (identical(other.operation, operation) ||
                other.operation == operation));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name, left, right, operation);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$MethodBinaryCopyWith<_$MethodBinary> get copyWith =>
      __$$MethodBinaryCopyWithImpl<_$MethodBinary>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String name) $default, {
    required TResult Function(String name, List<MethodNode>? values) values,
    required TResult Function(
            String name, MethodNode left, MethodNode right, String operation)
        binary,
    required TResult Function(
            String name, String value, Map<String, MethodNode> arguments)
        constructor,
    required TResult Function(String name, dynamic value) simple,
  }) {
    return binary(name, left, right, operation);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String name)? $default, {
    TResult? Function(String name, List<MethodNode>? values)? values,
    TResult? Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult? Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult? Function(String name, dynamic value)? simple,
  }) {
    return binary?.call(name, left, right, operation);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String name)? $default, {
    TResult Function(String name, List<MethodNode>? values)? values,
    TResult Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult Function(String name, dynamic value)? simple,
    required TResult orElse(),
  }) {
    if (binary != null) {
      return binary(name, left, right, operation);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(MethodBase value) $default, {
    required TResult Function(MethodValues value) values,
    required TResult Function(MethodBinary value) binary,
    required TResult Function(MethodConstructor value) constructor,
    required TResult Function(MethodSimple value) simple,
  }) {
    return binary(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(MethodBase value)? $default, {
    TResult? Function(MethodValues value)? values,
    TResult? Function(MethodBinary value)? binary,
    TResult? Function(MethodConstructor value)? constructor,
    TResult? Function(MethodSimple value)? simple,
  }) {
    return binary?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(MethodBase value)? $default, {
    TResult Function(MethodValues value)? values,
    TResult Function(MethodBinary value)? binary,
    TResult Function(MethodConstructor value)? constructor,
    TResult Function(MethodSimple value)? simple,
    required TResult orElse(),
  }) {
    if (binary != null) {
      return binary(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$MethodBinaryToJson(
      this,
    );
  }
}

abstract class MethodBinary implements MethodNode {
  const factory MethodBinary(
      {required final String name,
      required final MethodNode left,
      required final MethodNode right,
      required final String operation}) = _$MethodBinary;

  factory MethodBinary.fromJson(Map<String, dynamic> json) =
      _$MethodBinary.fromJson;

  @override
  String get name;
  MethodNode get left;
  MethodNode get right;
  String get operation;
  @override
  @JsonKey(ignore: true)
  _$$MethodBinaryCopyWith<_$MethodBinary> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$MethodConstructorCopyWith<$Res>
    implements $MethodNodeCopyWith<$Res> {
  factory _$$MethodConstructorCopyWith(
          _$MethodConstructor value, $Res Function(_$MethodConstructor) then) =
      __$$MethodConstructorCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, String value, Map<String, MethodNode> arguments});
}

/// @nodoc
class __$$MethodConstructorCopyWithImpl<$Res>
    extends _$MethodNodeCopyWithImpl<$Res, _$MethodConstructor>
    implements _$$MethodConstructorCopyWith<$Res> {
  __$$MethodConstructorCopyWithImpl(
      _$MethodConstructor _value, $Res Function(_$MethodConstructor) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? value = null,
    Object? arguments = null,
  }) {
    return _then(_$MethodConstructor(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      value: null == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as String,
      arguments: null == arguments
          ? _value._arguments
          : arguments // ignore: cast_nullable_to_non_nullable
              as Map<String, MethodNode>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$MethodConstructor implements MethodConstructor {
  const _$MethodConstructor(
      {required this.name,
      required this.value,
      final Map<String, MethodNode> arguments = const {},
      final String? $type})
      : _arguments = arguments,
        $type = $type ?? 'constructor';

  factory _$MethodConstructor.fromJson(Map<String, dynamic> json) =>
      _$$MethodConstructorFromJson(json);

  @override
  final String name;
  @override
  final String value;
  final Map<String, MethodNode> _arguments;
  @override
  @JsonKey()
  Map<String, MethodNode> get arguments {
    if (_arguments is EqualUnmodifiableMapView) return _arguments;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableMapView(_arguments);
  }

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'MethodNode.constructor(name: $name, value: $value, arguments: $arguments)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$MethodConstructor &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.value, value) || other.value == value) &&
            const DeepCollectionEquality()
                .equals(other._arguments, _arguments));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, name, value,
      const DeepCollectionEquality().hash(_arguments));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$MethodConstructorCopyWith<_$MethodConstructor> get copyWith =>
      __$$MethodConstructorCopyWithImpl<_$MethodConstructor>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String name) $default, {
    required TResult Function(String name, List<MethodNode>? values) values,
    required TResult Function(
            String name, MethodNode left, MethodNode right, String operation)
        binary,
    required TResult Function(
            String name, String value, Map<String, MethodNode> arguments)
        constructor,
    required TResult Function(String name, dynamic value) simple,
  }) {
    return constructor(name, value, arguments);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String name)? $default, {
    TResult? Function(String name, List<MethodNode>? values)? values,
    TResult? Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult? Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult? Function(String name, dynamic value)? simple,
  }) {
    return constructor?.call(name, value, arguments);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String name)? $default, {
    TResult Function(String name, List<MethodNode>? values)? values,
    TResult Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult Function(String name, dynamic value)? simple,
    required TResult orElse(),
  }) {
    if (constructor != null) {
      return constructor(name, value, arguments);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(MethodBase value) $default, {
    required TResult Function(MethodValues value) values,
    required TResult Function(MethodBinary value) binary,
    required TResult Function(MethodConstructor value) constructor,
    required TResult Function(MethodSimple value) simple,
  }) {
    return constructor(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(MethodBase value)? $default, {
    TResult? Function(MethodValues value)? values,
    TResult? Function(MethodBinary value)? binary,
    TResult? Function(MethodConstructor value)? constructor,
    TResult? Function(MethodSimple value)? simple,
  }) {
    return constructor?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(MethodBase value)? $default, {
    TResult Function(MethodValues value)? values,
    TResult Function(MethodBinary value)? binary,
    TResult Function(MethodConstructor value)? constructor,
    TResult Function(MethodSimple value)? simple,
    required TResult orElse(),
  }) {
    if (constructor != null) {
      return constructor(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$MethodConstructorToJson(
      this,
    );
  }
}

abstract class MethodConstructor implements MethodNode {
  const factory MethodConstructor(
      {required final String name,
      required final String value,
      final Map<String, MethodNode> arguments}) = _$MethodConstructor;

  factory MethodConstructor.fromJson(Map<String, dynamic> json) =
      _$MethodConstructor.fromJson;

  @override
  String get name;
  String get value;
  Map<String, MethodNode> get arguments;
  @override
  @JsonKey(ignore: true)
  _$$MethodConstructorCopyWith<_$MethodConstructor> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$MethodSimpleCopyWith<$Res>
    implements $MethodNodeCopyWith<$Res> {
  factory _$$MethodSimpleCopyWith(
          _$MethodSimple value, $Res Function(_$MethodSimple) then) =
      __$$MethodSimpleCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String name, dynamic value});
}

/// @nodoc
class __$$MethodSimpleCopyWithImpl<$Res>
    extends _$MethodNodeCopyWithImpl<$Res, _$MethodSimple>
    implements _$$MethodSimpleCopyWith<$Res> {
  __$$MethodSimpleCopyWithImpl(
      _$MethodSimple _value, $Res Function(_$MethodSimple) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? value = freezed,
  }) {
    return _then(_$MethodSimple(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      value: freezed == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as dynamic,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$MethodSimple implements MethodSimple {
  const _$MethodSimple(
      {required this.name, required this.value, final String? $type})
      : $type = $type ?? 'simple';

  factory _$MethodSimple.fromJson(Map<String, dynamic> json) =>
      _$$MethodSimpleFromJson(json);

  @override
  final String name;
  @override
  final dynamic value;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'MethodNode.simple(name: $name, value: $value)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$MethodSimple &&
            (identical(other.name, name) || other.name == name) &&
            const DeepCollectionEquality().equals(other.value, value));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType, name, const DeepCollectionEquality().hash(value));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$MethodSimpleCopyWith<_$MethodSimple> get copyWith =>
      __$$MethodSimpleCopyWithImpl<_$MethodSimple>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String name) $default, {
    required TResult Function(String name, List<MethodNode>? values) values,
    required TResult Function(
            String name, MethodNode left, MethodNode right, String operation)
        binary,
    required TResult Function(
            String name, String value, Map<String, MethodNode> arguments)
        constructor,
    required TResult Function(String name, dynamic value) simple,
  }) {
    return simple(name, value);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String name)? $default, {
    TResult? Function(String name, List<MethodNode>? values)? values,
    TResult? Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult? Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult? Function(String name, dynamic value)? simple,
  }) {
    return simple?.call(name, value);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String name)? $default, {
    TResult Function(String name, List<MethodNode>? values)? values,
    TResult Function(
            String name, MethodNode left, MethodNode right, String operation)?
        binary,
    TResult Function(
            String name, String value, Map<String, MethodNode> arguments)?
        constructor,
    TResult Function(String name, dynamic value)? simple,
    required TResult orElse(),
  }) {
    if (simple != null) {
      return simple(name, value);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(MethodBase value) $default, {
    required TResult Function(MethodValues value) values,
    required TResult Function(MethodBinary value) binary,
    required TResult Function(MethodConstructor value) constructor,
    required TResult Function(MethodSimple value) simple,
  }) {
    return simple(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(MethodBase value)? $default, {
    TResult? Function(MethodValues value)? values,
    TResult? Function(MethodBinary value)? binary,
    TResult? Function(MethodConstructor value)? constructor,
    TResult? Function(MethodSimple value)? simple,
  }) {
    return simple?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(MethodBase value)? $default, {
    TResult Function(MethodValues value)? values,
    TResult Function(MethodBinary value)? binary,
    TResult Function(MethodConstructor value)? constructor,
    TResult Function(MethodSimple value)? simple,
    required TResult orElse(),
  }) {
    if (simple != null) {
      return simple(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$MethodSimpleToJson(
      this,
    );
  }
}

abstract class MethodSimple implements MethodNode {
  const factory MethodSimple(
      {required final String name,
      required final dynamic value}) = _$MethodSimple;

  factory MethodSimple.fromJson(Map<String, dynamic> json) =
      _$MethodSimple.fromJson;

  @override
  String get name;
  dynamic get value;
  @override
  @JsonKey(ignore: true)
  _$$MethodSimpleCopyWith<_$MethodSimple> get copyWith =>
      throw _privateConstructorUsedError;
}
