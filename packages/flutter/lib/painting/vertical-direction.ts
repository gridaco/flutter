import { Snippet } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/painting/VerticalDirection-class.html
 */
export class VerticalDirection extends Snippet {
  static readonly down: VerticalDirection = Snippet.fromStatic(
    "VerticalDirection.down"
  );
  static readonly up: VerticalDirection = Snippet.fromStatic(
    "VerticalDirection.up"
  );
}
