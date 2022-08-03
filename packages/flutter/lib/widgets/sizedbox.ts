import { Widget } from "./widget";
import { Double, double } from "../dart/double";
import { Size } from "../dart-ui/size";
import { Snippet } from "../builder/buildable-tree";
import { Key } from "../foundation";
/**
 * https://api.flutter.dev/flutter/widgets/SizedBox-class.html
 */
export class SizedBox extends Widget {
  width: double;
  height: double;
  child: Widget;
  constructor({
    key,
    child,
    width,
    height,
  }: {
    key?: Key;
  } & { child?: Widget; width?: double; height?: double }) {
    super({ key });
    this.child = child;
    this.width = width;
    this.height = height;
  }

  static expand(child: Widget) {
    return new SizedBox({
      child: child,
      width: Double.infinity as Snippet,
      height: Double.infinity as Snippet,
    });
  }

  static shrink(child?: Widget) {
    return new SizedBox({
      child: child,
      width: 0.0,
      height: 0.0,
    });
  }

  static fromSize(args: { child: Widget; size: Size }) {
    return new SizedBox({
      child: args.child,
      width: args.size.width,
      height: args.size.height,
    });
  }
}
