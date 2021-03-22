import { Snippet } from "../builder/buildable-tree"

/**
 * https://api.flutter.dev/flutter/painting/VerticalDirection-class.html
 */
export class VerticalDirection extends Snippet {
    static readonly down = Snippet.fromStatic("VerticalDirection.down")
    static readonly up = Snippet.fromStatic("VerticalDirection.up")
}