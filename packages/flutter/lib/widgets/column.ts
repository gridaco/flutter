import { Widget } from "./widget";
import { CrossAxisAlignment } from "../rendering/cross-axis-alignment";
import { MainAxisAlignment } from "../rendering/main-axis-alignment";
import { MainAxisSize } from "../rendering/main-axis-size";
import type { TextDirection } from "../dart-ui/text-direction";
import { VerticalDirection } from "../painting/vertical-direction";
import type { TextBaseline } from "../painting/text-baseline";
import type { Snippet } from "../builder/buildable-tree";
import type { Key } from "../foundation";
import { MultiChildRenderObjectWidget } from "./multi-child-render-object-widget";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/Column-class.html
 */
@identifier("Column")
export class Column extends MultiChildRenderObjectWidget {
  mainAxisAlignment: MainAxisAlignment;
  mainAxisSize: MainAxisSize;
  crossAxisAlignment: CrossAxisAlignment;
  textDirection?: TextDirection | undefined;
  verticalDirection: VerticalDirection;
  textBaseline?: TextBaseline | undefined;

  /**
   * https://api.flutter.dev/flutter/widgets/Column/Column.html
   */
  constructor({
    key,
    mainAxisAlignment = MainAxisAlignment.start as Snippet,
    mainAxisSize = MainAxisAlignment.start as Snippet,
    crossAxisAlignment = CrossAxisAlignment.center,
    textDirection,
    verticalDirection = VerticalDirection.down as Snippet,
    textBaseline,
    children,
  }: { key?: Key } & {
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    crossAxisAlignment?: CrossAxisAlignment;
    textDirection?: TextDirection;
    verticalDirection?: VerticalDirection;
    textBaseline?: TextBaseline;
    children: Array<Widget>;
  }) {
    super({ key, children });
    this.mainAxisAlignment = mainAxisAlignment;
    this.mainAxisSize = mainAxisSize;
    this.crossAxisAlignment = crossAxisAlignment;
    this.verticalDirection = verticalDirection;
    this.textBaseline = textBaseline;
    this.textDirection = textDirection;
  }
}
