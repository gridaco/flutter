import { BuildableTree } from "../builder";
import { double } from "@coli.codes/dart-builder";

export class Size extends BuildableTree {
  width: double;
  height: double;

  constructor(width: double, height: double) {
    super();
    this.width = width;
    this.height = height;
  }
}
