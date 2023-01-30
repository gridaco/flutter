import { double } from "../dart";
import { Color } from "../dart-ui";
import { identifier } from "../decorations";
import { Key } from "../foundation";
import { ProgressIndicator } from "./progress-indicator";

/**
 * https://api.flutter.dev/flutter/material/LinearProgressIndicator-class.html
 */
@identifier("LinearProgressIndicator")
export class LinearProgressIndicator extends ProgressIndicator {
  /**
   * https://api.flutter.dev/flutter/material/LinearProgressIndicator/LinearProgressIndicator.html
   */
  constructor({
    key,
    value,
    backgroundColor,
    color,
    semanticsLabel,
    semanticsValue,
  }: {
    key?: Key;
  } & {
    value?: double;
    backgroundColor?: Color;
    color?: Color;
    // Animation<Color?>? valueColor,
    semanticsLabel?: string;
    semanticsValue?: string;
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
  }
}
