import { Widget } from "../widgets";
import { double } from "../dart";
import { Color } from "../dart-ui";

/**
 * https://api.flutter.dev/flutter/material/Divider-class.html
 */
export class Divider extends Widget {
  height: double;
  thickness: double;
  indent?: double;
  endIndent?: double;
  color: Color;
  constructor(args: {
    height: double;
    thickness: double;
    indent?: double;
    endIndent?: double;
    color: Color;
  }) {
    super();
    this.height = args.height;
    this.thickness = args.thickness;
    this.indent = args.indent;
    this.endIndent = args.endIndent;
    this.color = args.color;
  }
}
