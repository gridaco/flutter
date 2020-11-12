import { double } from "../dart";
import { Color, VoidCallback } from "../dart-ui";
import { ShapeBorder } from "../painting";
import { Widget } from "../widgets";
import { MaterialButton } from "./material-button";

/**
 * https://api.flutter.dev/flutter/material/FlatButton-class.html
 */
export class FlatButton extends MaterialButton {

    onPressed: VoidCallback
    child: Widget
    onLongPress?: VoidCallback
    textColor?: Color
    disabledTextColor?: Color
    color?: Color
    disabledColor?: Color
    focusColor?: Color
    hoverColor?: Color
    highlightColor?: Color
    splashColor?: Color
    shape?: ShapeBorder
    height?: double
    minWidth?: double

    /**
     * https://api.flutter.dev/flutter/material/FlatButton/FlatButton.html
     */
    constructor(args: {
        onPressed: VoidCallback
        child: Widget
        onLongPress?: VoidCallback
        textColor?: Color
        disabledTextColor?: Color
        color?: Color
        disabledColor?: Color
        focusColor?: Color
        hoverColor?: Color
        highlightColor?: Color
        splashColor?: Color
        shape?: ShapeBorder
        height?: double
        minWidth?: double
    }) {
        super()

        this.onPressed = args.onPressed
        this.child = args.child
        this.onLongPress = args.onLongPress
        this.textColor = args.textColor
        this.disabledTextColor = args.disabledTextColor
        this.color = args.color
        this.disabledColor = args.disabledColor
        this.focusColor = args.focusColor
        this.hoverColor = args.hoverColor
        this.highlightColor = args.highlightColor
        this.splashColor = args.splashColor
        this.shape = args.shape
        this.height = args.height
        this.minWidth = args.minWidth
    }

    static icon(): FlatButton {
        throw 'not implemented'
    }
}