import { Color, Radius } from "../dart-ui";
import { TextAlign } from "../dart-ui/text-align";
import { TextDirection } from "../dart-ui/text-direction";
import { VoidCallback } from "../dart-ui/void-callback";
import { double } from "@coli.codes/dart-builder";
import { EdgeInsets } from "../painting";
import { TextAlignVertical } from "../painting/text-align-vertical";
import { TextStyle } from "../painting/text-style";
import {
  TextCapitalization,
  TextInputAction,
  TextInputType,
} from "../services";
import { ToolbarOptions, Widget } from "../widgets";
import { InputDecoration } from "./input-decoration";

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
  constructor(args?: {
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
    super();

    // this.key = args?.key
    // this.controller = args?.controller
    this.initialValue = args?.initialValue;
    // this.focusNode = args?.focusNode
    this.decoration = args?.decoration;
    this.keyboardType = args?.keyboardType;
    this.textCapitalization = args?.textCapitalization;
    this.textInputAction = args?.textInputAction;
    this.style = args?.style;
    this.textDirection = args?.textDirection;
    this.textAlign = args?.textAlign;
    this.textAlignVertical = args?.textAlignVertical;
    this.autofocus = args?.autofocus;
    this.readOnly = args?.readOnly;
    this.toolbarOptions = args?.toolbarOptions;
    this.showCursor = args?.showCursor;
    this.obscuringCharacter = args?.obscuringCharacter;
    this.obscureText = args?.obscureText;
    this.autocorrect = args?.autocorrect;
    this.enableSuggestions = args?.enableSuggestions;
    this.autovalidate = args?.autovalidate;
    this.maxLengthEnforced = args?.maxLengthEnforced;
    this.maxLines = args?.maxLines;
    this.minLines = args?.minLines;
    this.expands = args?.expands;
    this.maxLength = args?.maxLength;
    // this.onChanged = args?.onChanged
    // this.onTap = args?.onTap
    this.onEditingComplete = args?.onEditingComplete;
    // this.onFieldSubmitted = args?.onFieldSubmitted
    // this.onSaved = args?.onSaved
    // this.validator = args?.validator
    this.inputFormatters = args?.inputFormatters;
    this.enabled = args?.enabled;
    this.cursorWidth = args?.cursorWidth;
    this.cursorHeight = args?.cursorHeight;
    this.cursorRadius = args?.cursorRadius;
    this.cursorColor = args?.cursorColor;
    // this.keyboardAppearance = args?.keyboardAppearance
    this.scrollPadding = args?.scrollPadding;
    this.enableInteractiveSelection = args?.enableInteractiveSelection;
    // this.buildCounter = args?.buildCounter
    // this.scrollPhysics = args?.scrollPhysics
    this.autofillHints = args?.autofillHints;
    // this.autovalidateMode = args?.autovalidateMode
  }
}
