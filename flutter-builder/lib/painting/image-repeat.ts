import { EnumClass, EnumField } from "@coli.codes/builder/snippet/utils/enum";

/**
 * https://api.flutter.dev/flutter/painting/ImageRepeat-class.html
 */
export class ImageRepeat extends EnumClass {
  static readonly noRepeat = EnumField.fromStatic("ImageRepeat.noRepeat");
  static readonly repeat = EnumField.fromStatic("ImageRepeat.repeat");
  static readonly repeatX = EnumField.fromStatic("ImageRepeat.repeatX");
  static readonly repeatY = EnumField.fromStatic("ImageRepeat.repeatY");
}
