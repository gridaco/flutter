import { Key } from "../foundation";
import { Widget } from "../widgets";

export class MaterialButton extends Widget {
  onPressed: Function;
  constructor({ key }: { key?: Key }) {
    super({ key });
  }
}
