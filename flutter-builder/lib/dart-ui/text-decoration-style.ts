import { EnumClass, EnumField } from "@coli.codes/builder/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/dart-ui/TextDecorationStyle-class.html
 */
export class TextDecorationStyle extends EnumClass {
  static readonly dashed = EnumField.fromStatic("TextDecorationStyle.dashed");
  static readonly dotted = EnumField.fromStatic("TextDecorationStyle.dotted");
  static readonly double = EnumField.fromStatic("TextDecorationStyle.double");
  static readonly solid = EnumField.fromStatic("TextDecorationStyle.solid");
  static readonly wavy = EnumField.fromStatic("TextDecorationStyle.wavy");
}
