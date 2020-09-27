import { Color } from "@bridged.xyz/remote-ui-core";
import { FontStyle, FontWeight } from "@bridged.xyz/remote-ui-core/dist/lib/widgets/text";
import { double } from "../dart";

/**
 * https://api.flutter.dev/flutter/painting/TextStyle-class.html
 * 
 */
export class TextStyle {
    color: Color
    fontSize: double
    fontWeight: FontWeight
    fontStyle: FontStyle
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