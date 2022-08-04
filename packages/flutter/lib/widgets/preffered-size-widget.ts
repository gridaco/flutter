/**
 * https://api.flutter.dev/flutter/widgets/PreferredSizeWidget-class.html
 */

import { identifier } from "../decorations";
import type { Key } from "../foundation";
import { Widget } from "./widget";

@identifier("PreferredSizeWidget")
export class PreferredSizeWidget extends Widget {
  constructor(args?: { key?: Key }) {
    super({ key: args?.key });
  }
}
