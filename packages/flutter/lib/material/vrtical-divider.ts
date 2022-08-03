import type { double } from "../dart";
import type { Key } from "../foundation";
import type { Color } from "../dart-ui";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/material/VerticalDivider-class.html
 */
export class VerticalDivider extends Widget {
  width: double;
  thickness: double;
  indent?: double;
  endIndent?: double;
  color: Color;
  /**
   * https://api.flutter.dev/flutter/material/VerticalDivider/VerticalDivider.html
   */
  constructor({
    key,
    width,
    thickness,
    indent,
    endIndent,
    color,
  }: { key: Key } & {
    width: double;
    thickness: double;
    indent?: double;
    endIndent?: double;
    color: Color;
  }) {
    super({ key });
    this.width = width;
    this.thickness = thickness;
    this.indent = indent;
    this.endIndent = endIndent;
    this.color = color;
  }
}
