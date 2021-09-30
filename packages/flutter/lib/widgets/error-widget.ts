import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/ErrorWidget-class.html
 */
export class ErrorWidget extends Widget {
  constructor() {
    super();
  }

  /**
   * https://api.flutter.dev/flutter/widgets/ErrorWidget/ErrorWidget.withDetails.html
   */
  static withDetails(args: { message: string }) {
    new ErrorWidget().extendWithFactory("withDetails").overrideArguments(args);
  }
}
