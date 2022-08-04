import { identifier } from "../decorations";
import { BorderRadiusGeometry } from "./border-radius-geomatry";
import { BorderSide } from "./border-side";
import { ShapeBorder } from "./shape-border";

/**
 * https://api.flutter.dev/flutter/painting/RoundedRectangleBorder-class.html
 */
@identifier("RoundedRectangleBorder")
export class RoundedRectangleBorder extends ShapeBorder {
  side?: BorderSide;
  borderRadius?: BorderRadiusGeometry;
  constructor(args?: {
    side?: BorderSide;
    borderRadius?: BorderRadiusGeometry;
  }) {
    super();
    this.side = args?.side;
    this.borderRadius = args?.borderRadius;
  }
}
