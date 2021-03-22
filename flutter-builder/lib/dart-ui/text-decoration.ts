import { EnumClass, EnumField } from "coli/lib/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/dart-ui/TextDecoration-class.html
 */
export class TextDecoration extends EnumClass {
  static readonly lineThrough = EnumField.fromStatic(
    "TextDecoration.lineThrough"
  );
  static readonly none = EnumField.fromStatic("TextDecoration.none");
  static readonly overline = EnumField.fromStatic("TextDecoration.overline");
  static readonly underline = EnumField.fromStatic("TextDecoration.underline");
}
