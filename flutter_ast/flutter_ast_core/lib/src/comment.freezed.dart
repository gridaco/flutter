// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'comment.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#custom-getters-and-methods');

DartComment _$DartCommentFromJson(Map<String, dynamic> json) {
  return _DartComment.fromJson(json);
}

/// @nodoc
mixin _$DartComment {
  List<String> get lines => throw _privateConstructorUsedError;

  Map<String, dynamic> toJson() => throw _privateConstructorUsedError;
  @JsonKey(ignore: true)
  $DartCommentCopyWith<DartComment> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $DartCommentCopyWith<$Res> {
  factory $DartCommentCopyWith(
          DartComment value, $Res Function(DartComment) then) =
      _$DartCommentCopyWithImpl<$Res, DartComment>;
  @useResult
  $Res call({List<String> lines});
}

/// @nodoc
class _$DartCommentCopyWithImpl<$Res, $Val extends DartComment>
    implements $DartCommentCopyWith<$Res> {
  _$DartCommentCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? lines = null,
  }) {
    return _then(_value.copyWith(
      lines: null == lines
          ? _value.lines
          : lines // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$_DartCommentCopyWith<$Res>
    implements $DartCommentCopyWith<$Res> {
  factory _$$_DartCommentCopyWith(
          _$_DartComment value, $Res Function(_$_DartComment) then) =
      __$$_DartCommentCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({List<String> lines});
}

/// @nodoc
class __$$_DartCommentCopyWithImpl<$Res>
    extends _$DartCommentCopyWithImpl<$Res, _$_DartComment>
    implements _$$_DartCommentCopyWith<$Res> {
  __$$_DartCommentCopyWithImpl(
      _$_DartComment _value, $Res Function(_$_DartComment) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? lines = null,
  }) {
    return _then(_$_DartComment(
      lines: null == lines
          ? _value._lines
          : lines // ignore: cast_nullable_to_non_nullable
              as List<String>,
    ));
  }
}

/// @nodoc
@JsonSerializable()
class _$_DartComment implements _DartComment {
  const _$_DartComment({final List<String> lines = const []}) : _lines = lines;

  factory _$_DartComment.fromJson(Map<String, dynamic> json) =>
      _$$_DartCommentFromJson(json);

  final List<String> _lines;
  @override
  @JsonKey()
  List<String> get lines {
    if (_lines is EqualUnmodifiableListView) return _lines;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_lines);
  }

  @override
  String toString() {
    return 'DartComment(lines: $lines)';
  }

  @override
  bool operator ==(dynamic other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$_DartComment &&
            const DeepCollectionEquality().equals(other._lines, _lines));
  }

  @JsonKey(ignore: true)
  @override
  int get hashCode =>
      Object.hash(runtimeType, const DeepCollectionEquality().hash(_lines));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$_DartCommentCopyWith<_$_DartComment> get copyWith =>
      __$$_DartCommentCopyWithImpl<_$_DartComment>(this, _$identity);

  @override
  Map<String, dynamic> toJson() {
    return _$$_DartCommentToJson(
      this,
    );
  }
}

abstract class _DartComment implements DartComment {
  const factory _DartComment({final List<String> lines}) = _$_DartComment;

  factory _DartComment.fromJson(Map<String, dynamic> json) =
      _$_DartComment.fromJson;

  @override
  List<String> get lines;
  @override
  @JsonKey(ignore: true)
  _$$_DartCommentCopyWith<_$_DartComment> get copyWith =>
      throw _privateConstructorUsedError;
}
