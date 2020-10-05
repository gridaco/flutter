import { SnippetBuilder } from "../builder/snippet-builder";

/**
 * https://api.flutter.dev/flutter/painting/BoxShape-class.html
 */
export class BoxShape extends SnippetBuilder {
    static readonly circle = SnippetBuilder.fromStatic("BoxShape.circle");
    static readonly rectangle = SnippetBuilder.fromStatic("BoxShape.rectangle");
}