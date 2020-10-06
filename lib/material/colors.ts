import { SnippetBuilder } from "../builder/snippet-builder";

/**
 * 
 */
export class Colors extends SnippetBuilder {
    static readonly white: SnippetBuilder = SnippetBuilder.fromStatic("Colors.white")
    static readonly black: SnippetBuilder = SnippetBuilder.fromStatic("Colors.black")
}