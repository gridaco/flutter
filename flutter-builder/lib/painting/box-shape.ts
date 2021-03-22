import { EnumField, EnumClass } from "coli/lib/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/painting/BoxShape-class.html
 */
export class BoxShape extends EnumClass {
  static readonly circle = EnumField.fromStatic("BoxShape.circle");
  static readonly rectangle = EnumField.fromStatic("BoxShape.rectangle");
}
