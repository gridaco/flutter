import { MaterialButton } from ".";
import { double, ShapeBorder, Widget } from "..";
import { Color, VoidCallback } from "../dart-ui";
import { TextStyle } from "../painting";
/**
 * https://api.flutter.dev/flutter/material/Chip-class.html
 */
export class Chip extends Widget {

    // onSelected?: VoidCallback
    onDeleted?: VoidCallback
    deleteIcon?: Widget
    avartar?: Widget
    label: Widget
    labelStyle?: TextStyle
    backgroundColor?: Color
    splashColor?: Color
    shape?: ShapeBorder
    // height?: double


    /**
     *  https://api.flutter.dev/flutter/material/Chip/Chip.html
     */
    constructor(args: {
        // onSelected?: VoidCallback
        onDeleted?: VoidCallback
        deleteIcon?: Widget
        avartar?: Widget
        label: Widget
        labelStyle?: TextStyle
        backgroundColor?: Color
        splashColor?: Color
        shape?: ShapeBorder
        // height?: double
    }) {
        super()
        // this.onSelected = args?.onSelected
        this.onDeleted = args?.onDeleted
        this.deleteIcon = args?.deleteIcon
        this.avartar = args?.avartar
        this.label = args?.label
        this.labelStyle = args?.labelStyle
        this.backgroundColor = args?.backgroundColor
        this.splashColor = args?.splashColor
        this.shape = args?.shape
        // this.height = args?.height
    }


}