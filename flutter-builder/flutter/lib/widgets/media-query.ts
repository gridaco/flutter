import { BuildableTree, Snippet } from "../builder/buildable-tree";
import { double } from "../dart";
import { identifier } from "../decorations";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/MediaQuery-class.html
 */
@identifier("MediaQuery")
export class MediaQuery extends Widget {
  constructor() {
    super({ key: undefined });
  }

  /**
   * https://api.flutter.dev/flutter/widgets/MediaQuery/of.html
   */
  static of(): MediaQueryDefaults {
    return {
      size: MediaQueryDataSizeDefaults,
    };
  }
}

export interface MediaQueryDefaults {
  size: typeof MediaQueryDataSizeDefaults;
}

export class MediaQueryDataSizeDefaults {
  public static get width(): double {
    return Snippet.fromStatic<BuildableTree>(
      "MediaQuery.of(context).size.width"
    ) as double;
  }

  public static get height(): double {
    return Snippet.fromStatic<BuildableTree>(
      "MediaQuery.of(context).size.height"
    ) as double;
  }
}
