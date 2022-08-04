import { BuildableTree } from "../builder/buildable-tree";
import { double } from "../dart";
import { identifier } from "../decorations";
import { defaultParam } from "../decorations/params";

/**
 * https://api.flutter.dev/flutter/dart-ui/Offset-class.html
 */
@identifier("Offset")
export class Offset extends BuildableTree {
  @defaultParam()
  dx: double;
  @defaultParam()
  dy: double;

  constructor(dx: double, dy: double) {
    super();
    this.dx = dx;
    this.dy = dy;
  }
}
