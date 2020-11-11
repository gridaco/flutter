import { BuildableTree, Snippet } from "../builder/buildable-tree";
import { double } from "../dart";
export class Radius extends BuildableTree {
    static circular(radius: double): Radius {
        return new Radius().extendWithFactory("circular").overrideArguments({
            __default__: radius
        })
    }

    static elliptical(x: double, y: double): Radius {
        return new Radius().extendWithFactory("elliptical").overrideArguments({
            __default__x: x,
            __default__y: y
        })
    }

    static readonly zero = Snippet.fromStatic("Radius.zero")
}