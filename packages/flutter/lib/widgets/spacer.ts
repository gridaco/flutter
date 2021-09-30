import { Widget } from "./widget";
import { double } from "../dart";

/**
 * https://api.flutter.dev/flutter/widgets/Spacer-class.html
 */
export class Spacer extends Widget {
  flex: double;
  constructor(args?: { flex?: double }) {
    super();
    this.flex = args?.flex;
  }
}
