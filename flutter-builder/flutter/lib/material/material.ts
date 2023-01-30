import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { identifier } from "../decorations";
import type { Key } from "../foundation";
import { TextStyle } from "../painting";
import { BorderRadiusGeometry } from "../painting/border-radius-geomatry";
import { ShapeBorder } from "../painting/shape-border";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/material/Material-class.html
 */
@identifier("Material")
export class Material extends Widget {
  elevation?: double;
  color?: Color;
  shadowColor?: Color;
  textStyle?: TextStyle;
  borderRadius?: BorderRadiusGeometry;
  shape?: ShapeBorder;
  child?: Widget;

  constructor({
    key,
    elevation,
    color,
    shadowColor,
    textStyle,
    borderRadius,
    shape,
    child,
  }: { key?: Key } & {
    elevation?: double;
    color?: Color;
    shadowColor?: Color;
    textStyle?: TextStyle;
    borderRadius?: BorderRadiusGeometry;
    shape?: ShapeBorder;
    child?: Widget;
  }) {
    super({ key });
    this.elevation = elevation;
    this.color = color;
    this.shadowColor = shadowColor;
    this.textStyle = textStyle;
    this.borderRadius = borderRadius;
    this.shape = shape;
    this.child = child;
  }
}
