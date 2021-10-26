import { BuildableTree } from "../builder/buildable-tree";
import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { Offset } from "../dart-ui/offset";

/**
 * https://api.flutter.dev/flutter/dart-ui/Shadow-class.html
 */

export class Shadow extends BuildableTree {
  color?: Color;
  offset?: Offset;
  blurRadius?: double;
  spreadRadius?: double;

  constructor(args: {
    color?: Color;
    offset?: Offset;
    blurRadius?: double;
    spreadRadius?: double;
  }) {
    super();
    this.color = args?.color;
    this.offset = args?.offset;
    this.blurRadius = args?.blurRadius;
    this.spreadRadius = args?.spreadRadius;
  }
}
