import { EnumClass } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/rendering/WrapCrossAlignment-class.html
 */
export class WrapCrossAlignment extends EnumClass {
  static readonly center: WrapCrossAlignment = this.fromStatic(
    "WrapCrossAlignment.center"
  );
  static readonly end: WrapCrossAlignment = this.fromStatic(
    "WrapCrossAlignment.end"
  );
  static readonly start: WrapCrossAlignment = this.fromStatic(
    "WrapCrossAlignment.start"
  );
}
