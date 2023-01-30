import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";

@identifier("MainAxisSize")
export class MainAxisSize extends Snippet {
  static readonly max = new Snippet("MainAxisSize.max");
  static readonly min = new Snippet("MainAxisSize.min");
}
