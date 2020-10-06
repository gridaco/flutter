import { FontWeight as D_FontWeight } from "@bridged.xyz/remote-ui-core/dist/lib/widgets/text";
import { Snippet } from "../builder/buildable-tree";

export class FontWeight extends Snippet {

    /// Thin, the least thick
    static w100: Snippet = Snippet.fromStatic("FontWeight.w100");

    /// Extra-light
    static w200: Snippet = Snippet.fromStatic("FontWeight.w200");

    /// Light
    static w300: Snippet = Snippet.fromStatic("FontWeight.w300");

    /// Normal / regular / plain
    static w400: Snippet = Snippet.fromStatic("FontWeight.w400");

    /// Medium
    static w500: Snippet = Snippet.fromStatic("FontWeight.w500");

    /// Semi-bold
    static w600: Snippet = Snippet.fromStatic("FontWeight.w600");

    /// Bold
    static w700: Snippet = Snippet.fromStatic("FontWeight.w700");

    /// Extra-bold
    static w800: Snippet = Snippet.fromStatic("FontWeight.w800");

    /// Black, the most thick
    static w900: Snippet = Snippet.fromStatic("FontWeight.w900");

    /// The default font weight.
    static normal: Snippet = Snippet.fromStatic("FontWeight.normal");

    /// A commonly used font weight that is heavier than normal.
    static bold: Snippet = Snippet.fromStatic("FontWeight.bold");

}