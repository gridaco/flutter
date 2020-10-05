import { Color } from "../dart-ui/color";
import { BorderRadiusGeometry } from "./border-radius-geomatry";
import { BoxBorder } from "./box-border";
import { BoxShadow } from "./box-shadow";
import { BoxShape } from "./box-shape";
import { Decoration } from "./decoration";
import { Gradient } from "./gradient";

/**
 * https://api.flutter.dev/flutter/painting/BoxDecoration-class.html
 */
export class BoxDecoration extends Decoration {
    color?: Color
    // image?: DecorationImage
    border?: BoxBorder
    borderRadius?: BorderRadiusGeometry
    boxShadow?: Array<BoxShadow>
    gradient?: Gradient
    //     BlendMode ? backgroundBlendMode,
    shape: BoxShape

    constructor(args: {
        color?: Color
        border?: BoxBorder
        borderRadius?: BorderRadiusGeometry
        boxShadow?: Array<BoxShadow>
        gradient?: Gradient
        shape?: BoxShape
    }) {
        super()
        this.color = args.color
        this.border = args.border
        this.borderRadius = args.borderRadius
        this.boxShadow = args.boxShadow
        this.gradient = args.gradient
        this.shape = args.shape
    }
}