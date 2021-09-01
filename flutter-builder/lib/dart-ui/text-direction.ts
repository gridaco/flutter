import { EnumClass, EnumField } from "@coli.codes/builder/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html
 */
export class TextDirection extends EnumClass {
  static readonly ltr = EnumField.fromStatic("TextDirection.ltr");
  static readonly rtl = EnumField.fromStatic("TextDirection.rtl");
}
