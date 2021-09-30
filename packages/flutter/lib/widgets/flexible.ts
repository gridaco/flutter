import { Widget } from "./widget";
import { Key } from "../foundation";
import { FlexFit } from "../rendering";

/**
 * https://api.flutter.dev/flutter/widgets/Flexible-class.html
 */
export class Flexible extends Widget {
  key?: Key;
  flex?: number;
  fit: FlexFit;
  child: Widget;

  /**
   * https://api.flutter.dev/flutter/widgets/Flexible/Flexible.html
   */
  constructor({
    key,
    flex = 1,
    fit = FlexFit.loose,
    child,
  }: {
    key?: Key;
    flex?: number;
    fit?: FlexFit;
    child: Widget;
  }) {
    super();

    this.key = key;
    this.flex = flex;
    this.fit = fit;
    this.child = child;
  }
}
