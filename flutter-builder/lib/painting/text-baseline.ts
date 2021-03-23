import { EnumField, EnumClass } from "coli/lib/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/dart-ui/TextBaseline-class.html
 */
export class TextBaseline extends EnumClass {
  static readonly alphabetic = EnumField.fromStatic("TextBaseline.alphabetic");
  static readonly ideographic = EnumField.fromStatic(
    "TextBaseline.ideographic"
  );
}
