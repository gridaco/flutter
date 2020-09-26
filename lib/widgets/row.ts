import { Widget } from "."
import { TextDirection } from "../dart-ui/textdirection"
import { TextBaseline } from "../painting/textbaseline"
import { VerticalDirection } from "../painting/verticaldirection"
import { CrossAxisAlignment } from "../rendering/crossaxisalignment"
import { MainAxisAlignment } from "../rendering/mainaxisalignment"
import { MainAxisSize } from "../rendering/mainaxissize"

/**
 * https://api.flutter.dev/flutter/widgets/Row/Row.html
 */
export class Row {
    mainAxisAlignment: MainAxisAlignment = MainAxisAlignment.start
    mainAxisSize: MainAxisSize = MainAxisSize.max
    crossAxisAlignment: CrossAxisAlignment = CrossAxisAlignment.center
    textDirection: TextDirection
    verticalDirection: VerticalDirection = VerticalDirection.down
    textBaseline: TextBaseline
    children: Array<Widget> = Array<Widget>()
}