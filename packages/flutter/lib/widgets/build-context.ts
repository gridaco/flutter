import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";
/**
 * https://api.flutter.dev/flutter/widgets/BuildContext-class.html
 */
@identifier("BuildContext")
export class BuildContext extends Snippet {
  constructor(contextVariableName = "context") {
    super(contextVariableName);
  }
}
