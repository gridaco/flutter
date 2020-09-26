import { Widget } from ".";
import { BoxDecoration } from "../painting/boxdecoration";

export class Container extends Widget {
    child: Widget
    decoration: BoxDecoration
    width: number
    height: number
}