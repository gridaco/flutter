import { double } from "../dart";
import { Color } from "../dart-ui";
import { identifier } from "../decorations";
import { Key, Widget } from "../widgets";

@identifier("ProgressIndicator")
export class ProgressIndicator extends Widget {
  /**
   * The progress indicator's background color.
   */
  readonly backgroundColor?: Color;

  /**
   * The progress indicator's color.
   */
  readonly color?: Color;

  /**
   * If non-null, the value of this progress indicator.
   */
  readonly value?: double;
  // Animation<Color?>? valueColor,

  /**
   * The SemanticsProperties.label for this progress indicator.
   */
  readonly semanticsLabel?: string;

  /**
   * The SemanticsProperties.value for this progress indicator.
   */
  readonly semanticsValue?: string;

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
    super({ key });
    this.value = value;
    this.backgroundColor = backgroundColor;
    this.color = color;
    // this.valueColor = valueColor;
    this.semanticsLabel = semanticsLabel;
    this.semanticsValue = semanticsValue;
  }
}
