import { Widget } from "."
import { CrossAxisAlignment } from "../rendering/crossaxisalignment"
import { MainAxisAlignment } from "../rendering/mainaxisalignment"
import { MainAxisSize } from "../rendering/mainaxissize"
import { TextDirection } from "../dart-ui/textdirection"
import { VerticalDirection } from "../painting/verticaldirection"
import { TextBaseline } from "../painting/textbaseline"

/**
 * https://api.flutter.dev/flutter/widgets/Column-class.html
 * https://api.flutter.dev/flutter/widgets/Column/Column.html
 */
export class Column {
    mainAxisAlignment: MainAxisAlignment = MainAxisAlignment.start
    mainAxisSize: MainAxisSize = MainAxisSize.max
    crossAxisAlignment: CrossAxisAlignment = CrossAxisAlignment.center
    textDirection: TextDirection
    verticalDirection: VerticalDirection = VerticalDirection.down
    textBaseline: TextBaseline
    children: Array<Widget> = Array<Widget>()
}