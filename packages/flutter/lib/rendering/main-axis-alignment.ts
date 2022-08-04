import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html
 */
@identifier("MainAxisAlignment")
export class MainAxisAlignment extends Snippet {
  static readonly center = Snippet.fromStatic("MainAxisAlignment.center");
  static readonly end = Snippet.fromStatic("MainAxisAlignment.end");
  static readonly spaceAround = Snippet.fromStatic(
    "MainAxisAlignment.spaceAround"
  );
  static readonly spaceBetween = Snippet.fromStatic(
    "MainAxisAlignment.spaceBetween"
  );
  static readonly spaceEvenly = Snippet.fromStatic(
    "MainAxisAlignment.spaceEvenly"
  );
  static readonly start = Snippet.fromStatic("MainAxisAlignment.start");
}
