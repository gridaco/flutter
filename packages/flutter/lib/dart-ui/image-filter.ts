import { BuildableTree } from "../builder/buildable-tree";
import { TileMode } from "./tile-mode";
import type { double } from "../dart";

/**
 * https://api.flutter.dev/flutter/dart-ui/ImageFilter-class.html
 */
export class ImageFilter extends BuildableTree {
  /**
   * https://api.flutter.dev/flutter/dart-ui/ImageFilter/ImageFilter.blur.html
   * @returns
   */
  static blur({
    sigmaX = 0.0,
    sigmaY = 0.0,
    tileMode = TileMode.clamp as TileMode,
  }: {
    sigmaX?: double;
    sigmaY?: double;
    tileMode?: TileMode;
  }) {
    const args = {
      sigmaX,
      sigmaY,
      tileMode,
    };
    return new ImageFilter().extendWithFactory("blur").overrideArguments(args);
  }

  static compose() {
    throw `compose not implemented`;
  }

  static matrix() {
    throw `matrix not implemented`;
  }
}
