import { Snippet } from "../builder/buildable-tree"

/**
 * https://api.flutter.dev/flutter/dart-ui/TextDirection-class.html
 */
export class TextDirection extends Snippet {
    static readonly ltr = new Snippet("TextDirection.ltr")
    static readonly rtl = new Snippet("TextDirection.rtl")
}