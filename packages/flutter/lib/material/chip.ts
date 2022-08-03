import type { MaterialButton } from "./material-button";
import type { double } from "../dart";
import type { Color, VoidCallback } from "../dart-ui";
import type { ShapeBorder, TextStyle } from "../painting";
import { Widget } from "../widgets/widget";
import type { Key } from "../foundation";

/**
 * https://api.flutter.dev/flutter/material/Chip-class.html
 */
export class Chip extends Widget {
  // onSelected?: VoidCallback
  onDeleted?: VoidCallback;
  deleteIcon?: Widget;
  avartar?: Widget;
  label: Widget;
  labelStyle?: TextStyle;
  backgroundColor?: Color;
  splashColor?: Color;
  shape?: ShapeBorder;
  // height?: double

  /**
   *  https://api.flutter.dev/flutter/material/Chip/Chip.html
   */
  constructor({
    key,
    onDeleted,
    deleteIcon,
    avartar,
    label,
    labelStyle,
    backgroundColor,
    splashColor,
    shape,
  }: { key?: Key } & {
    // onSelected?: VoidCallback
    onDeleted?: VoidCallback;
    deleteIcon?: Widget;
    avartar?: Widget;
    label: Widget;
    labelStyle?: TextStyle;
    backgroundColor?: Color;
    splashColor?: Color;
    shape?: ShapeBorder;
    // height?: double
  }) {
    super({ key });
    // this.onSelected = args?.onSelected
    this.onDeleted = onDeleted;
    this.deleteIcon = deleteIcon;
    this.avartar = avartar;
    this.label = label;
    this.labelStyle = labelStyle;
    this.backgroundColor = backgroundColor;
    this.splashColor = splashColor;
    this.shape = shape;
    // this.height = args?.height
  }
}
