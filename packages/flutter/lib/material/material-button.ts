import { identifier } from "../decorations";
import { Key } from "../foundation";
import { Widget } from "../widgets";

@identifier("MaterialButton")
export class MaterialButton extends Widget {
  onPressed: Function;
  constructor({ key }: { key?: Key }) {
    super({ key });
  }
}
