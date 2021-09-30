import { ImageFilter, BlendMode } from "../dart-ui";
import { Key } from "../foundation";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/BackdropFilter-class.html
 */
export class BackdropFilter extends Widget {
  key?: Key;
  filter: ImageFilter;
  child?: Widget;
  blendMode: BlendMode;

  /**
   * https://api.flutter.dev/flutter/widgets/BackdropFilter/BackdropFilter.html
   */
  constructor({
    key,
    filter,
    child,
    blendMode = BlendMode.srcOver,
  }: {
    key?: Key;
    filter: ImageFilter;
    child?: Widget;
    blendMode: BlendMode;
  }) {
    super();

    this.key = key;
    this.filter = filter;
    this.child = child;
    this.blendMode = blendMode;
  }
}
