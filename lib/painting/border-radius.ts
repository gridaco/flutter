import { BorderRadiusGeometry } from "./border-radius-geomatry";
import { Radius } from "../dart-ui/radius"
import { double } from "../dart";
/**
 * https://api.flutter.dev/flutter/painting/BorderRadius-class.html
 */
export class BorderRadius extends BorderRadiusGeometry {
    static circular(value: double): BorderRadius {
        return new BorderRadius()
            .extendWithFactoryName("circular")
            .overrideArguments({ __default__: value })
    }

    static only(args: {
        topLeft?: Radius
        topRight?: Radius
        bottomLeft?: Radius
        bottomRight?: Radius
    }): BorderRadius {
        return new BorderRadius()
            .extendWithFactoryName("only")
            .overrideArguments(args)
    }

    static zero(): BorderRadius {
        return new BorderRadius()
            .extendWithFactoryName("zero")
            .overrideArguments({})
    }

    // static 
}