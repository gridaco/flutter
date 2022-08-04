import { BuildableTree } from "../builder";
import { Color } from "../dart-ui/color";
import { identifier } from "../decorations";
import { EdgeInsetsGeometry } from "../painting/edge-insets-geometry";
import { TextStyle } from "../painting/text-style";
import { BoxConstraints } from "../rendering/box-constraints";
import { Widget } from "../widgets/widget";
import { InputBorder } from "./input-boarder";
/**
 * https://api.flutter.dev/flutter/material/InputDecoration-class.html
 */
@identifier("InputDecoration")
export class InputDecoration extends BuildableTree {
  icon?: Widget;
  labelText?: string;
  labelStyle?: TextStyle;
  helperText?: string;
  helperStyle?: TextStyle;
  helperMaxLines?: number;
  hintText?: string;
  hintStyle?: TextStyle;
  hintMaxLines?: number;
  errorText?: string;
  errorStyle?: TextStyle;
  errorMaxLines?: number;
  isCollapsed?: boolean;
  isDense?: boolean;
  contentPadding?: EdgeInsetsGeometry;
  prefixIcon?: Widget;
  prefixIconConstraints?: BoxConstraints;
  prefix?: Widget;
  prefixText?: string;
  prefixStyle?: TextStyle;
  suffixIcon?: Widget;
  suffix?: Widget;
  suffixText?: string;
  suffixStyle?: TextStyle;
  suffixIconConstraints?: BoxConstraints;
  counter?: Widget;
  counterText?: string;
  counterStyle?: TextStyle;
  filled?: boolean;
  fillColor?: Color;
  focusColor?: Color;
  hoverColor?: Color;
  errorBorder?: InputBorder;
  focusedBorder?: InputBorder;
  focusedErrorBorder?: InputBorder;
  disabledBorder?: InputBorder;
  enabledBorder?: InputBorder;
  border?: InputBorder;
  enabled?: boolean;
  semanticCounterText?: string;
  alignLabelWithHin?: boolean;

  /**
   * https://api.flutter.dev/flutter/material/InputDecoration/InputDecoration.html
   */
  constructor(args: {
    icon?: Widget;
    labelText?: string;
    labelStyle?: TextStyle;
    helperText?: string;
    helperStyle?: TextStyle;
    helperMaxLines?: number;
    hintText?: string;
    hintStyle?: TextStyle;
    hintMaxLines?: number;
    errorText?: string;
    errorStyle?: TextStyle;
    errorMaxLines?: number;
    isCollapsed?: boolean;
    isDense?: boolean;
    contentPadding?: EdgeInsetsGeometry;
    prefixIcon?: Widget;
    prefixIconConstraints?: BoxConstraints;
    prefix?: Widget;
    prefixText?: string;
    prefixStyle?: TextStyle;
    suffixIcon?: Widget;
    suffix?: Widget;
    suffixText?: string;
    suffixStyle?: TextStyle;
    suffixIconConstraints?: BoxConstraints;
    counter?: Widget;
    counterText?: string;
    counterStyle?: TextStyle;
    filled?: boolean;
    fillColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
    enabled?: boolean;
    semanticCounterText?: string;
    alignLabelWithHin?: boolean;
  }) {
    super();

    this.icon = args?.icon;
    this.labelText = args?.labelText;
    this.labelStyle = args?.labelStyle;
    this.helperText = args?.helperText;
    this.helperStyle = args?.helperStyle;
    this.helperMaxLines = args?.helperMaxLines;
    this.hintText = args?.hintText;
    this.hintStyle = args?.hintStyle;
    this.hintMaxLines = args?.hintMaxLines;
    this.errorText = args?.errorText;
    this.errorStyle = args?.errorStyle;
    this.errorMaxLines = args?.errorMaxLines;
    this.isCollapsed = args?.isCollapsed;
    this.isDense = args?.isDense;
    this.contentPadding = args?.contentPadding;
    this.prefixIcon = args?.prefixIcon;
    this.prefixIconConstraints = args?.prefixIconConstraints;
    this.prefix = args?.prefix;
    this.prefixText = args?.prefixText;
    this.prefixStyle = args?.prefixStyle;
    this.suffixIcon = args?.suffixIcon;
    this.suffix = args?.suffix;
    this.suffixText = args?.suffixText;
    this.suffixStyle = args?.suffixStyle;
    this.suffixIconConstraints = args?.suffixIconConstraints;
    this.counter = args?.counter;
    this.counterText = args?.counterText;
    this.counterStyle = args?.counterStyle;
    this.filled = args?.filled;
    this.fillColor = args?.fillColor;
    this.focusColor = args?.focusColor;
    this.hoverColor = args?.hoverColor;
    this.errorBorder = args?.errorBorder;
    this.focusedBorder = args?.focusedBorder;
    this.focusedErrorBorder = args?.focusedErrorBorder;
    this.disabledBorder = args?.disabledBorder;
    this.enabledBorder = args?.enabledBorder;
    this.border = args?.border;
    this.enabled = args?.enabled;
    this.semanticCounterText = args?.semanticCounterText;
    this.alignLabelWithHin = args?.alignLabelWithHin;
  }
}
