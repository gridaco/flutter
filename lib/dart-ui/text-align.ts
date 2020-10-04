import { SnippetBuilder } from "../builder/snippet-builder";

/**
 * https://api.flutter.dev/flutter/dart-ui/TextAlign-class.html
 */
export class TextAlign extends SnippetBuilder {
    static readonly center = SnippetBuilder.fromStatic("TextAlign.center")
    static readonly end = SnippetBuilder.fromStatic("TextAlign.end")
    static readonly justify = SnippetBuilder.fromStatic("TextAlign.justify")
    static readonly left = SnippetBuilder.fromStatic("TextAlign.left")
    static readonly right = SnippetBuilder.fromStatic("TextAlign.right")
    static readonly start = SnippetBuilder.fromStatic("TextAlign.start")
}