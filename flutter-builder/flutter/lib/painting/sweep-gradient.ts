import { Gradient } from "./gradient";
import type { AlignmentGeometry, GradientTransform } from ".";
import type { double } from "../dart";
import type { Color, TileMode } from "../dart-ui";
import { identifier } from "../decorations";

@identifier("SweepGradient")
export class SweepGradient extends Gradient {
  center: AlignmentGeometry;
  startAngle: double;
  endAngle: double;
  colors: Array<Color>;
  stops: Array<double>;
  tileMode: TileMode;
  transform: GradientTransform;

  constructor() {
    super();
  }
}
