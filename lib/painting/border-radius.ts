import { SnippetBuilder } from "../builder/snippet-builder";
import { Border } from "./border";
import { BorderRadiusGeometry } from "./border-radius-geomatry";
import { Radius } from "../dart-ui/radius"
import { double } from "../dart";
/**
 * https://api.flutter.dev/flutter/painting/BorderRadius-class.html
 */
export class BorderRadius extends BorderRadiusGeometry {
    static circular(_: double): BorderRadius {
        return new BorderRadius().extendWithFactoryName("circular").overrideArguments({ _ })
    }

    static only(args: {
        topLeft?: Radius
        topRight?: Radius
        bottomLeft?: Radius
        bottomRight?: Radius
    }): BorderRadius {
        return new BorderRadius().extendWithFactoryName("circular").overrideArguments(args)
    }

    // static 
}