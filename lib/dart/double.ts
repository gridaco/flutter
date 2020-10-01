import { Buildable } from "../builder/buildable";
import { BuildableTree } from "../builder/buildable-widget";
import { SnippetBuilder } from "../builder/snippet-builder";
export type double = number | Double | SnippetBuilder;
type doubleMode = "value" | "nan" | "infinity" | "negativeInfinity" | "minPositive" | "maxFinite"
export class Double extends SnippetBuilder {
    static nan = SnippetBuilder.fromStatic("double.nan");
    static infinity = SnippetBuilder.fromStatic("infinity")
    static negativeInfinity = SnippetBuilder.fromStatic("negativeInfinity");
    static minPositive = SnippetBuilder.fromStatic("minPositive");
    static maxFinite = SnippetBuilder.fromStatic("maxFinite");
}