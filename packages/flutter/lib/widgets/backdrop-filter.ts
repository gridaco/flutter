import type { Key } from "../foundation";
import type { Widget } from "./widget";
import { ImageFilter, BlendMode } from "../dart-ui";
import { SingleChildRenderObjectWidget } from "./single-child-render-object-widget";

/**
 * https://api.flutter.dev/flutter/widgets/BackdropFilter-class.html
 */
export class BackdropFilter extends SingleChildRenderObjectWidget {
  key?: Key;
  filter: ImageFilter;
  blendMode: BlendMode;

  /**
   * https://api.flutter.dev/flutter/widgets/BackdropFilter/BackdropFilter.html
   */
  constructor({
    key,
    filter,
    child,
    blendMode = BlendMode.srcOver,
  }: { key?: Key } & {
    filter: ImageFilter;
    child?: Widget;
    blendMode: BlendMode;
  }) {
    super({ key, child });

    this.filter = filter;
    this.child = child;
    this.blendMode = blendMode;
  }
}
