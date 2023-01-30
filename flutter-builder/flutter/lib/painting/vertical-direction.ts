import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/painting/VerticalDirection-class.html
 */
@identifier("VerticalDirection")
export class VerticalDirection extends Snippet {
  static readonly down: VerticalDirection = Snippet.fromStatic(
    "VerticalDirection.down"
  );
  static readonly up: VerticalDirection = Snippet.fromStatic(
    "VerticalDirection.up"
  );
}
