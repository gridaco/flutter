import { Widget } from "./widget";
import { TextAlign } from "../dart-ui/text-align";
import { TextStyle } from "../painting/text-style";
import { TextOverflow } from "../rendering/text-overflow";
import { Key } from "../foundation";
import { identifier } from "../decorations";
/**
 * https://api.flutter.dev/flutter/widgets/DefaultTextStyle/DefaultTextStyle.html
 */
@identifier("DefaultTextStyle")
export class DefaultTextStyle extends Widget {
  style: TextStyle;
  textAlign: TextAlign;
  softWrap: boolean = true;
  overflow: TextOverflow = TextOverflow.clip;
  maxLines: number;
  // textWidthBasis: TextWidthBasis = TextWidthBasis.parent
  // textHeightBehavior: TextHeightBehavior
  child: Widget;

  constructor({
    key,
    style,
    textAlign,
    softWrap = true,
    overflow = TextOverflow.clip,
    maxLines,
    // textWidthBasis,
    // textHeightBehavior,
    child,
  }: { key?: Key } & {
    style: TextStyle;
    textAlign?: TextAlign;
    softWrap: boolean;
    overflow?: TextOverflow;
    maxLines?: number;
    // textWidthBasis?: TextWidthBasis = TextWidthBasis.parent
    // textHeightBehavior?: TextHeightBehavior
    child: Widget;
  }) {
    super({ key });
    this.style = style;
    this.textAlign = textAlign;
    this.softWrap = softWrap;
    this.overflow = overflow;
    this.maxLines = maxLines;
    // this.textWidthBasis = textWidthBasis
    // this.textHeightBehavior = textHeightBehavior
    this.child = child;
  }
}
