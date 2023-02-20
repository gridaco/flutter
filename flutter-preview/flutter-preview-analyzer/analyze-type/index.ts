import {
  FlutterEnumType,
  all,
  FlutterDocEnumDefinition,
} from "@flutter-builder/metadata-enums";

export const flutter_preview_supported_types: DartType[] = [
  // dart:core
  "bool",
  "double",
  "int",
  "num",
  "String",
  // dart:ui
  "Color",
  // flutter/* eunms
  ...(all.map((e) => e.id) as FlutterEnumType[]),
];

export type DartCoreType =
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/BigInt-class.html
   */
  | "BigInt"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/bool-class.html
   */
  | "bool"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/DateTime-class.html
   */
  | "DateTime"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/double-class.html
   */
  | "double"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/Duration-class.html
   */
  | "Duration"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/Enum-class.html
   */
  | "Enum"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/Function-class.html
   */
  | "Function"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/int-class.html
   */
  | "int"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/num-class.html
   */
  | "num"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/Object-class.html
   */
  | "Object"
  /**
   * https://api.dart.dev/stable/2.19.2/dart-core/String-class.html
   */
  | "String"
  //
  | "dynamic";

export type DartUIType = "Color";

export type DartType = DartCoreType | DartUIType | FlutterEnumType;

export function isTypeFlutterEnum(
  type: DartType
): false | FlutterDocEnumDefinition {
  const maybe = all.find((e) => e.id === type);
  if (maybe) {
    return maybe;
  }
  return false;
}

export function isTypeSupportedByFlutterPreview(typelike: string): boolean {
  // if type comes with optional '?', remove it
  const type = typelike.endsWith("?") ? typelike.slice(0, -1) : typelike;

  return flutter_preview_supported_types.includes(type as DartType);
}
