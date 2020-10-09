import { Widget } from ".";
import { EdgeInsetsGeometry } from "../painting";

/**
 * https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html
 */
export class SingleChildScrollView extends Widget {
    child: Widget
    padding?: EdgeInsetsGeometry
    constructor(args: {
        child: Widget
        padding?: EdgeInsetsGeometry
    }) {
        super()
        this.child = args.child;
        this.padding = args.padding
    }
}