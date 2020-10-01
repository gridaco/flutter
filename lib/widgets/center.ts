import { Widget } from ".";

/**
 * https://api.flutter.dev/flutter/widgets/Center-class.html
 */
export class Center extends Widget {
    child: Widget
    constructor(args: {
        child: Widget
    }) {
        super()
        this.child = args.child;
    }
}