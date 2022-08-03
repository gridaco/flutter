import { ImageFilter } from "../dart-ui";
import { Key } from "../foundation";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/ImageFiltered-class.html
 */
export class ImageFiltered extends Widget {
  imageFilter: ImageFilter;
  child?: Widget;

  /**
   * https://api.flutter.dev/flutter/widgets/ImageFiltered/ImageFiltered.html
   */
  constructor({
    key,
    imageFilter,
    child,
  }: { key?: Key } & {
    imageFilter: ImageFilter;
    child?: Widget;
  }) {
    super({ key });

    this.imageFilter = imageFilter;
    this.child = child;
  }
}
