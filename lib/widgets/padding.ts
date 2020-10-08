import { Widget } from ".";
import { EdgeInsetsGeometry } from "../painting/edge-insets-geometry";

/**
 * https://api.flutter.dev/flutter/widgets/Padding-class.html
 */
export class Padding extends Widget {
    padding: EdgeInsetsGeometry
    child?: Widget
    constructor(args: {
        padding: EdgeInsetsGeometry
        child?: Widget
    }) {
        super()
        this.padding = args.padding
        this.child = args.child
    }
}