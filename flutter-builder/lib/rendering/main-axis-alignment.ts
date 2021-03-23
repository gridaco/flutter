import { EnumClass, EnumField } from "coli/lib/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html
 */
export class MainAxisAlignment extends EnumClass {
  static readonly center = EnumField.fromStatic("MainAxisAlignment.center");
  static readonly end = EnumField.fromStatic("MainAxisAlignment.end");
  static readonly spaceAround = EnumField.fromStatic(
    "MainAxisAlignment.spaceAround"
  );
  static readonly spaceBetween = EnumField.fromStatic(
    "MainAxisAlignment.spaceBetween"
  );
  static readonly spaceEvenly = EnumField.fromStatic(
    "MainAxisAlignment.spaceEvenly"
  );
  static readonly start = EnumField.fromStatic("MainAxisAlignment.start");
}
