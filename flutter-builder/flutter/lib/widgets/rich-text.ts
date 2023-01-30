import { Widget } from "./widget";
import { TextAlign, TextDirection } from "../dart-ui";
import { InlineSpan } from "../painting";
import { TextOverflow } from "../rendering";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/RichText-class.html
 */
@identifier("RichText")
export class RichText extends Widget {
  text: InlineSpan;
  textAlign?: TextAlign;
  textDirection?: TextDirection;
  overflow?: TextOverflow;
  maxLines?: number;

  // https://api.flutter.dev/flutter/widgets/RichText/RichText.html
  constructor({
    key,
    ...props
  }: {
    key?: Key;
  } & {
    text: InlineSpan;
    textAlign?: TextAlign;
    textDirection?: TextDirection;
    overflow?: TextOverflow;
    maxLines?: number;
  }) {
    super({ key });

    this.text = props.text;
    this.textAlign = props.textAlign;
    this.textDirection = props.textDirection;
    this.overflow = props.overflow;
    this.maxLines = props.maxLines;
  }
}
