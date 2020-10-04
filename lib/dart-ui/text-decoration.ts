import { SnippetBuilder } from "../builder/snippet-builder";
/**
 * https://api.flutter.dev/flutter/dart-ui/TextDecoration-class.html
 */
export class TextDecoration extends SnippetBuilder {
    static readonly lineThrough = SnippetBuilder.fromStatic("TextDecoration.lineThrough")
    static readonly none = SnippetBuilder.fromStatic("TextDecoration.none")
    static readonly overline = SnippetBuilder.fromStatic("TextDecoration.overline")
    static readonly underline = SnippetBuilder.fromStatic("TextDecoration.underline")
}