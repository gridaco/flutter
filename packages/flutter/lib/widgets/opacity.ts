import type { double } from "../dart";
import { identifier } from "../decorations";
import type { Key } from "../foundation";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/Opacity-class.html
 */
@identifier("Opacity")
export class Opacity extends Widget {
  child?: Widget;
  opacity: double;
  constructor({
    key,
    opacity,
    child,
  }: {
    key?: Key;
  } & { opacity: double; child?: Widget }) {
    super({ key });
    this.opacity = opacity;
    this.child = child;
  }
}
