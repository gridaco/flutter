import { Widget } from ".";
import { double } from "../dart";
import { Key } from "../foundation";
import { Alignment, AlignmentGeometry } from "../painting";

/**
 * https://api.flutter.dev/flutter/widgets/OverflowBox-class.html
 */
export class OverflowBox extends Widget {
  readonly key?: Key;
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
  }: {
    key?: Key;
    alignment: AlignmentGeometry;
    minWidth?: double;
    maxWidth?: double;
    minHeight?: double;
    maxHeight?: double;
    child?: Widget;
  }) {
    super();

    this.key = key;
    this.alignment = alignment;
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.child = child;
  }
}
