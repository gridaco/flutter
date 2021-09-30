import { Widget } from "./widget";
import { TextDirection } from "../dart-ui";
import { AlignmentGeometry } from "../painting/alignment-geomatry";

/**
 * https://api.flutter.dev/flutter/widgets/Stack-class.html
 */
export class Stack extends Widget {
  alignment?: AlignmentGeometry;
  textDirection?: TextDirection;
  children: Array<Widget>;
  constructor(args: {
    alignment?: AlignmentGeometry;
    textDirection?: TextDirection;
    children: Array<Widget>;
  }) {
    super();
    this.alignment = args.alignment;
    this.textDirection = args.textDirection;
    this.children = args.children;
  }
}
