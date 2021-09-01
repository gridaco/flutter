import { Widget } from ".";
import { double } from "@coli.codes/dart-builder";

/**
 * https://api.flutter.dev/flutter/widgets/Positioned-class.html
 */
export class Positioned extends Widget {
  left?: double;
  top?: double;
  right?: double;
  bottom?: double;
  width?: double;
  height?: double;
  child: Widget;

  constructor(args: {
    left?: double;
    top?: double;
    right?: double;
    bottom?: double;
    width?: double;
    height?: double;
    child: Widget;
  }) {
    super();
    this.left = args?.left;
    this.top = args?.top;
    this.right = args?.right;
    this.bottom = args?.bottom;
    this.width = args?.width;
    this.height = args?.height;
    this.child = args?.child;
  }

  static fill(args: { child: Widget }): Positioned {
    return new Positioned(null)
      .extendWithFactory("fill")
      .overrideArguments<Positioned>(args) as Positioned;
  }
}
