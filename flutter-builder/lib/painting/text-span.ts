
import { TextStyle } from "./text-style";
import { InlineSpan } from "./inline-span";

/**
 * https://api.flutter.dev/flutter/painting/TextSpan-class.html
 */
export class TextSpan extends InlineSpan {
    text?: string
    children?: Array<InlineSpan>
    style?: TextStyle

    /**
     * https://api.flutter.dev/flutter/painting/TextSpan/TextSpan.html
     * @param props 
     */
    constructor(props?: {
        text?: string
        children?: Array<InlineSpan>
        style: TextStyle
    }) {
        super({ style: props?.style })
        this.text = props.text
        this.children = props.children
    }
}