import { identifier } from "../decorations";
import { Key } from "../foundation";
import { Widget } from "./widget";

/**
 * https://api.flutter.dev/flutter/widgets/ErrorWidget-class.html
 */
@identifier("ErrorWidget")
export class ErrorWidget extends Widget {
  /**
   * https://api.flutter.dev/flutter/widgets/ErrorWidget/ErrorWidget.html
   */
  constructor() {
    super({ key: undefined }); // uses unique key, no need to specify.
  }

  /**
   * https://api.flutter.dev/flutter/widgets/ErrorWidget/ErrorWidget.withDetails.html
   */
  static withDetails(args: { message: string }): ErrorWidget {
    return new ErrorWidget()
      .extendWithFactory("withDetails")
      .overrideArguments(args);
  }
}
