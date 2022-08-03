import { double } from "../dart";
import { Key } from "../foundation";
import { Align } from "./align";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/Center-class.html
 */
export class Center extends Align {
  /**
   * https://api.flutter.dev/flutter/widgets/Center/Center.html
   */
  constructor({
    key,
    widthFactor,
    heightFactor,
    child,
  }: {
    key?: Key;
    widthFactor?: double;
    heightFactor?: double;
    child: Widget;
  }) {
    super({
      key: key,
      widthFactor: widthFactor,
      heightFactor: heightFactor,
      child: child,
    });
  }
}
