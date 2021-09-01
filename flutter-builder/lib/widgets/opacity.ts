import { double } from "@coli.codes/dart-builder";
import { Widget } from ".";

/**
 * https://api.flutter.dev/flutter/widgets/Opacity-class.html
 */
export class Opacity extends Widget {
  child?: Widget;
  opacity: double;
  constructor(args: { opacity: double; child?: Widget }) {
    super();
    this.opacity = args.opacity;
    this.child = args.child;
  }
}
