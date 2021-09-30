import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/dart-ui/Clip-class.html
 */
export class Clip extends EnumClass {
  static antiAlias: EnumField = EnumField.fromStatic("Clip.antiAlias");
  static antiAliasWithSaveLayer: EnumField = EnumField.fromStatic(
    "Clip.antiAliasWithSaveLayer"
  );
  static hardEdge: EnumField = EnumField.fromStatic("Clip.hardEdge");
  static none: EnumField = EnumField.fromStatic("Clip.none");
}
