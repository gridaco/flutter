import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/material/FloatingActionButtonLocation-class.html
 */
export class FloatingActionButtonLocation extends EnumClass {
    static centerDocked = EnumField.fromStatic('FloatingActionButtonLocation.centerDocked')
    static centerFloat = EnumField.fromStatic('FloatingActionButtonLocation.centerFloat')
    static centerTop = EnumField.fromStatic('FloatingActionButtonLocation.centerTop')
    static endDocked = EnumField.fromStatic('FloatingActionButtonLocation.endDocked')
    static endFloat = EnumField.fromStatic('FloatingActionButtonLocation.endFloat')
    static endTop = EnumField.fromStatic('FloatingActionButtonLocation.endTop')
    static miniCenterDocked = EnumField.fromStatic('FloatingActionButtonLocation.miniCenterDocked')
    static miniCenterFloat = EnumField.fromStatic('FloatingActionButtonLocation.miniCenterFloat')
    static miniCenterTop = EnumField.fromStatic('FloatingActionButtonLocation.miniCenterTop')
    static miniEndDocked = EnumField.fromStatic('FloatingActionButtonLocation.miniEndDocked')
    static miniEndFloat = EnumField.fromStatic('FloatingActionButtonLocation.miniEndFloat')
    static miniEndTop = EnumField.fromStatic('FloatingActionButtonLocation.miniEndTop')
    static miniStartDocked = EnumField.fromStatic('FloatingActionButtonLocation.miniStartDocked')
    static miniStartFloat = EnumField.fromStatic('FloatingActionButtonLocation.miniStartFloat')
    static miniStartTop = EnumField.fromStatic('FloatingActionButtonLocation.miniStartTop')
    static startDocked = EnumField.fromStatic('FloatingActionButtonLocation.startDocked')
    static startFloat = EnumField.fromStatic('FloatingActionButtonLocation.startFloat')
    static startTop = EnumField.fromStatic('FloatingActionButtonLocation.startTop')
}