import { Color } from "@bridged.xyz/remote-ui-core";
import { BuildableTree } from "../builder/buildable-widget";
import { double } from "../dart";
import { FontStyle } from "../dart-ui/font-style";
import { FontWeight } from "../dart-ui/font-weight";
import { TextDecoration } from "../dart-ui/text-decoration";

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
    decoration?: TextDecoration
    letterSpacing?: double
    constructor(args?: {
        color?: Color
        fontSize?: double
        fontWeight?: FontWeight
        fontStyle?: FontStyle
        fontFamily?: string
        decoration?: TextDecoration
        letterSpacing?: double
    }) {
        super();
        this.color = args?.color;
        this.fontSize = args?.fontSize;
        this.fontWeight = args?.fontWeight;
        this.fontStyle = args?.fontStyle;
        this.fontFamily = args?.fontFamily
        this.decoration = args?.decoration
        this.letterSpacing = args?.letterSpacing
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