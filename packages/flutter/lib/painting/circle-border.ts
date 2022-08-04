import { identifier } from "../decorations";
import { BorderSide } from "./border-side";
import { ShapeBorder } from "./shape-border";

/**
 * https://api.flutter.dev/flutter/painting/CircleBorder-class.html
 */
@identifier("CircleBorder")
export class CircleBorder extends ShapeBorder {
  side?: BorderSide;
  constructor(args?: { side?: BorderSide }) {
    super();
    this.side = args.side;
  }
}
