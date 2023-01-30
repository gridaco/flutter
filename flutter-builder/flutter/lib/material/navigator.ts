import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/widgets/Navigator-class.html
 */
@identifier("Navigator")
export class Navigator extends Widget {
  static of(): Navigator {
    return new Navigator({ key: undefined });
  }

  pushNamed(route: string): Navigator {
    return new Navigator({ key: undefined })
      .extendWithFactory("of")
      .overrideArguments<Navigator>({
        __default__: Snippet.fromStatic("context"),
      })
      .extendWithExtensionFunction("pushNamed", {
        __default__: route,
      });
  }

  pop(): Navigator {
    return new Navigator({ key: undefined })
      .extendWithFactory("of")
      .overrideArguments<Navigator>({
        __default__: Snippet.fromStatic("context"),
      })
      .extendWithExtensionFunction("pop", {});
  }
}

class NavigatorDefaults extends Snippet {}
