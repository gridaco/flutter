import { EnumClass, EnumField } from "coli/lib/snippet/utils/enum";
/**
 * https://api.flutter.dev/flutter/painting/BoxFit-class.html
 */
export class BoxFit extends EnumClass {
  static readonly contain = EnumField.fromStatic("BoxFit.contain");
  static readonly cover = EnumField.fromStatic("BoxFit.cover");
  static readonly fill = EnumField.fromStatic("BoxFit.fill");
  static readonly fitHeight = EnumField.fromStatic("BoxFit.fitHeight");
  static readonly fitWidth = EnumField.fromStatic("BoxFit.fitWidth");
  static readonly none = EnumField.fromStatic("BoxFit.none");
  static readonly scaleDown = EnumField.fromStatic("BoxFit.scaleDown");
}
