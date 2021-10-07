import { Key } from "../foundation/key";
import { Widget } from "./widget";
import { TextDirection } from "../dart-ui/text-direction";
import { Clip } from "../dart-ui/clip";
import { VerticalDirection } from "../painting/vertical-direction";
import { WrapCrossAlignment } from "../rendering/wrap-cross-alignment";
import { WrapAlignment } from "../rendering/wrap-alignment";
import { Axis } from "../painting/axis";
import assert from "assert";

/**
 * https://api.flutter.dev/flutter/widgets/Wrap-class.html
 */
export class Wrap extends Widget {
  key?: Key;
  direction: Axis;
  alignment: WrapAlignment;
  spacing: number;
  runAlignment: WrapAlignment;
  runSpacing: number;
  crossAxisAlignment: WrapCrossAlignment;
  textDirection?: TextDirection;
  verticalDirection: VerticalDirection;
  clipBehavior: Clip;
  children: Array<Widget>;

  /**
   * https://api.flutter.dev/flutter/widgets/Wrap/Wrap.html
   */
  constructor({
    key,
    direction = Axis.horizontal,
    alignment = WrapAlignment.start,
    spacing = 0.0,
    runAlignment = WrapAlignment.start,
    runSpacing = 0.0,
    crossAxisAlignment = WrapCrossAlignment.start,
    textDirection,
    verticalDirection = VerticalDirection.down,
    clipBehavior = Clip.none,
    children = [],
  }: {
    key?: Key;
    direction?: Axis;
    alignment?: WrapAlignment;
    spacing?: number;
    runAlignment?: WrapAlignment;
    runSpacing?: number;
    crossAxisAlignment?: WrapCrossAlignment;
    textDirection?: TextDirection;
    verticalDirection?: VerticalDirection;
    clipBehavior?: Clip;
    children?: Array<Widget>;
  }) {
    super({ key: key });
    assert(clipBehavior != null);

    this.direction = direction;
    this.alignment = alignment;
    this.spacing = spacing;
    this.runAlignment = runAlignment;
    this.runSpacing = runSpacing;
    this.crossAxisAlignment = crossAxisAlignment;
    this.textDirection = textDirection;
    this.verticalDirection = verticalDirection;
    this.clipBehavior = clipBehavior;
    this.children = children;
  }
}
