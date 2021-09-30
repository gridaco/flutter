import type { TextStyle } from "./text-style";
import { BuildableTree } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/painting/InlineSpan-class.html
 */
export class InlineSpan extends BuildableTree {
  style?: TextStyle;
  constructor(props: { style?: TextStyle }) {
    super();
    this.style = props.style;
  }
}
