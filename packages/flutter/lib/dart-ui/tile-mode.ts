import { Snippet } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/dart-ui/TileMode-class.html
 */
export class TileMode extends Snippet {
    static readonly clamp = Snippet.fromStatic("TileMode.clamp")
    static readonly mirror = Snippet.fromStatic("TileMode.mirror")
    static readonly repeated = Snippet.fromStatic("TileMode.repeated")
}