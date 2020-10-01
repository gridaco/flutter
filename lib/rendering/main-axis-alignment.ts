import { SnippetBuilder } from "../builder/snippet-builder"

/**
 * https://api.flutter.dev/flutter/rendering/MainAxisAlignment-class.html
 */
export class MainAxisAlignment extends SnippetBuilder {
    static readonly center = SnippetBuilder.fromStatic("MainAxisAlignment.center")
    static readonly end = SnippetBuilder.fromStatic("MainAxisAlignment.end")
    static readonly spaceAround = SnippetBuilder.fromStatic("MainAxisAlignment.spaceAround")
    static readonly spaceBetween = SnippetBuilder.fromStatic("MainAxisAlignment.spaceBetween")
    static readonly spaceEvenly = SnippetBuilder.fromStatic("MainAxisAlignment.spaceEvenly")
    static readonly start = SnippetBuilder.fromStatic("MainAxisAlignment.start")
}