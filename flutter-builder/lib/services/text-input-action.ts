import { EnumClass, EnumField } from "@coli.codes/builder/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/services/TextInputAction-class.html
 */
export class TextInputAction extends EnumClass {
  static readonly continueAction = EnumField.fromStatic(
    "TextInputAction.continueAction"
  );
  static readonly done = EnumField.fromStatic("TextInputAction.done");
  static readonly emergencyCall = EnumField.fromStatic(
    "TextInputAction.emergencyCall"
  );
  static readonly go = EnumField.fromStatic("TextInputAction.go");
  static readonly join = EnumField.fromStatic("TextInputAction.join");
  static readonly newline = EnumField.fromStatic("TextInputAction.newline");
  static readonly next = EnumField.fromStatic("TextInputAction.next");
  static readonly none = EnumField.fromStatic("TextInputAction.none");
  static readonly previous = EnumField.fromStatic("TextInputAction.previous");
  static readonly route = EnumField.fromStatic("TextInputAction.route");
  static readonly search = EnumField.fromStatic("TextInputAction.search");
  static readonly send = EnumField.fromStatic("TextInputAction.send");
  static readonly unspecified = EnumField.fromStatic(
    "TextInputAction.unspecified"
  );
}
