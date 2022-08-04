import { identifier } from "../decorations";
import { BorderSide } from "./border-side";
import { ShapeBorder } from "./shape-border";

@identifier("OutlineBorder")
export class OutlineBorder extends ShapeBorder {
  side: BorderSide;

  constructor({
    side, // BorderSide.none
  }: {
    side?: BorderSide;
  }) {
    super();
    this.side = side;
  }
}
