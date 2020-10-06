import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { AlignmentGeometry } from "./aligment-geomatry";
import { Gradient } from "./gradient";


export class LinearGradients extends Gradient {
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