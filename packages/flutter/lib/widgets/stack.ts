import { Widget } from "./widget";
import { TextDirection } from "../dart-ui";
import { AlignmentGeometry } from "../painting/alignment-geomatry";
import { Key } from "../foundation";

/**
 * https://api.flutter.dev/flutter/widgets/Stack-class.html
 */
export class Stack extends Widget {
  alignment?: AlignmentGeometry;
  textDirection?: TextDirection;
  children: Array<Widget>;
  constructor({
    key,
    alignment,
    textDirection,
    children,
  }: { key?: Key } & {
    alignment?: AlignmentGeometry;
    textDirection?: TextDirection;
    children: Array<Widget>;
  }) {
    super({ key });
    this.alignment = alignment;
    this.textDirection = textDirection;
    this.children = children;
  }
}
