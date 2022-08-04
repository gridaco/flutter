import { BuildableTree } from "../builder/buildable-tree";
import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { identifier } from "../decorations";
import { BorderStyle } from "./border-style";

/**
 * https://api.flutter.dev/flutter/painting/BorderSide-class.html
 */
@identifier("BorderSide")
export class BorderSide extends BuildableTree {
  color?: Color;
  width?: double;
  style?: BorderStyle;
  constructor(args?: { color?: Color; width?: double; style?: BorderStyle }) {
    super();
    this.color = args?.color;
    this.width = args?.width;
    this.style = args?.style;
  }

  /**
   * https://api.flutter.dev/flutter/painting/BorderSide/none-constant.html
   */
  static get none() {
    return none;
  }
}

/**
 * https://api.flutter.dev/flutter/painting/BorderSide/none-constant.html
 */
const none = new BorderSide({
  width: 0.0,
  style: BorderStyle.none,
});
