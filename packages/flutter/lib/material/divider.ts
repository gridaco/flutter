import { Widget } from "../widgets";
import type { double } from "../dart";
import type { Color } from "../dart-ui";
import type { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/material/Divider-class.html
 */
@identifier("Divider")
export class Divider extends Widget {
  height: double;
  thickness: double;
  indent?: double;
  endIndent?: double;
  color: Color;
  constructor({
    key,
    height,
    thickness,
    indent,
    endIndent,
    color,
  }: { key?: Key } & {
    height: double;
    thickness: double;
    indent?: double;
    endIndent?: double;
    color: Color;
  }) {
    super({ key });
    this.height = height;
    this.thickness = thickness;
    this.indent = indent;
    this.endIndent = endIndent;
    this.color = color;
  }
}
