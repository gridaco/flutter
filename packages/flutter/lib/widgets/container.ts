import assert from "assert";
import { Clip } from "../dart-ui";
import { Color } from "../dart-ui/color";
import { double } from "../dart/double";
import { identifier } from "../decorations";
import { Key } from "../foundation";
import { AlignmentGeometry } from "../painting/alignment-geomatry";
import { BoxDecoration } from "../painting/box-decoration";
import { Decoration } from "../painting/decoration";
import { EdgeInsetsGeometry } from "../painting/edge-insets-geometry";
import { BoxConstraints } from "../rendering";
import { Matrix4 } from "../vector-math-64/matrix4";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/Container-class.html
 */
@identifier("Container")
export class Container extends Widget {
  /// The [child] contained by the container.
  ///
  /// If null, and if the [constraints] are unbounded or also null, the
  /// container will expand to fill all available space in its parent, unless
  /// the parent provides unbounded constraints, in which case the container
  /// will attempt to be as small as possible.
  ///
  /// {@macro flutter.widgets.child}
  child: Widget;

  /// Align the [child] within the container.
  ///
  /// If non-null, the container will expand to fill its parent and position its
  /// child within itself according to the given value. If the incoming
  /// constraints are unbounded, then the child will be shrink-wrapped instead.
  ///
  /// Ignored if [child] is null.
  ///
  /// See also:
  ///
  ///  * [Alignment], a class with convenient constants typically used to
  ///    specify an [AlignmentGeometry].
  ///  * [AlignmentDirectional], like [Alignment] for specifying alignments
  ///    relative to text direction.
  alignment: AlignmentGeometry;

  width: double;
  height: double;
  padding: EdgeInsetsGeometry;
  color: Color;
  decoration: Decoration;
  foregroundDecoration: Decoration;
  margin: EdgeInsetsGeometry;
  transform: Matrix4;

  /**
   * https://api.flutter.dev/flutter/widgets/Container/Container.html
   */
  constructor({
    key,
    alignment,
    padding,
    color,
    decoration,
    foregroundDecoration,
    width,
    height,
    constraints,
    margin,
    transform,
    transformAlignment,
    child,
    // @default()
    clipBehavior = Clip.none,
  }: { key?: Key } & {
    alignment?: AlignmentGeometry;
    padding?: EdgeInsetsGeometry;
    color?: Color;
    decoration?: Decoration;
    foregroundDecoration?: Decoration;
    width?: double | null;
    height?: double | null;
    constraints?: BoxConstraints;
    margin?: EdgeInsetsGeometry;
    transform?: Matrix4;
    transformAlignment?: AlignmentGeometry;
    child?: Widget;
    clipBehavior?: Clip;
  }) {
    super({ key });

    assert(
      !decoration || !color,
      `Cannot provide both a color and a decoration\n
        To provide both, use "decoration: BoxDecoration(color: color)".`
    );

    this.child = child;
    this.color = color;
    this.width = width;
    this.height = height;
    this.margin = margin;
    this.padding = padding;
    this.decoration = decoration;
  }
}
