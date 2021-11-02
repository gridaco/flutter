import {
  Shadow,
  FontStyle,
  FontWeight,
  TextDecoration,
  Color,
  TextDecorationStyle,
} from "./../dart-ui";
import { BuildableTree } from "../builder/buildable-tree";
import { double } from "../dart";
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
  height?: double;
  letterSpacing?: double;
  shadows?: Array<Shadow>;
  constructor(args?: {
    color?: Color;
    fontSize?: double;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    fontFamily?: string;
    decoration?: TextDecoration;
    height?: double;
    letterSpacing?: double;
    shadows?: Array<Shadow>;
  }) {
    super();
    this.color = args?.color;
    this.fontSize = args?.fontSize;
    this.fontWeight = args?.fontWeight;
    this.fontStyle = args?.fontStyle;
    this.fontFamily = args?.fontFamily;
    this.decoration = args?.decoration;
    this.height = args?.height;
    this.letterSpacing = args?.letterSpacing;
    this.shadows = args?.shadows;
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
    // List<FontFeature>?fontFeatures,
    shadows?: Array<Shadow>;
    decoration?: TextDecoration;
    decorationColor?: Color;
    decorationStyle?: TextDecorationStyle;
    decorationThickness?: double;
    debugLabel?: string;
  }): this {
    return this.extendWithExtensionFunction("copyWith", args);
  }
}
