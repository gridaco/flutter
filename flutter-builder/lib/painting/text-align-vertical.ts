import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/painting/TextAlignVertical-class.html
 */
export class TextAlignVertical extends EnumClass {
    static readonly top = EnumField.fromStatic('TextAlignVertical.bottom.top')
    static readonly center = EnumField.fromStatic('TextAlignVertical.center')
    static readonly bottom = EnumField.fromStatic('TextAlignVertical.bottom')
}