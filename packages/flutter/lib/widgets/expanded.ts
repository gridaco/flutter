import { Widget } from "./widget";
import assert from "assert";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/Expanded-class.html
 */
@identifier("Expanded")
export class Expanded extends Widget {
  child: Widget;
  flex: number;

  /**
   * https://api.flutter.dev/flutter/widgets/Expanded/Expanded.html
   */
  constructor({
    key,
    flex = 1,
    child,
  }: { key?: Key } & { flex?: number; child: Widget }) {
    super({ key });

    assert(child);

    this.child = child;
    this.flex = flex;
  }
}
