import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { BoxBorder } from "./box-border";
import { BorderSide } from "./border-side";
import assert from "assert";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/painting/Border-class.html
 */
@identifier("Border")
export class Border extends BoxBorder {
  top: BorderSide;
  right: BorderSide;
  bottom: BorderSide;
  left: BorderSide;

  /**
   * https://api.flutter.dev/flutter/painting/Border/Border.html
   */
  constructor({
    top,
    right,
    bottom,
    left,
  }: {
    top: BorderSide;
    right: BorderSide;
    bottom: BorderSide;
    left: BorderSide;
  }) {
    super();

    assert(top != null);
    assert(right != null);
    assert(bottom != null);
    assert(left != null);

    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }

  /**
   * https://api.flutter.dev/flutter/painting/Border/Border.all.html
   * @param args
   * @returns
   */
  static all({
    color = Color.fromHex("#FFFFFF"),
    width = 1,
  }: {
    color: Color;
    width: double;
  }): Border {
    const args = {
      color,
      width,
    };

    return new Border({
      top: new BorderSide({ color: args.color, width: args.width }),
      left: new BorderSide({ color: args.color, width: args.width }),
      right: new BorderSide({ color: args.color, width: args.width }),
      bottom: new BorderSide({ color: args.color, width: args.width }),
    })
      .extendWithFactory("all")
      .overrideArguments(args);
  }

  /**
   * https://api.flutter.dev/flutter/painting/Border/Border.fromBorderSide.html
   * @param args
   * @returns
   */
  static fromBorderSide(args: { side: BorderSide }): Border {
    assert(args.side != null);

    return new Border({
      top: args.side,
      left: args.side,
      right: args.side,
      bottom: args.side,
    })
      .extendWithFactory("fromBorderSide")
      .overrideArguments(args);
  }

  /**
   * https://api.flutter.dev/flutter/painting/Border/Border.symmetric.html
   *
   * ```dart
   * const Border.symmetric(
   *  {BorderSide vertical = BorderSide.none,
   *  BorderSide horizontal = BorderSide.none}
   * )
   * ```
   * @param args
   * @returns
   */
  static symmetric({
    vertical = BorderSide.none,
    horizontal = BorderSide.none,
  }: {
    vertical: BorderSide;
    horizontal: BorderSide;
  }): Border {
    assert(vertical != null);
    assert(horizontal != null);

    return new Border({
      top: vertical,
      left: horizontal,
      right: horizontal,
      bottom: vertical,
    })
      .extendWithFactory("symmetric")
      .overrideArguments({
        vertical,
        horizontal,
      });
  }
}
