import { Snippet } from "../builder/buildable-tree"

/**
 * 
 */
export class Colors extends Snippet {
    static readonly white: Snippet = Snippet.fromStatic("Colors.white")
    static readonly black: Snippet = Snippet.fromStatic("Colors.black")
}