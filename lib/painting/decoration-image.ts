import { double } from "../dart";
import { ColorFilter } from "../dart-ui/color-filter";
import { Rect } from "../dart-ui/rect";
import { AlignmentGeometry } from "./alignment-geomatry";
import { BoxFit } from "./box-fit";
import { ImageErrorListener } from "./image-error-listener";
import { ImageProvider } from "./image-provider";
import { ImageRepeat } from "./image-repeat";

/**
 * https://api.flutter.dev/flutter/painting/DecorationImage-class.html
 */
export class DecorationImage {
    image: ImageProvider
    onError?: ImageErrorListener
    colorFilter?: ColorFilter
    fit?: BoxFit
    alignment: AlignmentGeometry
    centerSlice?: Rect
    repeat?: ImageRepeat
    matchTextDirection?: boolean
    scale?: double
}