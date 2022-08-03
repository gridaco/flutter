/**
 * https://api.flutter.dev/flutter/widgets/PreferredSizeWidget-class.html
 */

import type { Key } from "../foundation";
import { Widget } from "./widget";

export class PreferredSizeWidget extends Widget {
  constructor(args?: { key?: Key }) {
    super({ key: args?.key });
  }
}
