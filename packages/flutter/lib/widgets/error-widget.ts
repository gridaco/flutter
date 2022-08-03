import { Key } from "../foundation";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/ErrorWidget-class.html
 */
export class ErrorWidget extends Widget {
  constructor({ key }: { key?: Key }) {
    super({ key });
  }

  /**
   * https://api.flutter.dev/flutter/widgets/ErrorWidget/ErrorWidget.withDetails.html
   */
  static withDetails(args: { key?: Key; message: string }): ErrorWidget {
    return new ErrorWidget({ key: args.key })
      .extendWithFactory("withDetails")
      .overrideArguments(args);
  }
}
