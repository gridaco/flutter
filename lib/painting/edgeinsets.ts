import { double } from "../dart/double";
import { EdgeInsetsGeometry } from "./edge-insets-geometry";

export class EdgeInsets extends EdgeInsetsGeometry {
    left?: double
    right?: double
    top?: double
    topLeft?: double
    topRight?: double
    horizontal?: double
    vertical?: double

    static only(args?: {
        left?: double
        top?: double
        right?: double
        bottom?: double
    }): EdgeInsets {
        return new EdgeInsets().extendWithFactoryName("only").overrideArguments(args)
    }

    static symmetric(args?: {
        horizontal?: double
        vertical?: double
    }): EdgeInsets {
        return new EdgeInsets().extendWithFactoryName("symmetric").overrideArguments(args)
    }

    static all(value: double): EdgeInsets {
        return new EdgeInsets().extendWithFactoryName("symmetric").overrideArguments({
            __default__: value
        })
    }
}