import { Snippet } from "../builder/buildable-tree";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/rendering/TextOverflow-class.html
 */
@identifier("TextOverflow")
export class TextOverflow extends Snippet {
  static readonly clip = new Snippet("TextOverflow.clip");
  static readonly ellipsis = new Snippet("TextOverflow.ellipsis");
  static readonly fade = new Snippet("TextOverflow.fade");
  static readonly visible = new Snippet("TextOverflow.visible");
}
