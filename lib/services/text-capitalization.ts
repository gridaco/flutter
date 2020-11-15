import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/services/TextCapitalization-class.html
 */
export class TextCapitalization extends EnumClass {
    static readonly characters = EnumField.fromStatic('TextCapitalization.characters')
    static readonly none = EnumField.fromStatic('TextCapitalization.none')
    static readonly sentences = EnumField.fromStatic('TextCapitalization.sentences')
    static readonly words = EnumField.fromStatic('TextCapitalization.words')
}