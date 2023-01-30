import { Widget } from "./widget";
import { double } from "../dart";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/Spacer-class.html
 */
@identifier("Spacer")
export class Spacer extends Widget {
  flex: double;
  constructor(args?: { key: Key } & { flex?: double }) {
    super({ key: args?.key });
    this.flex = args?.flex;
  }
}
