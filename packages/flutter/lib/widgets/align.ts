import type { AlignmentGeometry } from "../painting/alignment-geomatry";
import type { Key } from "../foundation";
import type { double } from "../dart";
import type { Widget } from "./widget";
import { Alignment } from "../painting";
import { SingleChildRenderObjectWidget } from "./single-child-render-object-widget";

/**
 * https://api.flutter.dev/flutter/widgets/Align-class.html
 */
export class Align extends SingleChildRenderObjectWidget {
  alignment?: AlignmentGeometry;
  widthFactor?: double;
  heightFactor?: double;

  /**
   * https://api.flutter.dev/flutter/widgets/Align/Align.html
   */
  constructor({
    key,
    // @default()
    alignment = Alignment.center,
    widthFactor,
    heightFactor,
    child,
  }: { key: Key } & {
    alignment?: AlignmentGeometry;
    widthFactor?: double;
    heightFactor?: double;
    child?: Widget;
  }) {
    super({ key, child });

    this.alignment = alignment;
    this.widthFactor = widthFactor;
    this.heightFactor = heightFactor;
  }
}
