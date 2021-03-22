import { Widget } from "../widgets";
import { double } from "../dart";
import { Color } from "../dart-ui";

/**
 * https://api.flutter.dev/flutter/material/VerticalDivider-class.html
 */
export class VerticalDivider extends Widget {
    width: double
    thickness: double
    indent?: double
    endIndent?: double
    color: Color
    /**
     * https://api.flutter.dev/flutter/material/VerticalDivider/VerticalDivider.html
     */
    constructor(args: {
        width: double
        thickness: double
        indent?: double
        endIndent?: double
        color: Color
    }) {
        super()
        this.width = args.width
        this.thickness = args.thickness
        this.indent = args.indent
        this.endIndent = args.endIndent
        this.color = args.color
    }

}