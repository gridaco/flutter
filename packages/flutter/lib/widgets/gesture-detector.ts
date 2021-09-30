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
  constructor(args: {
    child: Widget;
    onTap?: any;
    onDoubleTap?: any;
    onLongPress?: any;
  }) {
    super();
    this.child = args.child;
    this.onTap = args.onTap;
    this.onDoubleTap = args.onDoubleTap;
    this.onLongPress = args.onLongPress;
  }
}
