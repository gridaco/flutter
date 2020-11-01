/**
 * https://api.flutter.dev/flutter/painting/BoxFit-class.html
 */

import { Snippet } from "../builder/buildable-tree";

export class BoxFit extends Snippet {
    static readonly contain = Snippet.fromStatic('BoxFit.contain')
    static readonly cover = Snippet.fromStatic('BoxFit.cover')
    static readonly fill = Snippet.fromStatic('BoxFit.fill')
    static readonly fitHeight = Snippet.fromStatic('BoxFit.fitHeight')
    static readonly fitWidth = Snippet.fromStatic('BoxFit.fitWidth')
    static readonly none = Snippet.fromStatic('BoxFit.none')
    static readonly scaleDown = Snippet.fromStatic('BoxFit.scaleDown')
}