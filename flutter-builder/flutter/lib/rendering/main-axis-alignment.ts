import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html
 */
@identifier("MainAxisAlignment")
export class MainAxisAlignment extends Snippet {
  static readonly center = Snippet.fromStatic(
    "MainAxisAlignment.center"
  ) as MainAxisAlignment;
  static readonly end = Snippet.fromStatic(
    "MainAxisAlignment.end"
  ) as MainAxisAlignment;
  static readonly spaceAround = Snippet.fromStatic(
    "MainAxisAlignment.spaceAround"
  ) as MainAxisAlignment;
  static readonly spaceBetween = Snippet.fromStatic(
    "MainAxisAlignment.spaceBetween"
  ) as MainAxisAlignment;
  static readonly spaceEvenly = Snippet.fromStatic(
    "MainAxisAlignment.spaceEvenly"
  ) as MainAxisAlignment;
  static readonly start = Snippet.fromStatic(
    "MainAxisAlignment.start"
  ) as MainAxisAlignment;
}
