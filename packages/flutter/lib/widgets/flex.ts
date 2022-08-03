import { Clip, TextDirection } from "../dart-ui";
import { Key } from "../foundation";
import { Axis, TextBaseline, VerticalDirection } from "../painting";
import {
  CrossAxisAlignment,
  MainAxisAlignment,
  MainAxisSize,
} from "../rendering";
import { Widget } from "./widget";
import assert from "assert";

/**
 * https://api.flutter.dev/flutter/widgets/Flex-class.html
 */
export class Flex extends Widget {
  // @required()
  direction: Axis;
  mainAxisAlignment: MainAxisAlignment;
  mainAxisSize: MainAxisSize;
  crossAxisAlignment: CrossAxisAlignment;
  textDirection?: TextDirection;
  verticalDirection: VerticalDirection;
  textBaseline?: TextBaseline;
  clipBehavior: Clip;
  children: Array<Widget> = [];
  /**
   * https://api.flutter.dev/flutter/widgets/Flex/Flex.html
   */
  constructor({
    key,
    direction,
    mainAxisAlignment,
    mainAxisSize,
    crossAxisAlignment,
    textDirection,
    verticalDirection,
    textBaseline,
    clipBehavior,
    children,
  }: {
    key?: Key;
  } & {
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
    crossAxisAlignment: CrossAxisAlignment;
    textDirection?: TextDirection;
    verticalDirection: VerticalDirection;
    textBaseline?: TextBaseline;
    clipBehavior: Clip;
    children: Array<Widget>;
  }) {
    super({ key });
    assert(direction != null);
    assert(mainAxisAlignment != null);
    assert(mainAxisSize != null);
    assert(crossAxisAlignment != null);
    assert(verticalDirection != null);
    assert(
      crossAxisAlignment != CrossAxisAlignment.baseline || textBaseline != null,
      "textBaseline is required if you specify the crossAxisAlignment with CrossAxisAlignment.baseline"
    );
    assert(clipBehavior != null);

    this.direction = direction;
    this.mainAxisAlignment = mainAxisAlignment;
    this.mainAxisSize = mainAxisSize;
    this.crossAxisAlignment = crossAxisAlignment;
    this.textDirection = textDirection;
    this.verticalDirection = verticalDirection;
    this.textBaseline = textBaseline;
    this.clipBehavior = clipBehavior;
    this.children = children;
  }
}
