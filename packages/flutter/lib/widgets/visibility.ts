import type { Key } from "../foundation";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/Visibility-class.html
 */
export class Visibility extends Widget {
  child: Widget;
  // @default()
  replacement: Widget;
  visible: boolean;
  // @default(false)
  maintainState?: boolean;
  // @default(false)
  maintainAnimation?: boolean;
  // @default(false)
  maintainSize?: boolean;
  // @default(false)
  maintainSemantics?: boolean;
  // @default(false)
  maintainInteractivity?: boolean;

  /**
   * https://api.flutter.dev/flutter/widgets/Visibility/Visibility.html
   */
  constructor({
    key,
    child,
    visible = true,
    replacement, // = SizedBox.shrink(),
    maintainState = false,
    maintainAnimation = false,
    maintainSize = false,
    maintainSemantics = false,
    maintainInteractivity = false,
  }: {
    key?: Key;
  } & {
    child: Widget;
    replacement?: Widget;
    visible: boolean;
    maintainState?: boolean;
    maintainAnimation?: boolean;
    maintainSize?: boolean;
    maintainSemantics?: boolean;
    maintainInteractivity?: boolean;
  }) {
    super({ key });
    this.child = child;
    this.replacement = replacement;
    this.visible = visible;
    this.maintainState = maintainState;
    this.maintainAnimation = maintainAnimation;
    this.maintainSize = maintainSize;
    this.maintainSemantics = maintainSemantics;
    this.maintainInteractivity = maintainInteractivity;
  }
}
