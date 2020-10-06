import { Snippet } from "../builder/snippet-builder";
/**
 * https://api.flutter.dev/flutter/dart-ui/TextDecoration-class.html
 */
export class TextDecoration extends Snippet {
    static readonly lineThrough = Snippet.fromStatic("TextDecoration.lineThrough")
    static readonly none = Snippet.fromStatic("TextDecoration.none")
    static readonly overline = Snippet.fromStatic("TextDecoration.overline")
    static readonly underline = Snippet.fromStatic("TextDecoration.underline")
}