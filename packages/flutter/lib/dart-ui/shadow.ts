import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { Offset } from "../dart-ui/offset";

/**
 * https://api.flutter.dev/flutter/dart-ui/Shadow-class.html
 */

export class Shadow {
  color?: Color;
  offset?: Offset;
  blurRadius?: double;
  spreadRadius?: double;
}
