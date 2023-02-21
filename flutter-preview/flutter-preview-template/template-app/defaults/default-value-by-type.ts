import { type } from "@flutter-preview/analyzer";

/**
 * A function that used for seedings default values for required final fields, by type.
 * @returns
 */
export function defaultValueByType(type: type.DartType) {
  switch (type) {
    case "BigInt":
      return "BigInt.from(0)";
    case "bool":
      return "false";
    case "Color":
      return "Colors.black";
    case "DateTime":
      return "DateTime.now()";
    case "Object":
      return "Object()";
    case "String":
      return "''";
    case "int":
      return "0";
    case "animation/AnimationBehavior":
      return "AnimationBehavior.normal";
    // TODO: add all nativly supported enums
    default:
      return "null";
  }
  //
}
