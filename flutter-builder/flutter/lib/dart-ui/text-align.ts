import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/dart-ui/TextAlign-class.html
 */
@identifier("TextAlign")
export class TextAlign extends Snippet {
  static readonly center = Snippet.fromStatic("TextAlign.center");
  static readonly end = Snippet.fromStatic("TextAlign.end");
  static readonly justify = Snippet.fromStatic("TextAlign.justify");
  static readonly left = Snippet.fromStatic("TextAlign.left");
  static readonly right = Snippet.fromStatic("TextAlign.right");
  static readonly start = Snippet.fromStatic("TextAlign.start");
}
