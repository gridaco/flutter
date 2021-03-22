import { BuildableTree } from "../builder";
import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { BorderStyle } from "./border-style";

/**
 * https://api.flutter.dev/flutter/painting/BorderSide-class.html
 */
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
}
