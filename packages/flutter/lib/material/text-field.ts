import type { Color } from "../dart-ui/color";
import type { Radius } from "../dart-ui/radius";
import type { TextAlign } from "../dart-ui/text-align";
import type { TextDirection } from "../dart-ui/text-direction";
import type { VoidCallback } from "../dart-ui/void-callback";
import type { double } from "../dart/double";
import type { Key } from "../foundation";
import type { EdgeInsets } from "../painting/edgeinsets";
import type { TextAlignVertical } from "../painting/text-align-vertical";
import type { TextStyle } from "../painting/text-style";
import type { ToolbarOptions } from "../widgets";
import type { InputDecoration } from "./input-decoration";
import { Widget } from "../widgets";

/**
 * https://api.flutter.dev/flutter/material/TextField-class.html
 */
export class TextField extends Widget {
  // controller: TextEditingController
  // focusNode: FocusNode
  decoration: InputDecoration;
  // keyboardType: TextInputType
  // textInputAction: TextInputAction
  // textCapitalization: TextCapitalization
  style: TextStyle;
  // strutStyle: StrutStyle
  textAlign: TextAlign;
  textAlignVertical: TextAlignVertical;
  textDirection: TextDirection;
  readOnly: boolean;
  toolbarOptions: ToolbarOptions;
  showCursor: boolean;
  autofocus: boolean;
  obscuringCharacter: string;
  obscureText: boolean;
  autocorrect: boolean;
  // smartDashesType: SmartDashesType
  // smartQuotesType: SmartQuotesType
  enableSuggestions: boolean;
  maxLines: number;
  minLines: number;
  expands: boolean;
  maxLength: number;
  maxLengthEnforced: boolean;
  // onChanged: ValueChanged
  onEditingComplete: VoidCallback;
  // onSubmitted: ValueChanged
  // onAppPrivateCommand: AppPrivateCommandCallback
  inputFormatters: Array<string>;
  enabled: boolean;
  cursorWidth: double;
  cursorHeight: double;
  cursorRadius: Radius;
  cursorColor: Color;
  // selectionHeightStyle: BoxHeightStyle
  // selectionWidthStyle: BoxWidthStyle
  // keyboardAppearance: Brightness
  scrollPadding: EdgeInsets;
  // dragStartBehavior: DragStartBehavior
  enableInteractiveSelection: boolean;
  // onTap: GestureTapCallback
  // mouseCursor: MouseCursor
  // buildCounter: InputCounterWidgetBuilder
  // scrollController: ScrollController
  // scrollPhysics: ScrollPhysics
  autofillHints: Map<string, string>;
  restorationId: string;
  /**
   * https://api.flutter.dev/flutter/material/TextField/TextField.html
   */
  constructor({
    key,
    // controller,
    // focusNode,
    decoration,
    // keyboardType,
    // textInputAction,
    // textCapitalization,
    style,
    // strutStyle,
    textAlign,
    textAlignVertical,
    textDirection,
    readOnly,
    toolbarOptions,
    showCursor,
    autofocus,
    obscuringCharacter,
    obscureText,
    autocorrect,
    // smartDashesType,
    // smartQuotesType,
    enableSuggestions,
    maxLines,
    minLines,
    expands,
    maxLength,
    maxLengthEnforced,
    // onChanged,
    onEditingComplete,
    // onSubmitted,
    // onAppPrivateCommand,
    inputFormatters,
    enabled,
    cursorWidth,
    cursorHeight,
    cursorRadius,
    cursorColor,
    // selectionHeightStyle,
    // selectionWidthStyle,
    // keyboardAppearance,
    scrollPadding,
    // dragStartBehavior,
    enableInteractiveSelection,
    // onTap,
    // mouseCursor,
    // buildCounter,
    // scrollController,
    // scrollPhysics,
    autofillHints,
    restorationId,
  }: {
    key: Key;
  } & {
    // controller: TextEditingController
    // focusNode: FocusNode
    decoration?: InputDecoration;
    // keyboardType: TextInputType
    // textInputAction: TextInputAction
    // textCapitalization: TextCapitalization
    style?: TextStyle;
    // strutStyle: StrutStyle
    textAlign?: TextAlign;
    textAlignVertical?: TextAlignVertical;
    textDirection?: TextDirection;
    readOnly?: boolean;
    toolbarOptions?: ToolbarOptions;
    showCursor?: boolean;
    autofocus?: boolean;
    obscuringCharacter?: string;
    obscureText?: boolean;
    autocorrect?: boolean;
    // smartDashesType: SmartDashesType
    // smartQuotesType: SmartQuotesType
    enableSuggestions?: boolean;
    maxLines?: number;
    minLines?: number;
    expands?: boolean;
    maxLength?: number;
    maxLengthEnforced?: boolean;
    // onChanged: ValueChanged
    onEditingComplete?: VoidCallback;
    // onSubmitted: ValueChanged
    // onAppPrivateCommand: AppPrivateCommandCallback
    inputFormatters?: Array<string>;
    enabled?: boolean;
    cursorWidth?: double;
    cursorHeight?: double;
    cursorRadius?: Radius;
    cursorColor?: Color;
    // selectionHeightStyle: BoxHeightStyle
    // selectionWidthStyle: BoxWidthStyle
    // keyboardAppearance: Brightness
    scrollPadding?: EdgeInsets;
    // dragStartBehavior: DragStartBehavior
    enableInteractiveSelection?: boolean;
    // onTap: GestureTapCallback
    // mouseCursor: MouseCursor
    // buildCounter: InputCounterWidgetBuilder
    // scrollController: ScrollController
    // scrollPhysics: ScrollPhysics
    autofillHints?: Map<string, string>;
    restorationId?: string;
  }) {
    super({ key });

    // this.key = key
    // this.controller = controller
    // this.focusNode = focusNode
    this.decoration = decoration;
    // this.keyboardType = keyboardType
    // this.textInputAction = textInputAction
    // this.textCapitalization = textCapitalization
    this.style = style;
    // this.strutStyle = strutStyle
    this.textAlign = textAlign;
    this.textAlignVertical = textAlignVertical;
    this.textDirection = textDirection;
    this.readOnly = readOnly;
    this.toolbarOptions = toolbarOptions;
    this.showCursor = showCursor;
    this.autofocus = autofocus;
    this.obscuringCharacter = obscuringCharacter;
    this.obscureText = obscureText;
    this.autocorrect = autocorrect;
    // this.smartDashesType = smartDashesType
    // this.smartQuotesType = smartQuotesType
    this.enableSuggestions = enableSuggestions;
    this.maxLines = maxLines;
    this.minLines = minLines;
    this.expands = expands;
    this.maxLength = maxLength;
    this.maxLengthEnforced = maxLengthEnforced;
    // this.onChanged = onChanged
    this.onEditingComplete = onEditingComplete;
    // this.onSubmitted = onSubmitted
    // this.onAppPrivateCommand = onAppPrivateCommand
    this.inputFormatters = inputFormatters;
    this.enabled = enabled;
    this.cursorWidth = cursorWidth;
    this.cursorHeight = cursorHeight;
    this.cursorRadius = cursorRadius;
    this.cursorColor = cursorColor;
    // this.selectionHeightStyle = selectionHeightStyle
    // this.selectionWidthStyle = selectionWidthStyle
    // this.keyboardAppearance = keyboardAppearance
    this.scrollPadding = scrollPadding;
    // this.dragStartBehavior = dragStartBehavior
    this.enableInteractiveSelection = enableInteractiveSelection;
    // this.onTap = onTap
    // this.mouseCursor = mouseCursor
    // this.buildCounter = buildCounter
    // this.scrollController = scrollController
    // this.scrollPhysics = scrollPhysics
    this.autofillHints = autofillHints;
    this.restorationId = restorationId;
  }
}
