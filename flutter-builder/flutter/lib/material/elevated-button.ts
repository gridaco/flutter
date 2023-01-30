import { Clip, Color, Size, VoidCallback } from "../dart-ui";
import { Widget } from "../widgets";
import { Key } from "../foundation";
import { identifier } from "../decorations";
import { ButtonStyleButton } from "./button-style-button";
import { ButtonStyle } from "./button-style";
import type {
  AlignmentGeometry,
  BorderSide,
  EdgeInsetsGeometry,
  ShapeBorder,
  TextStyle,
} from "../painting";
import { MaterialTapTargetSize } from "./material-tap-target-size";
import { double } from "../dart";

/**
 * https://api.flutter.dev/flutter/material/ElevatedButton-class.html
 *
 *
 * @example
 * ```dart
 * final ButtonStyle style = ElevatedButton.styleFrom(textStyle: const TextStyle(fontSize: 20));
 *
 * ElevatedButton(
 *  style: style,
 *  onPressed: null,
 *  child: const Text('Disabled'),
 * );
 *
 * ElevatedButton(
 *  style: style,
 *  onPressed: () {},
 *  child: const Text('Enabled'),
 * );
 * ```
 */
@identifier("ElevatedButton")
export class ElevatedButton extends ButtonStyleButton {
  /**
   * https://api.flutter.dev/flutter/material/ElevatedButton/ElevatedButton.html
   */
  constructor({
    key,
    onPressed,
    onLongPress,
    autofocus, //  = false,
    style,
    clipBehavior, // = Clip.none
    child,
  }: { key?: Key } & {
    onPressed: VoidCallback;
    onLongPress?: VoidCallback;
    autofocus?: boolean;
    clipBehavior?: Clip;
    style?: ButtonStyle;
    child: Widget;
  }) {
    super({
      key,
      onPressed,
      onLongPress,
      autofocus,
      clipBehavior,
      style,
      child,
    });
  }

  static icon(): ElevatedButton {
    throw "not implemented";
  }

  /**
   * https://api.flutter.dev/flutter/material/ElevatedButton/styleFrom.html
   */
  static styleFrom(args: {
    primary?: Color;
    onPrimary?: Color;
    onSurface?: Color;
    shadowColor?: Color;
    surfaceTintColor?: Color;
    elevation?: double;
    textStyle?: TextStyle;
    padding?: EdgeInsetsGeometry;
    minimumSize?: Size;
    fixedSize?: Size;
    maximumSize?: Size;
    side?: BorderSide;
    shape?: ShapeBorder;
    // enabledMouseCursor;
    // disabledMouseCursor:;
    // visualDensity: ;
    tapTargetSize?: MaterialTapTargetSize;
    animationDuration?: any; //Duration;
    enableFeedback?: boolean;
    alignment?: AlignmentGeometry;
    splashFactory?;
  }) {
    return new ElevatedButton({
      key: undefined,
      child: undefined,
      onPressed: undefined,
    })
      .extendWithFactory("styleFrom")
      .overrideArguments(args) as ButtonStyle;
  }
}
