import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/Visibility-class.html
 */
export class Visibility extends Widget {
  child: Widget;
  visible: boolean = true;
  constructor(args: { child: Widget; visible: boolean }) {
    super();
    this.child = args.child;
    this.visible = args.visible;
  }
}
