import { double } from "../dart";
import { Color } from "../dart-ui/color";
import { BoxBorder } from "./box-border";

/**
 * https://api.flutter.dev/flutter/painting/Border-class.html
 */
export class Border extends BoxBorder {
    static all(args: { color: Color, width: double }): Border {
        return new Border()
            .extendWithFactory("all")
            .overrideArguments(args)
    }
}