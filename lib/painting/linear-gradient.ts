import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { AlignmentGeometry } from "./alignment-geomatry";
import { Gradient } from "./gradient";

/**
 * https://api.flutter.dev/flutter/painting/LinearGradient-class.html
 */
export class LinearGradient extends Gradient {
    begin: AlignmentGeometry
    end: AlignmentGeometry
    colors: Array<Color>
    stops: Array<double>
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