import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { AlignmentGeometry } from "./alignment-geomatry";
import { Gradient } from "./gradient";
import { GradientTransform } from "./gradient-transform";

/**
 * https://api.flutter.dev/flutter/painting/LinearGradient-class.html
 */
export class LinearGradient extends Gradient {
    begin: AlignmentGeometry
    end: AlignmentGeometry
    colors: Array<Color>
    stops: Array<double>
    transform?: GradientTransform
    constructor(args: {
        begin?: AlignmentGeometry
        end?: AlignmentGeometry
        colors: Array<Color>
        stops?: Array<double>
    }) {
        super()
        this.begin = args.begin
        this.end = args.end
        this.colors = args.colors
        this.stops = args.stops
    }
}