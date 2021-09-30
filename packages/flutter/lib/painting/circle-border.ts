import { BorderSide } from "./border-side";
import { ShapeBorder } from "./shape-border";

/**
 * https://api.flutter.dev/flutter/painting/CircleBorder-class.html
 */
export class CircleBorder extends ShapeBorder {
    side?: BorderSide
    constructor(args?: {
        side?: BorderSide
    }) {
        super()
        this.side = args.side
    }
}