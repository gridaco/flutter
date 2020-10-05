import { assert } from "console";
import { Widget } from ".";
import { Color } from "../dart-ui/color";
import { double } from "../dart/double";
import { AlignmentGeometry } from "../painting/aligment-geomatry";
import { BoxDecoration } from "../painting/box-decoration";
import { Decoration } from "../painting/decoration";
import { EdgeInsetsGeometry } from "../painting/edge-insets-geomatry";
import { Matrix4 } from "../vector-math-64/matrix4";

/**
 * https://api.flutter.dev/flutter/widgets/Container-class.html
 */
export class Container extends Widget {

    /// The [child] contained by the container.
    ///
    /// If null, and if the [constraints] are unbounded or also null, the
    /// container will expand to fill all available space in its parent, unless
    /// the parent provides unbounded constraints, in which case the container
    /// will attempt to be as small as possible.
    ///
    /// {@macro flutter.widgets.child}
    child: Widget



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
    alignment: AlignmentGeometry


    width: double
    height: double
    padding: EdgeInsetsGeometry
    color: Color
    decoration: Decoration
    foregroundDecoration: Decoration
    margin: EdgeInsetsGeometry
    transform: Matrix4

    constructor(args?: {
        color?: Color
        width?: double
        height?: double
        margin?: EdgeInsetsGeometry
        padding?: EdgeInsetsGeometry
        decoration?: BoxDecoration
    }) {
        super()

        assert(!args?.decoration || !args?.color, `Cannot provide both a color and a decoration\n
        To provide both, use "decoration: BoxDecoration(color: color)".`)

        this.color = args?.color
        this.width = args?.width
        this.height = args?.height
        this.margin = args?.margin
        this.padding = args?.padding
        this.decoration = args?.decoration
    }
}