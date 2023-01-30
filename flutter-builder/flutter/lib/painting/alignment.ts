import { double } from "../dart";
import { identifier } from "../decorations";
import { defaultParam } from "../decorations/params";
import { AlignmentGeometry } from "./alignment-geomatry";

/**
 * https://api.flutter.dev/flutter/painting/Alignment-class.html
 */
@identifier("Alignment")
export class Alignment extends AlignmentGeometry {
  @defaultParam()
  x: double;
  @defaultParam()
  y: double;

  constructor(x: double, y: double) {
    super();
    this.x = x;
    this.y = y;
  }

  static get bottomCenter(): Alignment {
    return new Alignment(0, 1).overrideSnippet("Alignment.bottomCenter");
  }

  static get bottomLeft(): Alignment {
    return new Alignment(-1.0, 1.0).overrideSnippet("Alignment.bottomLeft");
  }

  static get bottomRight(): Alignment {
    return new Alignment(1.0, 1.0).overrideSnippet("Alignment.bottomRight");
  }

  static get center(): Alignment {
    return new Alignment(0.0, 0.0).overrideSnippet("Alignment.center");
  }

  static get centerLeft(): Alignment {
    return new Alignment(-1.0, 0.0).overrideSnippet("Alignment.centerLeft");
  }

  static get centerRight(): Alignment {
    return new Alignment(1.0, 0.0).overrideSnippet("Alignment.centerRight");
  }

  static get topCenter(): Alignment {
    return new Alignment(0.0, -1.0).overrideSnippet("Alignment.topCenter");
  }

  static get topLeft(): Alignment {
    return new Alignment(-1.0, -1.0).overrideSnippet("Alignment.topLeft");
  }

  static get topRight(): Alignment {
    return new Alignment(1.0, -1.0).overrideSnippet("Alignment.topRight");
  }
}
