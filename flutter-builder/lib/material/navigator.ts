import { Snippet } from "coli/lib/snippet";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/widgets/Navigator-class.html
 */
export class Navigator extends Widget {
  static of(): Navigator {
    return new Navigator();
  }

  pushNamed(route: string): Navigator {
    return new Navigator()
      .extendWithFactory("of")
      .overrideArguments<Navigator>({
        __default__: Snippet.fromStatic("context"),
      })
      .extendWithExtensionFunction("pushNamed", {
        __default__: route,
      });
  }

  pop(): Navigator {
    return new Navigator()
      .extendWithFactory("of")
      .overrideArguments<Navigator>({
        __default__: Snippet.fromStatic("context"),
      })
      .extendWithExtensionFunction("pop", {});
  }
}

class NavigatorDefaults extends Snippet {}
