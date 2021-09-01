import { BuildableTree } from "../builder";
import { double } from "@coli.codes/dart-builder";
import { Color, TextDecorationStyle } from "../dart-ui";
import { FontStyle } from "../dart-ui/font-style";
import { FontWeight } from "../dart-ui/font-weight";
import { TextDecoration } from "../dart-ui/text-decoration";
import { TextBaseline } from "./text-baseline";

/**
 * https://api.flutter.dev/flutter/painting/TextStyle-class.html
 *
 */
export class TextStyle extends BuildableTree {
  color?: Color;
  fontSize?: double;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  fontFamily?: string;
  decoration?: TextDecoration;
  letterSpacing?: double;
  constructor(args?: {
    color?: Color;
    fontSize?: double;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    fontFamily?: string;
    decoration?: TextDecoration;
    letterSpacing?: double;
  }) {
    super();
    this.color = args?.color;
    this.fontSize = args?.fontSize;
    this.fontWeight = args?.fontWeight;
    this.fontStyle = args?.fontStyle;
    this.fontFamily = args?.fontFamily;
    this.decoration = args?.decoration;
    this.letterSpacing = args?.letterSpacing;
  }

  /**
   * https://api.flutter.dev/flutter/painting/TextStyle/copyWith.html
   */
  copyWith(args: {
    inherit?: boolean;
    color?: Color;
    backgroundColor?: Color;
    fontFamily?: string;
    fontFamilyFallback?: Array<string>;
    fontSize?: double;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    letterSpacing?: double;
    wordSpacing?: double;
    textBaseline?: TextBaseline;
    height?: double;
    // Locale? locale,
    // Paint? foreground,
    // Paint? background,
    // List<Shadow>? shadows,
    // List<FontFeature>?fontFeatures,
    decoration?: TextDecoration;
    decorationColor?: Color;
    decorationStyle?: TextDecorationStyle;
    decorationThickness?: double;
    debugLabel?: string;
  }): this {
    return this.extendWithExtensionFunction("copyWith", args);
  }
}
