import { Color } from "../dart-ui/color";
import { Radius } from "../dart-ui/radius";
import { TextAlign } from "../dart-ui/text-align";
import { TextDirection } from "../dart-ui/text-direction";
import { VoidCallback } from "../dart-ui/void-callback";
import { double } from "@coli.codes/dart-builder";
import { EdgeInsets } from "../painting/edgeinsets";
import { TextAlignVertical } from "../painting/text-align-vertical";
import { TextStyle } from "../painting/text-style";
import { ToolbarOptions, Widget } from "../widgets";
import { InputDecoration } from "./input-decoration";

/**
 * https://api.flutter.dev/flutter/material/TextField-class.html
 */
export class TextField extends Widget {
  // key: Key
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
  constructor(args?: {
    // key: Key
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
    super();

    // this.key = args?.key
    // this.controller = args?.controller
    // this.focusNode = args?.focusNode
    this.decoration = args?.decoration;
    // this.keyboardType = args?.keyboardType
    // this.textInputAction = args?.textInputAction
    // this.textCapitalization = args?.textCapitalization
    this.style = args?.style;
    // this.strutStyle = args?.strutStyle
    this.textAlign = args?.textAlign;
    this.textAlignVertical = args?.textAlignVertical;
    this.textDirection = args?.textDirection;
    this.readOnly = args?.readOnly;
    this.toolbarOptions = args?.toolbarOptions;
    this.showCursor = args?.showCursor;
    this.autofocus = args?.autofocus;
    this.obscuringCharacter = args?.obscuringCharacter;
    this.obscureText = args?.obscureText;
    this.autocorrect = args?.autocorrect;
    // this.smartDashesType = args?.smartDashesType
    // this.smartQuotesType = args?.smartQuotesType
    this.enableSuggestions = args?.enableSuggestions;
    this.maxLines = args?.maxLines;
    this.minLines = args?.minLines;
    this.expands = args?.expands;
    this.maxLength = args?.maxLength;
    this.maxLengthEnforced = args?.maxLengthEnforced;
    // this.onChanged = args?.onChanged
    this.onEditingComplete = args?.onEditingComplete;
    // this.onSubmitted = args?.onSubmitted
    // this.onAppPrivateCommand = args?.onAppPrivateCommand
    this.inputFormatters = args?.inputFormatters;
    this.enabled = args?.enabled;
    this.cursorWidth = args?.cursorWidth;
    this.cursorHeight = args?.cursorHeight;
    this.cursorRadius = args?.cursorRadius;
    this.cursorColor = args?.cursorColor;
    // this.selectionHeightStyle = args?.selectionHeightStyle
    // this.selectionWidthStyle = args?.selectionWidthStyle
    // this.keyboardAppearance = args?.keyboardAppearance
    this.scrollPadding = args?.scrollPadding;
    // this.dragStartBehavior = args?.dragStartBehavior
    this.enableInteractiveSelection = args?.enableInteractiveSelection;
    // this.onTap = args?.onTap
    // this.mouseCursor = args?.mouseCursor
    // this.buildCounter = args?.buildCounter
    // this.scrollController = args?.scrollController
    // this.scrollPhysics = args?.scrollPhysics
    this.autofillHints = args?.autofillHints;
    this.restorationId = args?.restorationId;
  }
}
