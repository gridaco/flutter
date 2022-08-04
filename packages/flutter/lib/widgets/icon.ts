import { Widget } from "./widget";
import { double } from "../dart";
import { Color, TextDirection } from "../dart-ui";
import { defaultParam } from "../decorations/params";
import { IconData } from "./icon-data";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/Icon-class.html
 */
@identifier("Icon")
export class Icon extends Widget {
  @defaultParam()
  icon: IconData;

  size?: double;
  color?: Color;
  semanticLabel?: string;
  textDirection?: TextDirection;

  /**
   * https://api.flutter.dev/flutter/widgets/Icon/Icon.html
   */
  constructor(
    icon: IconData,
    args?: {
      key?: Key;
      size?: double;
      color?: Color;
      semanticLabel?: string;
      textDirection?: TextDirection;
    }
  ) {
    super({ key: args?.key });
    this.icon = icon;

    this.size = args?.size;
    this.color = args?.color;
    this.semanticLabel = args?.semanticLabel;
    this.textDirection = args?.textDirection;
  }
}
