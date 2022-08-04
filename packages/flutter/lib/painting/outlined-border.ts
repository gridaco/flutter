import { identifier } from "../decorations";
import { BorderSide } from "./border-side";
import { ShapeBorder } from "./shape-border";

@identifier("OutlinedBorder")
export class OutlinedBorder extends ShapeBorder {
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
