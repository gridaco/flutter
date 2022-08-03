import { Widget } from "./widget";
import { double } from "../dart";
import { BoxFit } from "../painting/box-fit";
import { Key } from "../foundation";

interface FactoryArgs {
  key?: Key;
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
  constructor(args?: { key?: Key }) {
    super({ key: args?.key });
  }

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
