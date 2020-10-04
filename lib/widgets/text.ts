import assert from "assert";
import { Widget } from ".";
import { SnippetBuilder } from "../builder/snippet-builder";
import { TextAlign } from "../dart-ui/text-align";
import { defaultParam, param } from "../decorations/params";
import { TextStyle } from "../painting/text-style";
/**
 * https://api.flutter.dev/flutter/widgets/Text-class.html
 */
export class Text extends Widget {
    // @param({ name: "data", default: true })
    @defaultParam()
    data: string

    // @param({ name: "data", default: false })
    style: TextStyle | SnippetBuilder

    textAlign: TextAlign

    constructor(data: string, args?: {
        style?: TextStyle | SnippetBuilder
        textAlign?: TextAlign
    }) {
        super()
        assert(
            data != null,
            'A non-null String must be provided to a Text widget.',
        )
        this.data = data;
        this.style = args?.style
        this.textAlign = args?.textAlign
    }
}
