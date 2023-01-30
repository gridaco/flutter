import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/rendering/CrossAxisAlignment-class.html
 */
@identifier("CrossAxisAlignment")
export class CrossAxisAlignment extends Snippet {
  static readonly baseline = new Snippet("CrossAxisAlignment.baseline");
  static readonly center = new Snippet("CrossAxisAlignment.center");
  static readonly end = new Snippet("CrossAxisAlignment.end");
  static readonly start = new Snippet("CrossAxisAlignment.start");
  static readonly stretch = new Snippet("CrossAxisAlignment.stretch");
}
