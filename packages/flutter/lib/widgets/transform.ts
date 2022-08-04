import { Widget } from "./widget";
import { double } from "../dart";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/Transform-class.html
 */
@identifier("Transform")
export class Transform extends Widget {
  constructor(args?: { key?: Key }) {
    super({ key: args?.key });
  }

  static rotate(args: { key?: Key; angle: double; child?: Widget }): Transform {
    return new Transform().extendWithFactory("rotate").overrideArguments(args);
  }
}
