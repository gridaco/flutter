import { Snippet } from "coli";
import { Color } from "../dart-ui";
import { BuildContext } from "../widgets";

export function showDialog() {
  return new ShowDialogFactory({
    context: Snippet.fromStatic("context"),
  });
}

// DO NOT EXPORT THIS
class ShowDialogFactory extends Snippet {
  constructor(args: {
    context: BuildContext;
    // builder?: WidgetBuilder,
    barrierDismissible?: boolean;
    barrierColor?: Color;
    useSafeArea?: boolean;
    useRootNavigator?: boolean;
    // routeSettings?: RouteSettings
  }) {
    // TODO -> provide snippet with arguments
    const snippet = "";
    super(snippet);
  }
}
