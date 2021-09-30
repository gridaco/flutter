import { BuildableTree } from "../builder/buildable-tree";
import { double } from "../dart";
import { defaultParam } from "../decorations/params";

/**
 * https://api.flutter.dev/flutter/dart-ui/Offset-class.html
 */
export class Offset extends BuildableTree {
    @defaultParam()
    dx: double
    @defaultParam()
    dy: double

    constructor(dx: double, dy: double) {
        super()
        this.dx = dx
        this.dy = dy;
    }
}