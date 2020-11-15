import { Snippet } from "../builder/buildable-tree"
import { Color } from "../dart-ui/color"

/**
 * https://api.flutter.dev/flutter/material/Colors-class.html
 */
export class Colors extends Snippet {
    static get white(): Color {
        return new Color(0xffffffffff).overrideSnippet("Colors.white")
    }

    static get black(): Color {
        return new Color(0xff000000).overrideSnippet("Colors.black")
    }

    static get transparent(): Color {
        return new Color(0xff000000).overrideSnippet("Colors.transparent")
    }
}