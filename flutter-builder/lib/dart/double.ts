import { Snippet } from "coli/lib/snippet";

export type double = number | Double | Snippet;
type doubleMode =
  | "value"
  | "nan"
  | "infinity"
  | "negativeInfinity"
  | "minPositive"
  | "maxFinite";
export class Double extends Snippet {
  static nan = Snippet.fromStatic("double.nan");
  static infinity = Snippet.fromStatic("double.infinity");
  static negativeInfinity = Snippet.fromStatic("double.negativeInfinity");
  static minPositive = Snippet.fromStatic("double.minPositive");
  static maxFinite = Snippet.fromStatic("double.maxFinite");
}
