import { Snippet } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/dart-ui/TileMode-class.html
 */
export class TileMode extends Snippet {
  static readonly clamp = Snippet.fromStatic("TileMode.clamp") as TileMode;
  static readonly mirror = Snippet.fromStatic("TileMode.mirror") as TileMode;
  static readonly repeated = Snippet.fromStatic(
    "TileMode.repeated"
  ) as TileMode;
}
