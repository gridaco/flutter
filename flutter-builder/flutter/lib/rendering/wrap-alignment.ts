import { EnumClass } from "../builder/buildable-tree";
import { identifier } from "../decorations";

// @identifier("WrapAlignment")
/**
 * https://api.flutter.dev/flutter/rendering/WrapAlignment-class.html
 */
export class WrapAlignment extends EnumClass {
  public static readonly start: WrapAlignment = this.fromStatic(
    "WrapAlignment.start"
  );
  public static readonly end: WrapAlignment =
    this.fromStatic("WrapAlignment.end");
  public static readonly center: WrapAlignment = this.fromStatic(
    "WrapAlignment.center"
  );
  public static readonly spaceBetween: WrapAlignment = this.fromStatic(
    "WrapAlignment.spaceBetween"
  );
  public static readonly spaceAround: WrapAlignment = this.fromStatic(
    "WrapAlignment.spaceAround"
  );
  public static readonly spaceEvenly: WrapAlignment = this.fromStatic(
    "WrapAlignment.spaceEvenly"
  );
}
