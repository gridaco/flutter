import { BuildableTree } from "../builder";
import { double } from "../dart/double";
import { identifier } from "../decorations";

@identifier("Size")
export class Size extends BuildableTree {
  width: double;
  height: double;

  constructor(width: double, height: double) {
    super();
    this.width = width;
    this.height = height;
  }
}
