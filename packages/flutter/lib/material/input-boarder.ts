import { identifier } from "../decorations";
import { BorderSide, ShapeBorder } from "../painting";

/**
 * https://api.flutter.dev/flutter/material/InputBorder-class.html
 */
@identifier("InputBorder")
export class InputBorder extends ShapeBorder {
  borderSide?: BorderSide;

  /**
   * https://api.flutter.dev/flutter/material/InputBorder/InputBorder.html
   */
  constructor(args?: { borderSide?: BorderSide }) {
    super();
    this.borderSide = args?.borderSide;
  }
}
