import { Widget } from "./widget";
import { EdgeInsetsGeometry } from "../painting/edge-insets-geometry";
import { Key } from "../foundation";

/**
 * https://api.flutter.dev/flutter/widgets/Padding-class.html
 */
export class Padding extends Widget {
  padding: EdgeInsetsGeometry;
  child?: Widget;
  constructor({
    key,
    padding,
    child,
  }: {
    key?: Key;
    padding: EdgeInsetsGeometry;
    child?: Widget;
  }) {
    super({ key });
    this.padding = padding;
    this.child = child;
  }
}
