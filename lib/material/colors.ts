import { Snippet } from "../builder/buildable-tree"
import { Color } from "../dart-ui/color"

/**
 * https://api.flutter.dev/flutter/material/Colors-class.html
 */
export class Colors extends Snippet {
    static get white(): Color {
        const color = new Color()
        color.overrideSnippet("Colors.white")
        return color;
    }

    static get black(): Color {
        const color = new Color()
        color.overrideSnippet("Colors.black")
        return color;
    }

    static get transparent(): Color {
        const color = new Color()
        color.overrideSnippet("Colors.transparent")
        return color;
    }
}