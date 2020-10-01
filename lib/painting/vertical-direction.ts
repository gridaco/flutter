import { SnippetBuilder } from "../builder/snippet-builder"

/**
 * https://api.flutter.dev/flutter/painting/VerticalDirection-class.html
 */
export class VerticalDirection extends SnippetBuilder {
    static readonly down = SnippetBuilder.fromStatic("VerticalDirection.down")
    static readonly up = SnippetBuilder.fromStatic("VerticalDirection.up")
}