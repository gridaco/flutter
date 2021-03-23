import { EnumClass, EnumField } from "coli/lib/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/painting/BorderStyle-class.html
 */
export class BorderStyle extends EnumClass {
  static readonly none = EnumField.fromStatic("BorderStyle.none");
  static readonly solid = EnumField.fromStatic("BorderStyle.solid");
}
