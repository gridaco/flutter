import type { Widget } from "./widget";
import type { BuildContext } from "./build-context";

/**
 * https://api.flutter.dev/flutter/widgets/WidgetBuilder.html
 */
export type WidgetBuilder = (context: BuildContext) => Widget;
