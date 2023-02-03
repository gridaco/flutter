// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'import.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DartImport _$DartImportFromJson(Map<String, dynamic> json) {
  return _DartImport.fromJson(json);
}

/// @nodoc
mixin _$DartImport {
  int get offset => throw _privateConstructorUsedError;
  int get end => throw _privateConstructorUsedError;
  String? get uri =>
      throw _privateConstructorUsedError; // required Bool deffered,
  /// The prefix used to import the library.
  /// the token following after the `as` keyword in `import 'package:foo/foo.dart' as foo;` - `foo`
  String? get prefix => throw _privateConstructorUsedError;
  List<String>? get show => throw _privateConstructorUsedError;
  List<String>? get hide => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DartImportCopyWith<DartImport> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DartImportCopyWith<$Res> {
  factory $DartImportCopyWith(
          DartImport value, $Res Function(DartImport) then) =
      _$DartImportCopyWithImpl<$Res, DartImport>;
  @useResult
  $Res call(
      {int offset,
      int end,
      String? uri,
      String? prefix,
      List<String>? show,
      List<String>? hide});
}

/// @nodoc
class _$DartImportCopyWithImpl<$Res, $Val extends DartImport>
    implements $DartImportCopyWith<$Res> {
  _$DartImportCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? offset = null,
    Object? end = null,
    Object? uri = freezed,
    Object? prefix = freezed,
    Object? show = freezed,
    Object? hide = freezed,
  }) {
    return _then(_value.copyWith(
      offset: null == offset
          ? _value.offset
          : offset // ignore: cast_nullable_to_non_nullable
              as int,
      end: null == end
          ? _value.end
          : end // ignore: cast_nullable_to_non_nullable
              as int,
      uri: freezed == uri
          ? _value.uri
          : uri // ignore: cast_nullable_to_non_nullable
              as String?,
      prefix: freezed == prefix
          ? _value.prefix
          : prefix // ignore: cast_nullable_to_non_nullable
              as String?,
      show: freezed == show
          ? _value.show
          : show // ignore: cast_nullable_to_non_nullable
              as List<String>?,
      hide: freezed == hide
          ? _value.hide
          : hide // ignore: cast_nullable_to_non_nullable
              as List<String>?,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_DartImportCopyWith<$Res>
    implements $DartImportCopyWith<$Res> {
  factory _$$_DartImportCopyWith(
          _$_DartImport value, $Res Function(_$_DartImport) then) =
      __$$_DartImportCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call(
      {int offset,
      int end,
      String? uri,
      String? prefix,
      List<String>? show,
      List<String>? hide});
}

/// @nodoc
class __$$_DartImportCopyWithImpl<$Res>
    extends _$DartImportCopyWithImpl<$Res, _$_DartImport>
    implements _$$_DartImportCopyWith<$Res> {
  __$$_DartImportCopyWithImpl(
      _$_DartImport _value, $Res Function(_$_DartImport) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? offset = null,
    Object? end = null,
    Object? uri = freezed,
    Object? prefix = freezed,
    Object? show = freezed,
    Object? hide = freezed,
  }) {
    return _then(_$_DartImport(
      offset: null == offset
          ? _value.offset
          : offset // ignore: cast_nullable_to_non_nullable
              as int,
      end: null == end
          ? _value.end
          : end // ignore: cast_nullable_to_non_nullable
              as int,
      uri: freezed == uri
          ? _value.uri
          : uri // ignore: cast_nullable_to_non_nullable
              as String?,
      prefix: freezed == prefix
          ? _value.prefix
          : prefix // ignore: cast_nullable_to_non_nullable
              as String?,
      show: freezed == show
          ? _value._show
          : show // ignore: cast_nullable_to_non_nullable
              as List<String>?,
      hide: freezed == hide
          ? _value._hide
          : hide // ignore: cast_nullable_to_non_nullable
              as List<String>?,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DartImport implements _DartImport {
  const _$_DartImport(
      {required this.offset,
      required this.end,
      required this.uri,
      required this.prefix,
      required final List<String>? show,
      required final List<String>? hide})
      : _show = show,
        _hide = hide;

  factory _$_DartImport.fromJson(Map<String, dynamic> json) =>
      _$$_DartImportFromJson(json);

  @override
  final int offset;
  @override
  final int end;
  @override
  final String? uri;
// required Bool deffered,
  /// The prefix used to import the library.
  /// the token following after the `as` keyword in `import 'package:foo/foo.dart' as foo;` - `foo`
  @override
  final String? prefix;
  final List<String>? _show;
  @override
  List<String>? get show {
    final value = _show;
    if (value == null) return null;
    if (_show is EqualUnmodifiableListView) return _show;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(value);
  }

  final List<String>? _hide;
  @override
  List<String>? get hide {
    final value = _hide;
    if (value == null) return null;
    if (_hide is EqualUnmodifiableListView) return _hide;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(value);
  }

  @override
  String toString() {
    return 'DartImport(offset: $offset, end: $end, uri: $uri, prefix: $prefix, show: $show, hide: $hide)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DartImport &&
            (identical(other.offset, offset) || other.offset == offset) &&
            (identical(other.end, end) || other.end == end) &&
            (identical(other.uri, uri) || other.uri == uri) &&
            (identical(other.prefix, prefix) || other.prefix == prefix) &&
            const DeepCollectionEquality().equals(other._show, _show) &&
            const DeepCollectionEquality().equals(other._hide, _hide));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode => Object.hash(
      runtimeType,
      offset,
      end,
      uri,
      prefix,
      const DeepCollectionEquality().hash(_show),
      const DeepCollectionEquality().hash(_hide));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DartImportCopyWith<_$_DartImport> get copyWith =>
      __$$_DartImportCopyWithImpl<_$_DartImport>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_DartImportToJson(
      this,
    );
  }
}

abstract class _DartImport implements DartImport {
  const factory _DartImport(
      {required final int offset,
      required final int end,
      required final String? uri,
      required final String? prefix,
      required final List<String>? show,
      required final List<String>? hide}) = _$_DartImport;

  factory _DartImport.fromJson(Map<String, dynamic> json) =
      _$_DartImport.fromJson;

  @override
  int get offset;
  @override
  int get end;
  @override
  String? get uri;
  @override // required Bool deffered,
  /// The prefix used to import the library.
  /// the token following after the `as` keyword in `import 'package:foo/foo.dart' as foo;` - `foo`
  String? get prefix;
  @override
  List<String>? get show;
  @override
  List<String>? get hide;
  @override
  @JsonKey(ignore: true)
  _$$_DartImportCopyWith<_$_DartImport> get copyWith =>
      throw _privateConstructorUsedError;
}
