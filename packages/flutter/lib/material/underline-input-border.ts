import { InputBorder } from "./input-boarder";
import type { BorderRadius } from "../painting/border-radius";
import type { BorderSide } from "../painting/border-side";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/material/UnderlineInputBorder-class.html
 */
@identifier("UnderlineInputBorder")
export class UnderlineInputBorder extends InputBorder {
  borderSide?: BorderSide;
  borderRadius?: BorderRadius;

  /**
   * https://api.flutter.dev/flutter/material/UnderlineInputBorder/UnderlineInputBorder.html
   * @param args
   */
  constructor(args?: { borderSide?: BorderSide; borderRadius?: BorderRadius }) {
    super();

    this.borderSide = args?.borderSide;
    this.borderRadius = args?.borderRadius;
  }
}
