import { Gradient } from "./gradient";
import type { AlignmentGeometry } from "./alignment-geomatry";
import type { double } from "../dart";
import type { Color, TileMode } from "../dart-ui";
import type { GradientTransform } from "./gradient-transform";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/painting/RadialGradient-class.html
 */
@identifier("RadialGradient")
export class RadialGradient extends Gradient {
  center?: AlignmentGeometry;
  radius?: double;
  colors: Array<Color>;
  stops: Array<double>;
  tileMode?: TileMode;
  focal?: AlignmentGeometry;
  focalRadius?: double;
  transform?: GradientTransform;

  constructor(args: {
    center?: AlignmentGeometry;
    radius?: double;
    colors: Array<Color>;
    stops: Array<double>;
    tileMode?: TileMode;
    focal?: AlignmentGeometry;
    focalRadius?: double;
    transform?: GradientTransform;
  }) {
    super();
    this.center = args.center;
    this.radius = args.radius;
    this.colors = args.colors;
    this.stops = args.stops;
    this.tileMode = args.tileMode;
    this.focal = args.focal;
    this.focalRadius = args.focalRadius;
    this.transform = args.transform;
  }
}
