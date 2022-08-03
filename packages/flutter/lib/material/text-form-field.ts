import type { Color, Radius } from "../dart-ui";
import type { TextAlign } from "../dart-ui/text-align";
import type { TextDirection } from "../dart-ui/text-direction";
import type { VoidCallback } from "../dart-ui/void-callback";
import type { double } from "../dart/double";
import type { Key } from "../foundation";
import type { EdgeInsets } from "../painting";
import type { TextAlignVertical } from "../painting/text-align-vertical";
import type { TextStyle } from "../painting/text-style";
import type {
  TextCapitalization,
  TextInputAction,
  TextInputType,
} from "../services";
import type { ToolbarOptions } from "../widgets";
import type { InputDecoration } from "./input-decoration";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/material/TextFormField-class.html
 */
export class TextFormField extends Widget {
  // key?: Key
  // controller?: TextEditingController
  initialValue?: string;
  // focusNode?: FocusNode
  decoration?: InputDecoration;
  keyboardType?: TextInputType;
  textCapitalization?: TextCapitalization;
  textInputAction?: TextInputAction;
  style?: TextStyle;
  textDirection?: TextDirection;
  textAlign?: TextAlign;
  textAlignVertical?: TextAlignVertical;
  autofocus?: boolean;
  readOnly?: boolean;
  toolbarOptions?: ToolbarOptions;
  showCursor?: boolean;
  obscuringCharacter?: string;
  obscureText?: boolean;
  autocorrect?: boolean;
  enableSuggestions?: boolean;
  autovalidate?: boolean;
  maxLengthEnforced?: boolean;
  maxLines?: number;
  minLines?: number;
  expands?: boolean;
  maxLength?: number;
  // onChanged?: ValueChanged
  // onTap?: GestureTapCallback
  onEditingComplete?: VoidCallback;
  // onFieldSubmitted?: ValueChanged
  // onSaved?: FormFieldSetter
  // validator?: FormFieldValidator
  inputFormatters?: Array<string>;
  enabled?: boolean;
  cursorWidth?: double;
  cursorHeight?: double;
  cursorRadius?: Radius;
  cursorColor?: Color;
  // keyboardAppearance?: Brightness
  scrollPadding?: EdgeInsets;
  enableInteractiveSelection?: boolean;
  // buildCounter?: InputCounterWidgetBuilder
  // scrollPhysics?: ScrollPhysics
  autofillHints?: Map<string, string>;
  // autovalidateMode?: AutovalidateMode

  /**
   * https://api.flutter.dev/flutter/material/TextFormField/TextFormField.html
   */
  constructor({
    key,
    initialValue,
    decoration,
    keyboardType,
    textCapitalization,
    textInputAction,
    style,
    textDirection,
    textAlign,
    textAlignVertical,
    autofocus,
    readOnly,
    toolbarOptions,
    showCursor,
    obscuringCharacter,
    obscureText,
    autocorrect,
    enableSuggestions,
    autovalidate,
    maxLengthEnforced,
    maxLines,
    minLines,
    expands,
    maxLength,
    onEditingComplete,
    inputFormatters,
    enabled,
    cursorWidth,
    cursorHeight,
    cursorRadius,
    cursorColor,
    scrollPadding,
    enableInteractiveSelection,
    autofillHints,
  }: { key: Key } & {
    initialValue?: string;
    decoration?: InputDecoration;
    keyboardType?: TextInputType;
    textCapitalization?: TextCapitalization;
    textInputAction?: TextInputAction;
    style?: TextStyle;
    textDirection?: TextDirection;
    textAlign?: TextAlign;
    textAlignVertical?: TextAlignVertical;
    autofocus?: boolean;
    readOnly?: boolean;
    toolbarOptions?: ToolbarOptions;
    showCursor?: boolean;
    obscuringCharacter?: string;
    obscureText?: boolean;
    autocorrect?: boolean;
    enableSuggestions?: boolean;
    autovalidate?: boolean;
    maxLengthEnforced?: boolean;
    maxLines?: number;
    minLines?: number;
    expands?: boolean;
    maxLength?: number;
    onEditingComplete?: VoidCallback;
    inputFormatters?: Array<string>;
    enabled?: boolean;
    cursorWidth?: double;
    cursorHeight?: double;
    cursorRadius?: Radius;
    cursorColor?: Color;
    scrollPadding?: EdgeInsets;
    enableInteractiveSelection?: boolean;
    autofillHints?: Map<string, string>;
  }) {
    super({ key });

    // this.key = key
    // this.controller = controller
    this.initialValue = initialValue;
    // this.focusNode = focusNode
    this.decoration = decoration;
    this.keyboardType = keyboardType;
    this.textCapitalization = textCapitalization;
    this.textInputAction = textInputAction;
    this.style = style;
    this.textDirection = textDirection;
    this.textAlign = textAlign;
    this.textAlignVertical = textAlignVertical;
    this.autofocus = autofocus;
    this.readOnly = readOnly;
    this.toolbarOptions = toolbarOptions;
    this.showCursor = showCursor;
    this.obscuringCharacter = obscuringCharacter;
    this.obscureText = obscureText;
    this.autocorrect = autocorrect;
    this.enableSuggestions = enableSuggestions;
    this.autovalidate = autovalidate;
    this.maxLengthEnforced = maxLengthEnforced;
    this.maxLines = maxLines;
    this.minLines = minLines;
    this.expands = expands;
    this.maxLength = maxLength;
    // this.onChanged = onChanged
    // this.onTap = onTap
    this.onEditingComplete = onEditingComplete;
    // this.onFieldSubmitted = onFieldSubmitted
    // this.onSaved = onSaved
    // this.validator = validator
    this.inputFormatters = inputFormatters;
    this.enabled = enabled;
    this.cursorWidth = cursorWidth;
    this.cursorHeight = cursorHeight;
    this.cursorRadius = cursorRadius;
    this.cursorColor = cursorColor;
    // this.keyboardAppearance = keyboardAppearance
    this.scrollPadding = scrollPadding;
    this.enableInteractiveSelection = enableInteractiveSelection;
    // this.buildCounter = buildCounter
    // this.scrollPhysics = scrollPhysics
    this.autofillHints = autofillHints;
    // this.autovalidateMode = autovalidateMode
  }
}
