import { Widget } from ".";
import { double } from "../dart";
import { Color, TextDirection } from "../dart-ui";
import { defaultParam } from "../decorations/params";
import { IconData } from "./icon-data";

/**
 * https://api.flutter.dev/flutter/widgets/Icon-class.html
 */
export class Icon extends Widget {
    @defaultParam()
    icon: IconData

    size?: double
    color?: Color
    semanticLabel?: string
    textDirection?: TextDirection

    /**
     * https://api.flutter.dev/flutter/widgets/Icon/Icon.html
     */
    constructor(icon: IconData, args?: {
        size?: double
        color?: Color
        semanticLabel?: string
        textDirection?: TextDirection
    }) {
        super()
        this.icon = icon

        this.size = args.size
        this.color = args.color
        this.semanticLabel = args.semanticLabel
        this.textDirection = args.textDirection
    }
}