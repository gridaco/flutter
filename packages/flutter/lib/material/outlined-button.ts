import { Clip, Color, Size, VoidCallback } from "../dart-ui";
import { identifier } from "../decorations";
import { Key } from "../foundation";
import { Widget } from "../widgets";
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
import { ButtonStyleButton } from "./button-style-button";

/**
 * https://api.flutter.dev/flutter/material/OutlinedButton-class.html
 */
@identifier("OutlinedButton")
export class OutlinedButton extends ButtonStyleButton {
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

  // TODO:
  static icon() {
    throw new Error("Not implemented");
  }

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
    return new OutlinedButton({
      key: undefined,
      child: undefined,
      onPressed: undefined,
    })
      .extendWithFactory("styleFrom")
      .overrideArguments(args) as ButtonStyle;
  }
}
