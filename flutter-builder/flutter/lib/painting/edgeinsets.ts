import { double } from "../dart/double";
import { identifier } from "../decorations";
import { EdgeInsetsGeometry } from "./edge-insets-geometry";

@identifier("EdgeInsets")
export class EdgeInsets extends EdgeInsetsGeometry {
  left?: double;
  right?: double;
  top?: double;
  topLeft?: double;
  topRight?: double;
  horizontal?: double;
  vertical?: double;

  static only(args?: {
    left?: double;
    top?: double;
    right?: double;
    bottom?: double;
  }): EdgeInsets {
    return new EdgeInsets().extendWithFactory("only").overrideArguments(args);
  }

  static symmetric(args?: {
    horizontal?: double;
    vertical?: double;
  }): EdgeInsets {
    return new EdgeInsets()
      .extendWithFactory("symmetric")
      .overrideArguments(args);
  }

  static all(value: double): EdgeInsets {
    return new EdgeInsets().extendWithFactory("all").overrideArguments({
      __default__: value,
    });
  }
}
