import { double } from "../dart";
import { Color } from "../dart-ui";
import { identifier } from "../decorations";
import { Key } from "../foundation";
import { ProgressIndicator } from "./progress-indicator";

/**
 * https://api.flutter.dev/flutter/material/CircularProgressIndicator-class.html
 */
@identifier("CircularProgressIndicator")
export class CircularProgressIndicator extends ProgressIndicator {
  strokeWidth: double;

  /**
   * https://api.flutter.dev/flutter/material/CircularProgressIndicator/CircularProgressIndicator.html
   */
  constructor({
    key,
    value,
    backgroundColor,
    color,
    semanticsLabel,
    semanticsValue,
    strokeWidth = 4.0,
  }: {
    key?: Key;
  } & {
    value?: double;
    backgroundColor?: Color;
    color?: Color;
    // Animation<Color?>? valueColor,
    semanticsLabel?: string;
    semanticsValue?: string;
  } & {
    strokeWidth?: double;
  }) {
    super({
      key,
      value,
      backgroundColor,
      color,
      // valueColor,
      semanticsLabel,
      semanticsValue,
    });

    this.strokeWidth = strokeWidth;
  }
}
