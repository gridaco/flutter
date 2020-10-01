import { FontWeight as D_FontWeight } from "@bridged.xyz/remote-ui-core/dist/lib/widgets/text";
import { SnippetBuildableTree } from "../builder/buildable-widget";
import { SnippetBuilder } from "../builder/snippet-builder";

export class FontWeight extends SnippetBuildableTree {

    /// Thin, the least thick
    static w100: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w100");

    /// Extra-light
    static w200: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w200");

    /// Light
    static w300: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w300");

    /// Normal / regular / plain
    static w400: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w400");

    /// Medium
    static w500: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w500");

    /// Semi-bold
    static w600: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w600");

    /// Bold
    static w700: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w700");

    /// Extra-bold
    static w800: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w800");

    /// Black, the most thick
    static w900: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.w900");

    /// The default font weight.
    static normal: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.normal");

    /// A commonly used font weight that is heavier than normal.
    static bold: SnippetBuilder = SnippetBuilder.fromStatic("FontWeight.bold");

}