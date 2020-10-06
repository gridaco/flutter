import { Snippet } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/painting/BoxShape-class.html
 */
export class BoxShape extends Snippet {
    static readonly circle = Snippet.fromStatic("BoxShape.circle");
    static readonly rectangle = Snippet.fromStatic("BoxShape.rectangle");
}