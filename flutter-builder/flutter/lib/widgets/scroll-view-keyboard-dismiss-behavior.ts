import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/widgets/ScrollViewKeyboardDismissBehavior-class.html
 */
export class ScrollViewKeyboardDismissBehavior extends EnumClass {
  public static manual: ScrollViewKeyboardDismissBehavior =
    EnumField.fromStatic("ScrollViewKeyboardDismissBehavior.manual");
  public static onDrag: ScrollViewKeyboardDismissBehavior =
    EnumField.fromStatic("ScrollViewKeyboardDismissBehavior.onDrag");
}
