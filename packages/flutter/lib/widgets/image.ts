import { Widget } from "./widget";
import { double } from "../dart";
import { BoxFit } from "../painting/box-fit";

interface FactoryArgs {
  width?: double;
  height?: double;
  loadingBuilder?;
  semanticLabel?: string;
  fit?: BoxFit;
}

/**
 * https://api.flutter.dev/flutter/widgets/Image-class.html
 */
export class Image extends Widget {
  static network(src: string, args?: FactoryArgs): Image {
    return new Image().extendWithFactory("network").overrideArguments({
      __default__: src,
      ...args,
    });
  }

  static asset(src: string, args?: FactoryArgs): Image {
    return new Image().extendWithFactory("asset").overrideArguments({
      __default__: src,
      ...args,
    });
  }
}
