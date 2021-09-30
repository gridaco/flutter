import { InputBorder } from "./input-boarder";
import { double } from "../dart/double";
import { BorderRadius } from "../painting/border-radius";
import { BorderSide } from "../painting/border-side";

/**
 * https://api.flutter.dev/flutter/material/OutlineInputBorder-class.html
 */
export class OutlineInputBorder extends InputBorder {
  borderSide?: BorderSide;
  borderRadius?: BorderRadius;
  gapPadding?: double;

  /**
   * https://api.flutter.dev/flutter/material/OutlineInputBorder/OutlineInputBorder.html
   * @param args
   */
  constructor(args?: {
    borderSide?: BorderSide;
    borderRadius?: BorderRadius;
    gapPadding?: double;
  }) {
    super();

    this.borderSide = args?.borderSide;
    this.borderRadius = args?.borderRadius;
    this.gapPadding = args?.gapPadding;
  }
}
