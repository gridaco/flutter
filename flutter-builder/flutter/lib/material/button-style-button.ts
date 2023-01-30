import type { Clip, VoidCallback } from "../dart-ui";
import { identifier } from "../decorations";
import { Key, Widget } from "../widgets";
import { ButtonStyle } from "./button-style";

/**
 * https://api.flutter.dev/flutter/material/ButtonStyleButton-class.html
 */
@identifier("ButtonStyleButton")
export class ButtonStyleButton extends Widget {
  onPressed: VoidCallback | undefined | null;
  onLongPress: VoidCallback | undefined | null;
  // onHover;
  // onFocusChange;
  style: ButtonStyle | undefined | null;
  // focusNode;
  autofocus: boolean;
  clipBehavior: Clip;
  child: Widget | undefined | null;
  /**
   * https://api.flutter.dev/flutter/material/ButtonStyleButton/ButtonStyleButton.html
   */
  constructor({
    key,
    onPressed,
    onLongPress,
    style,
    autofocus,
    clipBehavior,
    child,
  }: {
    key?: Key;
  } & {
    onPressed: VoidCallback | undefined | null;
    onLongPress: VoidCallback | undefined | null;
    // onHover: any | undefined | null;
    // onFocusChange: any | undefined | null;
    style: ButtonStyle | undefined | null;
    // // focusNode: FocusNode;
    autofocus: boolean;
    clipBehavior: Clip;
    child: Widget | undefined | null;
  }) {
    super({ key });

    this.onPressed = onPressed;
    this.onLongPress = onLongPress;
    // this.onHover = onHover;
    // this.onFocusChange = onFocusChange;
    this.style = style;
    // this.focusNode = focusNode;
    this.autofocus = autofocus;
    this.clipBehavior = clipBehavior;
    this.child = child;
  }
}
