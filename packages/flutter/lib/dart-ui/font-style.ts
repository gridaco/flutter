import { Snippet } from "../builder/buildable-tree"

/**
 * https://api.flutter.dev/flutter/dart-ui/FontStyle-class.html
 */
export class FontStyle extends Snippet {
    static readonly italic = Snippet.fromStatic("FontStyle.italic")
    static readonly normal = Snippet.fromStatic("FontStyle.normal")
}