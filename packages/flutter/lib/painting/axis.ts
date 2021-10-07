import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/painting/Axis-class.html
 */
export class Axis extends EnumClass {
  static readonly horizontal: Axis = EnumField.fromStatic("Axis.horizontal");
  static readonly vertical: Axis = EnumField.fromStatic("Axis.vertical");
}
