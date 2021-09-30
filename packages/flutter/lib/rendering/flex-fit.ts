import { EnumClass } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/rendering/FlexFit-class.html
 */
export class FlexFit extends EnumClass {
  /**
   * The child can be at most as large as the available space (but is allowed to be smaller).
   */
  static loose: FlexFit = this.fromStatic("FlexFit.loose");

  /**
   * The child is forced to fill the available space.
   */
  static tight: FlexFit = this.fromStatic("FlexFit.tight");
}
