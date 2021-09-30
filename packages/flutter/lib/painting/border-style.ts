import { Snippet } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/painting/BorderStyle-class.html
 */
export class BorderStyle extends Snippet {
    constructor() {
        super()
    }

    static readonly none = new Snippet("BorderStyle.none")
    static readonly solid = new Snippet("BorderStyle.solid")
}