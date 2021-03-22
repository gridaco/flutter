import { Snippet } from "../builder/buildable-tree"

/**
 * https://api.flutter.dev/flutter/dart-ui/TextBaseline-class.html
 */
export class TextBaseline extends Snippet {
    static readonly alphabetic = new Snippet("TextBaseline.alphabetic")
    static readonly ideographic = new Snippet("TextBaseline.ideographic")
}