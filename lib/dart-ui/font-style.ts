import { SnippetBuilder } from "../builder/snippet-builder";

/**
 * https://api.flutter.dev/flutter/dart-ui/FontStyle-class.html
 */
export class FontStyle extends SnippetBuilder {
    static readonly italic = SnippetBuilder.fromStatic("FontStyle.italic")
    static readonly normal = SnippetBuilder.fromStatic("FontStyle.normal")
}