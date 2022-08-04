import assert from "assert";
import { Widget } from "./widget";
import { Snippet } from "../builder/buildable-tree";
import { TextDirection } from "../dart-ui";
import { TextAlign } from "../dart-ui/text-align";
import { defaultParam } from "../decorations/params";
import { InlineSpan, TextStyle } from "../painting";
import { TextOverflow } from "../rendering";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/Text-class.html
 */
@identifier("Text")
export class Text extends Widget {
  // @param({ name: "data", default: true })
  @defaultParam()
  data: string;

  // @param({ name: "data", default: false })
  style: TextStyle | Snippet;

  textAlign: TextAlign;

  constructor(
    data,
    args?: { key?: Key } & {
      style?: TextStyle | Snippet;
      textAlign?: TextAlign;
    }
  ) {
    super({ key: args?.key });
    assert(
      data != null,
      "A non-null String must be provided to a Text widget."
    );
    this.data = data;
    this.style = args?.style;
    this.textAlign = args?.textAlign;
  }

  /**
   * https://api.flutter.dev/flutter/widgets/Text/Text.rich.html
   * @param textSpan
   * @param porps
   */
  static rich(
    textSpan: InlineSpan,
    porps?: {
      style?: TextStyle;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      overflow?: TextOverflow;
    }
  ): Text {
    return new Text("__empty__").extendWithFactory("rich").overrideArguments({
      __default__: textSpan,
      ...porps,
    });
  }
}
