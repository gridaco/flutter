import { EnumClass, EnumField } from "coli/lib/snippet/utils/enum";

export class FontWeight extends EnumClass {
  /// Thin, the least thick
  static w100 = EnumField.fromStatic("FontWeight.w100");

  /// Extra-light
  static w200 = EnumField.fromStatic("FontWeight.w200");

  /// Light
  static w300 = EnumField.fromStatic("FontWeight.w300");

  /// Normal / regular / plain
  static w400 = EnumField.fromStatic("FontWeight.w400");

  /// Medium
  static w500 = EnumField.fromStatic("FontWeight.w500");

  /// Semi-bold
  static w600 = EnumField.fromStatic("FontWeight.w600");

  /// Bold
  static w700 = EnumField.fromStatic("FontWeight.w700");

  /// Extra-bold
  static w800 = EnumField.fromStatic("FontWeight.w800");

  /// Black, the most thick
  static w900 = EnumField.fromStatic("FontWeight.w900");

  /// The default font weight.
  static normal = EnumField.fromStatic("FontWeight.normal");

  /// A commonly used font weight that is heavier than normal.
  static bold = EnumField.fromStatic("FontWeight.bold");
}
