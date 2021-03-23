import { EnumClass, EnumField } from "coli/lib/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/dart-ui/FontStyle-class.html
 */
export class FontStyle extends EnumClass {
  static readonly italic = EnumField.fromStatic("FontStyle.italic");
  static readonly normal = EnumField.fromStatic("FontStyle.normal");
}
