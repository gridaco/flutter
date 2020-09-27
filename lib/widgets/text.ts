import assert from "assert";
import { Widget } from ".";
import { param } from "../annotations/default-param";
import { TextStyle } from "../painting/text-style";

/**
 * https://api.flutter.dev/flutter/widgets/Text-class.html
 */
export class Text extends Widget {
    // @param
    data: string
    style: TextStyle
    constructor(data: string, args?: {
        style: TextStyle
    }) {
        super()
        assert(
            data != null,
            'A non-null String must be provided to a Text widget.',
        )
        this.data = data;
        this.style = args?.style
    }
}