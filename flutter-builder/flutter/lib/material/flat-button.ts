import { double } from "../dart";
import { Color, VoidCallback } from "../dart-ui";
import { identifier } from "../decorations";
import { Key } from "../foundation";
import { EdgeInsetsGeometry, ShapeBorder } from "../painting";
import { Widget } from "../widgets";
import { MaterialButton } from "./material-button";

/**
 * https://api.flutter.dev/flutter/material/FlatButton-class.html
 * @deprecated Use [TextButton] instead.
 */
@identifier("FlatButton")
export class FlatButton extends MaterialButton {
  declare onPressed: VoidCallback;
  child: Widget;
  onLongPress?: VoidCallback;
  textColor?: Color;
  disabledTextColor?: Color;
  color?: Color;
  disabledColor?: Color;
  focusColor?: Color;
  hoverColor?: Color;
  highlightColor?: Color;
  splashColor?: Color;
  shape?: ShapeBorder;
  height?: double;
  minWidth?: double;

  /**
   * https://api.flutter.dev/flutter/material/FlatButton/FlatButton.html
   */
  constructor({
    key,
    ...args
  }: { key?: Key } & {
    onPressed: VoidCallback;
    child: Widget;
    onLongPress?: VoidCallback;
    textColor?: Color;
    disabledTextColor?: Color;
    color?: Color;
    disabledColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    shape?: ShapeBorder;
    height?: double;
    minWidth?: double;
  }) {
    super({ key });

    this.onPressed = args?.onPressed;
    this.child = args?.child;
    this.onLongPress = args?.onLongPress;
    this.textColor = args?.textColor;
    this.disabledTextColor = args?.disabledTextColor;
    this.color = args?.color;
    this.disabledColor = args?.disabledColor;
    this.focusColor = args?.focusColor;
    this.hoverColor = args?.hoverColor;
    this.highlightColor = args?.highlightColor;
    this.splashColor = args?.splashColor;
    this.shape = args?.shape;
    this.height = args?.height;
    this.minWidth = args?.minWidth;
  }

  /**
   * https://api.flutter.dev/flutter/material/FlatButton/FlatButton.icon.html
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
  }): FlatButton {
    return new FlatButton(undefined)
      .extendWithFactory("icon")
      .overrideArguments(args);
  }
}
