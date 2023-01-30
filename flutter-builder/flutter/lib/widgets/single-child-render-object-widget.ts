import { identifier } from "../decorations";
import { Key } from "../foundation";
import { RenderObjectWidget } from "./render-object-widget";
import type { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/SingleChildRenderObjectWidget-class.html
 *
 * Widgets are not required to extend from SingleChildRenderObjectWidget, but it is recommended for to match the same interface as flutter does.
 * If the new Widget class is extending from this, you have to remove field `widget` to preventing the override of the `widget` property.
 */
@identifier("SingleChildRenderObjectWidget")
export class SingleChildRenderObjectWidget extends RenderObjectWidget {
  child?: Widget;

  /**
   * https://api.flutter.dev/flutter/widgets/SingleChildRenderObjectWidget/SingleChildRenderObjectWidget.html
   */
  constructor({ key, child }: { key?: Key; child: Widget }) {
    super({ key });
    this.child = child;
  }
}
