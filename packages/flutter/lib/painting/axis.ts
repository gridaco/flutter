import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/painting/Axis-class.html
 */
export class Axis extends EnumClass {
  static horizontal = EnumField.fromStatic("Axis.horizontal");
  static vertical = EnumField.fromStatic("Axis.vertical");
}
