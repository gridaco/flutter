import { Color } from "@bridged.xyz/remote-ui-core";
import { FontStyle } from "@bridged.xyz/remote-ui-core/dist/lib/widgets/text";
import { BuildableTree } from "../builder/buildable-widget";
import { double } from "../dart";
import { FontWeight } from "../dart-ui/font-weight";

/**
 * https://api.flutter.dev/flutter/painting/TextStyle-class.html
 * 
 */
export class TextStyle extends BuildableTree {
    color?: Color
    fontSize?: double
    fontWeight?: FontWeight
    fontStyle?: FontStyle
    fontFamily?: string
    constructor(args?: {
        color?: Color
        fontSize?: double
        fontWeight?: FontWeight
        fontStyle?: FontStyle
        fontFamily?: string
    }) {
        super();
        this.color = args?.color;
        this.fontSize = args?.fontSize;
        this.fontWeight = args?.fontWeight;
        this.fontStyle = args?.fontStyle;
        this.fontFamily = args?.fontFamily
    }
}

// original
/**
 * const TextStyle(
{bool inherit: true,
Color color,
Color backgroundColor,
double fontSize,
FontWeight fontWeight,
FontStyle fontStyle,
double letterSpacing,
double wordSpacing,
TextBaseline textBaseline,
double height,
Locale locale,
Paint foreground,
Paint background,
List<Shadow> shadows,
List<FontFeature> fontFeatures,
TextDecoration decoration,
Color decorationColor,
TextDecorationStyle decorationStyle,
double decorationThickness,
String debugLabel,
String fontFamily,
List<String> fontFamilyFallback,
String package}
)
 */