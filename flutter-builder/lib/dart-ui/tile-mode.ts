import { EnumClass, EnumField } from "@coli.codes/builder/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/dart-ui/TileMode-class.html
 */
export class TileMode extends EnumClass {
  static readonly clamp = EnumField.fromStatic("TileMode.clamp");
  static readonly mirror = EnumField.fromStatic("TileMode.mirror");
  static readonly repeated = EnumField.fromStatic("TileMode.repeated");
}
