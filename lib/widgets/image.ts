import { Widget } from ".";
import { double } from "../dart";

/**
 * https://api.flutter.dev/flutter/widgets/Image-class.html
 */
export class Image extends Widget {
    static network(src: string, args?: { width?: double, height?: double }): Image {
        return new Image().extendWithFactory('network').overrideArguments({
            __default__: src,
            ...args
        })
    }


    static asset(src: string, args?: { loadingBuilder?, width?: double, height?: double }): Image {
        return new Image().extendWithFactory('asset').overrideArguments({
            __default__: src,
            ...args
        })
    }
}