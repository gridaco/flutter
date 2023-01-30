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
 * https://api.flutter.dev/flutter/material/TextButton-class.html
 */
@identifier("TextButton")
export class TextButton extends ButtonStyleButton {
  /**
   * https://api.flutter.dev/flutter/material/TextButton/TextButton.html
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

  /**
   * https://api.flutter.dev/flutter/material/TextButton/TextButton.icon.html
   */
  static icon(args: {
    // textTheme?: ButtonTextTheme
    onPressed: VoidCallback;
    textColor?: Color;
    disabledTextColor?: Color;
    color?: Color;
    disabledColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    padding?: EdgeInsetsGeometry;
    shape?: ShapeBorder;
    // clipBehavior?: Clip,
    // focusNode?: FocusNode,
    autofocus?: boolean;
    icon: Widget;
    label: Widget;
    minWidth?: double;
    height?: double;
  }): TextButton {
    return new TextButton(undefined)
      .extendWithFactory("icon")
      .overrideArguments(args);
  }

  /**
   * https://api.flutter.dev/flutter/material/TextButton/styleFrom.html
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
    return new TextButton({
      key: undefined,
      child: undefined,
      onPressed: undefined,
    })
      .extendWithFactory("styleFrom")
      .overrideArguments(args) as ButtonStyle;
  }
}
