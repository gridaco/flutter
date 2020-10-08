import { TextStyle } from "@bridged.xyz/remote-ui-core/dist/lib/widgets/text";
import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { BorderRadiusGeometry } from "../painting/border-radius-geomatry";
import { ShapeBorder } from "../painting/shape-border";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/material/Material-class.html
 */
export class Material extends Widget {
    elevation?: double
    color?: Color
    shadowColor?: Color
    textStyle?: TextStyle
    borderRadius?: BorderRadiusGeometry
    shape?: ShapeBorder
    child?: Widget

    constructor(args: {
        elevation?: double
        color?: Color
        shadowColor?: Color
        textStyle?: TextStyle
        borderRadius?: BorderRadiusGeometry
        shape?: ShapeBorder
        child?: Widget
    }) {
        super()
        this.elevation = args.elevation
        this.color = args.color
        this.shadowColor = args.shadowColor
        this.textStyle = args.textStyle
        this.borderRadius = args.borderRadius
        this.shape = args.shape
        this.child = args.child
    }
}