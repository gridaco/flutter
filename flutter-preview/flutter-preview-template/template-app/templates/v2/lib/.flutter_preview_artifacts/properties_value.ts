export default (args: {}) => `import 'package:flutter/widgets.dart';
import './properties_value_state.dart';
import './mappers/mappers.dart';

T value<T>(
  BuildContext context,
  String key,
) {
  final value = PropertiesStateContainer.of(context)!.properties[key];

  // core types
  // - Number - int, double, num
  // - Boolean - bool
  // - String - String
  // - List - List
  // - Map - Map

  // number - https://dart.dev/guides/language/numbers
  if (T == num || T == int || T == double) {
    if (value == null) {
      return 0 as T;
    }

    if (value is String) {
      if (T is int) {
        try {
          return int.parse(value) as T;
        } catch (e) {}
      }
      if (T is double) {
        try {
          return double.parse(value) as T;
        } catch (e) {}
      }
      return num.parse(value) as T;
    } else {
      return value as T;
    }
  }

  // boolean
  if (T == bool) {
    if (value == null) {
      return false as T;
    }

    if (value is bool) {
      return value as T;
    } else {
      // parse string to boolean
      if (value is String) {
        return value.parseBool() as T;
      }
      return value as T;
    }
  }

  // string
  if (T == String) {
    if (value == null) {
      return "" as T;
    }
    return value.toString() as T;
  }

  // Color
  if (T == Color) {
    if (value is String) {
      return value.parseColor() as T;
    }
    return value as T;
  }

  // Icon
  if (T == Icon) {
    if (value is String) {
      return value.parseIcon() as T;
    }
    return value as T;
  }

  if (isFlutterEmum(T)) {
    return flutterEnumFromString<T>(value) as T;
  }

  return value;
}
`