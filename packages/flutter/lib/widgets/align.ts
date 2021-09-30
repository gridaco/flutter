import { Widget } from "./widget";
import { AlignmentGeometry } from "../painting/alignment-geomatry";

/**
 * https://api.flutter.dev/flutter/widgets/Align-class.html
 */
export class Align extends Widget {
  alignment?: AlignmentGeometry;
  child?: Widget;
  constructor(args: { alignment?: AlignmentGeometry; child?: Widget }) {
    super();
    this.alignment = args.alignment;
    this.child = args.child;
  }
}
