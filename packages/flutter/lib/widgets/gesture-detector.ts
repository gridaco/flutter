import { Key } from "../foundation";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/GestureDetector-class.html
 */
export class GestureDetector extends Widget {
  child: Widget;
  // TODO
  onTap?: any;
  onDoubleTap?: any;
  onLongPress?: any;
  constructor({
    key,
    onTap,
    onDoubleTap,
    onLongPress,
    child,
  }: { key?: Key } & {
    onTap?: any;
    onDoubleTap?: any;
    onLongPress?: any;
    child: Widget;
  }) {
    super({ key });
    this.child = child;
    this.onTap = onTap;
    this.onDoubleTap = onDoubleTap;
    this.onLongPress = onLongPress;
  }
}
