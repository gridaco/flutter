import { AlignmentGeometry } from "./alignment-geomatry";

/**
 * https://api.flutter.dev/flutter/painting/Alignment-class.html
 */
export class Alignment extends AlignmentGeometry {
    static get bottomCenter(): Alignment {
        return new Alignment().overrideSnippet("Alignment.bottomCenter");
    }

    static get bottomLeft(): Alignment {
        return new Alignment().overrideSnippet("Alignment.bottomLeft");
    }

    static get bottomRight(): Alignment {
        return new Alignment().overrideSnippet("Alignment.bottomRight");
    }

    static get center(): Alignment {
        return new Alignment().overrideSnippet("Alignment.center");
    }

    static get centerLeft(): Alignment {
        return new Alignment().overrideSnippet("Alignment.centerLeft");
    }

    static get centerRight(): Alignment {
        return new Alignment().overrideSnippet("Alignment.centerRight");
    }

    static get topCenter(): Alignment {
        return new Alignment().overrideSnippet("Alignment.topCenter");
    }

    static get topLeft(): Alignment {
        return new Alignment().overrideSnippet("Alignment.topLeft");
    }

    static get topRight(): Alignment {
        return new Alignment().overrideSnippet("Alignment.topRight");
    }
}