import { Snippet } from "../builder/buildable-tree";

export type double = number | Double | Snippet;
type doubleMode =
  | "value"
  | "nan"
  | "infinity"
  | "negativeInfinity"
  | "minPositive"
  | "maxFinite";

export class Double extends Snippet {
  static nan = Snippet.fromStatic("double.nan") as Double;
  static infinity = Snippet.fromStatic("double.infinity") as Double;
  static negativeInfinity = Snippet.fromStatic(
    "double.negativeInfinity"
  ) as Double;
  static minPositive = Snippet.fromStatic("double.minPositive") as Double;
  static maxFinite = Snippet.fromStatic("double.maxFinite") as Double;
}
