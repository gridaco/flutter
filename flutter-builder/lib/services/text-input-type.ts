import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/services/TextInputType-class.html
 */
export class TextInputType extends EnumClass {
    static readonly datetime = EnumField.fromStatic('TextInputType.datetime');
    static readonly emailAddress = EnumField.fromStatic('TextInputType.emailAddress');
    static readonly multiline = EnumField.fromStatic('TextInputType.multiline');
    static readonly _name = EnumField.fromStatic('TextInputType.name');
    static readonly number = EnumField.fromStatic('TextInputType.number');
    static readonly phone = EnumField.fromStatic('TextInputType.phone');
    static readonly streetAddress = EnumField.fromStatic('TextInputType.streetAddress');
    static readonly text = EnumField.fromStatic('TextInputType.text');
    static readonly url = EnumField.fromStatic('TextInputType.url');
    static readonly visiblePassword = EnumField.fromStatic('TextInputType.visiblePassword');
}