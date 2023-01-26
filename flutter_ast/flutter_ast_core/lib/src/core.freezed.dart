// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'core.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DartCore _$DartCoreFromJson(Map<String, dynamic> json) {
  switch (json['runtimeType']) {
    case 'default':
      return _DartCore.fromJson(json);
    case 'property':
      return DartProperty.fromJson(json);
    case 'field':
      return DartField.fromJson(json);

    default:
      throw CheckedFromJsonException(json, 'runtimeType', 'DartCore',
          'Invalid union type "${json['runtimeType']}"!');
  }
}

/// @nodoc
mixin _$DartCore {
  String get type => throw _privateConstructorUsedError;
  Object? get value => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String type, String value) $default, {
    required TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)
        property,
    required TResult Function(String name, String type, DartCore? value,
            bool isFinal, bool isConst, bool isStatic)
        field,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String type, String value)? $default, {
    TResult? Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult? Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String type, String value)? $default, {
    TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(_DartCore value) $default, {
    required TResult Function(DartProperty value) property,
    required TResult Function(DartField value) field,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(_DartCore value)? $default, {
    TResult? Function(DartProperty value)? property,
    TResult? Function(DartField value)? field,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(_DartCore value)? $default, {
    TResult Function(DartProperty value)? property,
    TResult Function(DartField value)? field,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DartCoreCopyWith<DartCore> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DartCoreCopyWith<$Res> {
  factory $DartCoreCopyWith(DartCore value, $Res Function(DartCore) then) =
      _$DartCoreCopyWithImpl<$Res, DartCore>;
  @useResult
  $Res call({String type});
}

/// @nodoc
class _$DartCoreCopyWithImpl<$Res, $Val extends DartCore>
    implements $DartCoreCopyWith<$Res> {
  _$DartCoreCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? type = null,
  }) {
    return _then(_value.copyWith(
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_DartCoreCopyWith<$Res> implements $DartCoreCopyWith<$Res> {
  factory _$$_DartCoreCopyWith(
          _$_DartCore value, $Res Function(_$_DartCore) then) =
      __$$_DartCoreCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({String type, String value});
}

/// @nodoc
class __$$_DartCoreCopyWithImpl<$Res>
    extends _$DartCoreCopyWithImpl<$Res, _$_DartCore>
    implements _$$_DartCoreCopyWith<$Res> {
  __$$_DartCoreCopyWithImpl(
      _$_DartCore _value, $Res Function(_$_DartCore) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? type = null,
    Object? value = null,
  }) {
    return _then(_$_DartCore(
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      value: null == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as String,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DartCore implements _DartCore {
  const _$_DartCore(
      {required this.type, required this.value, final String? $type})
      : $type = $type ?? 'default';

  factory _$_DartCore.fromJson(Map<String, dynamic> json) =>
      _$$_DartCoreFromJson(json);

  @override
  final String type;
  @override
  final String value;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'DartCore(type: $type, value: $value)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DartCore &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.value, value) || other.value == value));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(runtimeType, type, value);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DartCoreCopyWith<_$_DartCore> get copyWith =>
      __$$_DartCoreCopyWithImpl<_$_DartCore>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String type, String value) $default, {
    required TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)
        property,
    required TResult Function(String name, String type, DartCore? value,
            bool isFinal, bool isConst, bool isStatic)
        field,
  }) {
    return $default(type, value);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String type, String value)? $default, {
    TResult? Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult? Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
  }) {
    return $default?.call(type, value);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String type, String value)? $default, {
    TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
    required TResult orElse(),
  }) {
    if ($default != null) {
      return $default(type, value);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(_DartCore value) $default, {
    required TResult Function(DartProperty value) property,
    required TResult Function(DartField value) field,
  }) {
    return $default(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(_DartCore value)? $default, {
    TResult? Function(DartProperty value)? property,
    TResult? Function(DartField value)? field,
  }) {
    return $default?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(_DartCore value)? $default, {
    TResult Function(DartProperty value)? property,
    TResult Function(DartField value)? field,
    required TResult orElse(),
  }) {
    if ($default != null) {
      return $default(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$_DartCoreToJson(
      this,
    );
  }
}

abstract class _DartCore implements DartCore {
  const factory _DartCore(
      {required final String type, required final String value}) = _$_DartCore;

  factory _DartCore.fromJson(Map<String, dynamic> json) = _$_DartCore.fromJson;

  @override
  String get type;
  @override
  String get value;
  @override
  @JsonKey(ignore: true)
  _$$_DartCoreCopyWith<_$_DartCore> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$DartPropertyCopyWith<$Res>
    implements $DartCoreCopyWith<$Res> {
  factory _$$DartPropertyCopyWith(
          _$DartProperty value, $Res Function(_$DartProperty) then) =
      __$$DartPropertyCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String name,
      String? key,
      String type,
      DartCore? value,
      bool isOptional,
      bool isNamed,
      bool isPositional,
      bool isRequired,
      bool isRequiredPositional,
      bool isSynthetic,
      bool isRequiredNamed,
      bool isOptionalNamed,
      int? position});

  $DartCoreCopyWith<$Res>? get value;
}

/// @nodoc
class __$$DartPropertyCopyWithImpl<$Res>
    extends _$DartCoreCopyWithImpl<$Res, _$DartProperty>
    implements _$$DartPropertyCopyWith<$Res> {
  __$$DartPropertyCopyWithImpl(
      _$DartProperty _value, $Res Function(_$DartProperty) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? key = freezed,
    Object? type = null,
    Object? value = freezed,
    Object? isOptional = null,
    Object? isNamed = null,
    Object? isPositional = null,
    Object? isRequired = null,
    Object? isRequiredPositional = null,
    Object? isSynthetic = null,
    Object? isRequiredNamed = null,
    Object? isOptionalNamed = null,
    Object? position = freezed,
  }) {
    return _then(_$DartProperty(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      key: freezed == key
          ? _value.key
          : key // ignore: cast_nullable_to_non_nullable
              as String?,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      value: freezed == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as DartCore?,
      isOptional: null == isOptional
          ? _value.isOptional
          : isOptional // ignore: cast_nullable_to_non_nullable
              as bool,
      isNamed: null == isNamed
          ? _value.isNamed
          : isNamed // ignore: cast_nullable_to_non_nullable
              as bool,
      isPositional: null == isPositional
          ? _value.isPositional
          : isPositional // ignore: cast_nullable_to_non_nullable
              as bool,
      isRequired: null == isRequired
          ? _value.isRequired
          : isRequired // ignore: cast_nullable_to_non_nullable
              as bool,
      isRequiredPositional: null == isRequiredPositional
          ? _value.isRequiredPositional
          : isRequiredPositional // ignore: cast_nullable_to_non_nullable
              as bool,
      isSynthetic: null == isSynthetic
          ? _value.isSynthetic
          : isSynthetic // ignore: cast_nullable_to_non_nullable
              as bool,
      isRequiredNamed: null == isRequiredNamed
          ? _value.isRequiredNamed
          : isRequiredNamed // ignore: cast_nullable_to_non_nullable
              as bool,
      isOptionalNamed: null == isOptionalNamed
          ? _value.isOptionalNamed
          : isOptionalNamed // ignore: cast_nullable_to_non_nullable
              as bool,
      position: freezed == position
          ? _value.position
          : position // ignore: cast_nullable_to_non_nullable
              as int?,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $DartCoreCopyWith<$Res>? get value {
    if (_value.value == null) {
      return null;
    }

    return $DartCoreCopyWith<$Res>(_value.value!, (value) {
      return _then(_value.copyWith(value: value));
    });
  }
}

/// @nodoc
@JsonSerializable()
class _$DartProperty implements DartProperty {
  const _$DartProperty(
      {required this.name,
      this.key,
      required this.type,
      this.value,
      this.isOptional = true,
      this.isNamed = false,
      this.isPositional = false,
      this.isRequired = false,
      this.isRequiredPositional = false,
      this.isSynthetic = false,
      this.isRequiredNamed = false,
      this.isOptionalNamed = false,
      this.position,
      final String? $type})
      : $type = $type ?? 'property';

  factory _$DartProperty.fromJson(Map<String, dynamic> json) =>
      _$$DartPropertyFromJson(json);

  @override
  final String name;
  @override
  final String? key;
  @override
  final String type;
  @override
  final DartCore? value;
  @override
  @JsonKey()
  final bool isOptional;
  @override
  @JsonKey()
  final bool isNamed;
  @override
  @JsonKey()
  final bool isPositional;
  @override
  @JsonKey()
  final bool isRequired;
  @override
  @JsonKey()
  final bool isRequiredPositional;
  @override
  @JsonKey()
  final bool isSynthetic;
  @override
  @JsonKey()
  final bool isRequiredNamed;
  @override
  @JsonKey()
  final bool isOptionalNamed;
  @override
  final int? position;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'DartCore.property(name: $name, key: $key, type: $type, value: $value, isOptional: $isOptional, isNamed: $isNamed, isPositional: $isPositional, isRequired: $isRequired, isRequiredPositional: $isRequiredPositional, isSynthetic: $isSynthetic, isRequiredNamed: $isRequiredNamed, isOptionalNamed: $isOptionalNamed, position: $position)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$DartProperty &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.key, key) || other.key == key) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.value, value) || other.value == value) &&
            (identical(other.isOptional, isOptional) ||
                other.isOptional == isOptional) &&
            (identical(other.isNamed, isNamed) || other.isNamed == isNamed) &&
            (identical(other.isPositional, isPositional) ||
                other.isPositional == isPositional) &&
            (identical(other.isRequired, isRequired) ||
                other.isRequired == isRequired) &&
            (identical(other.isRequiredPositional, isRequiredPositional) ||
                other.isRequiredPositional == isRequiredPositional) &&
            (identical(other.isSynthetic, isSynthetic) ||
                other.isSynthetic == isSynthetic) &&
            (identical(other.isRequiredNamed, isRequiredNamed) ||
                other.isRequiredNamed == isRequiredNamed) &&
            (identical(other.isOptionalNamed, isOptionalNamed) ||
                other.isOptionalNamed == isOptionalNamed) &&
            (identical(other.position, position) ||
                other.position == position));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      name,
      key,
      type,
      value,
      isOptional,
      isNamed,
      isPositional,
      isRequired,
      isRequiredPositional,
      isSynthetic,
      isRequiredNamed,
      isOptionalNamed,
      position);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$DartPropertyCopyWith<_$DartProperty> get copyWith =>
      __$$DartPropertyCopyWithImpl<_$DartProperty>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String type, String value) $default, {
    required TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)
        property,
    required TResult Function(String name, String type, DartCore? value,
            bool isFinal, bool isConst, bool isStatic)
        field,
  }) {
    return property(
        name,
        key,
        type,
        value,
        isOptional,
        isNamed,
        isPositional,
        isRequired,
        isRequiredPositional,
        isSynthetic,
        isRequiredNamed,
        isOptionalNamed,
        position);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String type, String value)? $default, {
    TResult? Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult? Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
  }) {
    return property?.call(
        name,
        key,
        type,
        value,
        isOptional,
        isNamed,
        isPositional,
        isRequired,
        isRequiredPositional,
        isSynthetic,
        isRequiredNamed,
        isOptionalNamed,
        position);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String type, String value)? $default, {
    TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
    required TResult orElse(),
  }) {
    if (property != null) {
      return property(
          name,
          key,
          type,
          value,
          isOptional,
          isNamed,
          isPositional,
          isRequired,
          isRequiredPositional,
          isSynthetic,
          isRequiredNamed,
          isOptionalNamed,
          position);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(_DartCore value) $default, {
    required TResult Function(DartProperty value) property,
    required TResult Function(DartField value) field,
  }) {
    return property(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(_DartCore value)? $default, {
    TResult? Function(DartProperty value)? property,
    TResult? Function(DartField value)? field,
  }) {
    return property?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(_DartCore value)? $default, {
    TResult Function(DartProperty value)? property,
    TResult Function(DartField value)? field,
    required TResult orElse(),
  }) {
    if (property != null) {
      return property(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$DartPropertyToJson(
      this,
    );
  }
}

abstract class DartProperty implements DartCore {
  const factory DartProperty(
      {required final String name,
      final String? key,
      required final String type,
      final DartCore? value,
      final bool isOptional,
      final bool isNamed,
      final bool isPositional,
      final bool isRequired,
      final bool isRequiredPositional,
      final bool isSynthetic,
      final bool isRequiredNamed,
      final bool isOptionalNamed,
      final int? position}) = _$DartProperty;

  factory DartProperty.fromJson(Map<String, dynamic> json) =
      _$DartProperty.fromJson;

  String get name;
  String? get key;
  @override
  String get type;
  @override
  DartCore? get value;
  bool get isOptional;
  bool get isNamed;
  bool get isPositional;
  bool get isRequired;
  bool get isRequiredPositional;
  bool get isSynthetic;
  bool get isRequiredNamed;
  bool get isOptionalNamed;
  int? get position;
  @override
  @JsonKey(ignore: true)
  _$$DartPropertyCopyWith<_$DartProperty> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$DartFieldCopyWith<$Res> implements $DartCoreCopyWith<$Res> {
  factory _$$DartFieldCopyWith(
          _$DartField value, $Res Function(_$DartField) then) =
      __$$DartFieldCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {String name,
      String type,
      DartCore? value,
      bool isFinal,
      bool isConst,
      bool isStatic});

  $DartCoreCopyWith<$Res>? get value;
}

/// @nodoc
class __$$DartFieldCopyWithImpl<$Res>
    extends _$DartCoreCopyWithImpl<$Res, _$DartField>
    implements _$$DartFieldCopyWith<$Res> {
  __$$DartFieldCopyWithImpl(
      _$DartField _value, $Res Function(_$DartField) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? name = null,
    Object? type = null,
    Object? value = freezed,
    Object? isFinal = null,
    Object? isConst = null,
    Object? isStatic = null,
  }) {
    return _then(_$DartField(
      name: null == name
          ? _value.name
          : name // ignore: cast_nullable_to_non_nullable
              as String,
      type: null == type
          ? _value.type
          : type // ignore: cast_nullable_to_non_nullable
              as String,
      value: freezed == value
          ? _value.value
          : value // ignore: cast_nullable_to_non_nullable
              as DartCore?,
      isFinal: null == isFinal
          ? _value.isFinal
          : isFinal // ignore: cast_nullable_to_non_nullable
              as bool,
      isConst: null == isConst
          ? _value.isConst
          : isConst // ignore: cast_nullable_to_non_nullable
              as bool,
      isStatic: null == isStatic
          ? _value.isStatic
          : isStatic // ignore: cast_nullable_to_non_nullable
              as bool,
    ));
  }

  @override
  @pragma('vm:prefer-inline')
  $DartCoreCopyWith<$Res>? get value {
    if (_value.value == null) {
      return null;
    }

    return $DartCoreCopyWith<$Res>(_value.value!, (value) {
      return _then(_value.copyWith(value: value));
    });
  }
}

/// @nodoc
@JsonSerializable()
class _$DartField implements DartField {
  const _$DartField(
      {required this.name,
      required this.type,
      this.value,
      this.isFinal = false,
      this.isConst = false,
      this.isStatic = false,
      final String? $type})
      : $type = $type ?? 'field';

  factory _$DartField.fromJson(Map<String, dynamic> json) =>
      _$$DartFieldFromJson(json);

  @override
  final String name;
  @override
  final String type;
  @override
  final DartCore? value;
  @override
  @JsonKey()
  final bool isFinal;
  @override
  @JsonKey()
  final bool isConst;
  @override
  @JsonKey()
  final bool isStatic;

  @JsonKey(name: 'runtimeType')
  final String $type;

  @override
  String toString() {
    return 'DartCore.field(name: $name, type: $type, value: $value, isFinal: $isFinal, isConst: $isConst, isStatic: $isStatic)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$DartField &&
            (identical(other.name, name) || other.name == name) &&
            (identical(other.type, type) || other.type == type) &&
            (identical(other.value, value) || other.value == value) &&
            (identical(other.isFinal, isFinal) || other.isFinal == isFinal) &&
            (identical(other.isConst, isConst) || other.isConst == isConst) &&
            (identical(other.isStatic, isStatic) ||
                other.isStatic == isStatic));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, name, type, value, isFinal, isConst, isStatic);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$DartFieldCopyWith<_$DartField> get copyWith =>
      __$$DartFieldCopyWithImpl<_$DartField>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>(
    TResult Function(String type, String value) $default, {
    required TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)
        property,
    required TResult Function(String name, String type, DartCore? value,
            bool isFinal, bool isConst, bool isStatic)
        field,
  }) {
    return field(name, type, value, isFinal, isConst, isStatic);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>(
    TResult? Function(String type, String value)? $default, {
    TResult? Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult? Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
  }) {
    return field?.call(name, type, value, isFinal, isConst, isStatic);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>(
    TResult Function(String type, String value)? $default, {
    TResult Function(
            String name,
            String? key,
            String type,
            DartCore? value,
            bool isOptional,
            bool isNamed,
            bool isPositional,
            bool isRequired,
            bool isRequiredPositional,
            bool isSynthetic,
            bool isRequiredNamed,
            bool isOptionalNamed,
            int? position)?
        property,
    TResult Function(String name, String type, DartCore? value, bool isFinal,
            bool isConst, bool isStatic)?
        field,
    required TResult orElse(),
  }) {
    if (field != null) {
      return field(name, type, value, isFinal, isConst, isStatic);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>(
    TResult Function(_DartCore value) $default, {
    required TResult Function(DartProperty value) property,
    required TResult Function(DartField value) field,
  }) {
    return field(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>(
    TResult? Function(_DartCore value)? $default, {
    TResult? Function(DartProperty value)? property,
    TResult? Function(DartField value)? field,
  }) {
    return field?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>(
    TResult Function(_DartCore value)? $default, {
    TResult Function(DartProperty value)? property,
    TResult Function(DartField value)? field,
    required TResult orElse(),
  }) {
    if (field != null) {
      return field(this);
    }
    return orElse();
  }

  @override
  Map<String, dynamic> toJson() {
    return _$$DartFieldToJson(
      this,
    );
  }
}

abstract class DartField implements DartCore {
  const factory DartField(
      {required final String name,
      required final String type,
      final DartCore? value,
      final bool isFinal,
      final bool isConst,
      final bool isStatic}) = _$DartField;

  factory DartField.fromJson(Map<String, dynamic> json) = _$DartField.fromJson;

  String get name;
  @override
  String get type;
  @override
  DartCore? get value;
  bool get isFinal;
  bool get isConst;
  bool get isStatic;
  @override
  @JsonKey(ignore: true)
  _$$DartFieldCopyWith<_$DartField> get copyWith =>
      throw _privateConstructorUsedError;
}
