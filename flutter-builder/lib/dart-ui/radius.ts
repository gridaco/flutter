import { Snippet } from "coli";
import { BuildableTree } from "../builder";
import { double } from "@coli.codes/dart-builder";
export class Radius extends BuildableTree {
  static circular(radius: double): Radius {
    return new Radius().extendWithFactory("circular").overrideArguments({
      __default__: radius,
    });
  }

  static elliptical(x: double, y: double): Radius {
    return new Radius().extendWithFactory("elliptical").overrideArguments({
      __default__x: x,
      __default__y: y,
    });
  }

  static readonly zero = Snippet.fromStatic("Radius.zero");
}
