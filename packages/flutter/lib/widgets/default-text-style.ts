import { Widget } from ".";
import { TextAlign } from "../dart-ui/text-align";
import { TextStyle } from "../painting/text-style";
import { TextOverflow } from "../rendering/text-overflow";
/**
 * https://api.flutter.dev/flutter/widgets/DefaultTextStyle/DefaultTextStyle.html
 */
export class DefaultTextStyle extends Widget {
    style: TextStyle
    textAlign: TextAlign
    softWrap: boolean = true
    overflow: TextOverflow = TextOverflow.clip
    maxLines: number
    // textWidthBasis: TextWidthBasis = TextWidthBasis.parent
    // textHeightBehavior: TextHeightBehavior
    child: Widget

    constructor({ style,
        textAlign,
        softWrap = true,
        overflow = TextOverflow.clip,
        maxLines,
        // textWidthBasis,
        // textHeightBehavior,
        child,
    }: {
        style: TextStyle,
        textAlign?: TextAlign,
        softWrap: boolean,
        overflow?: TextOverflow,
        maxLines?: number
        // textWidthBasis?: TextWidthBasis = TextWidthBasis.parent
        // textHeightBehavior?: TextHeightBehavior
        child: Widget
    }) {
        super()
        this.style = style
        this.textAlign = textAlign
        this.softWrap = softWrap
        this.overflow = overflow
        this.maxLines = maxLines
        // this.textWidthBasis = textWidthBasis
        // this.textHeightBehavior = textHeightBehavior
        this.child = child
    }
}