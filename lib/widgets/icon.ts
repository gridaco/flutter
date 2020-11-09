import { Widget } from ".";
import { IconData } from "./icon-data";

/**
 * https://api.flutter.dev/flutter/widgets/Icon-class.html
 */
export class Icon extends Widget {
    icon: IconData
    /**
     * https://api.flutter.dev/flutter/widgets/Icon/Icon.html
     */
    constructor(icon: IconData, args?: {

    }) {
        super()
        this.icon = icon
    }
}