import { Widget } from ".";
import { DartDouble as Double, double } from "../dart/double";
import { Size } from "../dart-ui/size"
/**
 * https://api.flutter.dev/flutter/widgets/SizedBox-class.html
 */
export class SizedBox extends Widget {
    width: double
    height: double
    child: Widget
    constructor(args: {
        child: Widget
        width?: double
        height?: double
    }) {
        super();
        this.child = args.child;
        this.width = args?.width
        this.height = args?.height
    }

    static expand(child: Widget) {
        return new SizedBox({
            child: child,
            width: Double.infinity,
            height: Double.infinity
        });
    }


    static shrink(child: Widget) {
        return new SizedBox({
            child: child,
            width: 0.0,
            height: 0.0
        });
    }

    static fromSize(args: {
        child: Widget,
        size: Size
    }) {
        return new SizedBox({
            child: args.child,
            width: args.size.width,
            height: args.size.height
        });
    }
}