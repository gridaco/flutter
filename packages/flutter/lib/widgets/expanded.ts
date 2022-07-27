import { Widget } from "./widget";
import assert from "assert";

/**
 * https://api.flutter.dev/flutter/widgets/Expanded-class.html
 */
export class Expanded extends Widget {
  child: Widget;
  flex: number;

  /**
   * https://api.flutter.dev/flutter/widgets/Expanded/Expanded.html
   */
  constructor({ flex = 1, child }: { flex?: number; child: Widget }) {
    super();

    assert(child);

    this.child = child;
    this.flex = flex;
  }
}
