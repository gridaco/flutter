import { Widget } from "./widget";
import { double } from "../dart";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/Positioned-class.html
 */
@identifier("Positioned")
export class Positioned extends Widget {
  left?: double;
  top?: double;
  right?: double;
  bottom?: double;
  width?: double;
  height?: double;
  child: Widget;

  constructor({
    key,
    left,
    top,
    right,
    bottom,
    width,
    height,
    child,
  }: { key?: Key } & {
    left?: double;
    top?: double;
    right?: double;
    bottom?: double;
    width?: double;
    height?: double;
    child: Widget;
  }) {
    super({ key });
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.child = child;
  }

  static fill(args: { child: Widget }): Positioned {
    return new Positioned(null)
      .extendWithFactory("fill")
      .overrideArguments<Positioned>(args) as Positioned;
  }

  /**
   * https://api.flutter.dev/flutter/widgets/Positioned/Positioned.directional.html
   */
  static directional() {
    throw "not implemented";
  }
}
