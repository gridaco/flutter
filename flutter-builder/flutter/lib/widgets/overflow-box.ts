import { Widget } from "./widget";
import { double } from "../dart";
import { Key } from "../foundation";
import { Alignment, AlignmentGeometry } from "../painting";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/OverflowBox-class.html
 */
@identifier("OverflowBox")
export class OverflowBox extends Widget {
  readonly alignment: AlignmentGeometry;
  readonly minWidth?: double;
  readonly maxWidth?: double;
  readonly minHeight?: double;
  readonly maxHeight?: double;
  readonly child?: Widget;

  /**
   * https://api.flutter.dev/flutter/widgets/OverflowBox/OverflowBox.html
   */
  constructor({
    key,
    alignment = Alignment.center as Alignment,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    child,
  }: { key?: Key } & {
    alignment: AlignmentGeometry;
    minWidth?: double;
    maxWidth?: double;
    minHeight?: double;
    maxHeight?: double;
    child?: Widget;
  }) {
    super({ key });

    this.alignment = alignment;
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.child = child;
  }
}
