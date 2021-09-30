import assert from "assert";

/**
 * https://api.flutter.dev/flutter/widgets/ScrollController-class.html
 */
export class ScrollController {
  initialScrollOffset: number;
  keepScrollOffset: boolean;
  debugLabel?: string;

  /**
   * https://api.flutter.dev/flutter/widgets/ScrollController/ScrollController.html
   */
  constructor({
    initialScrollOffset = 0.0,
    keepScrollOffset,
    debugLabel,
  }: {
    initialScrollOffset?: number;
    keepScrollOffset: boolean;
    debugLabel?: string;
  }) {
    assert(initialScrollOffset != null);
    assert(keepScrollOffset != null);

    this.initialScrollOffset = initialScrollOffset;
    this.keepScrollOffset = keepScrollOffset;
    this.debugLabel = debugLabel;
  }
}
