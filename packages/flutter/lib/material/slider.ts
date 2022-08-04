import { identifier } from "../decorations";
import { Widget } from "../widgets";
import { Key } from "../foundation";
import type { double, int } from "../dart";
import { Color } from "../dart-ui";

interface ISliderProperties {
  value: double;
  onChanged?;
  onChangeStart?;
  onChangeEnd?;
  /**
   * @default 0.0
   */
  min: double;
  /**
   * @default 1.0
   */
  max: double;
  divisions?: int;
  label?: string;
  activeColor?: Color;
  inactiveColor?: Color;
  thumbColor?: Color;
  mouseCursor?; // MouseCursor
  semanticFormatterCallback?; //SemanticFormatterCallback? ,
  focusNode?; // FocusNode? ,
  /**
   * @default false
   */
  autofocus: boolean;
}

/**
 * https://api.flutter.dev/flutter/material/Slider-class.html
 */
@identifier("Slider")
export class Slider extends Widget implements ISliderProperties {
  value: double;
  onChanged?;
  onChangeStart?;
  onChangeEnd?;
  /**
   * @default 0.0
   */
  min: double;
  /**
   * @default 1.0
   */
  max: double;
  divisions?: int;
  label?: string;
  activeColor?: Color;
  inactiveColor?: Color;
  thumbColor?: Color;
  mouseCursor?; // MouseCursor
  semanticFormatterCallback?; //SemanticFormatterCallback? ,
  focusNode?; // FocusNode? ,
  /**
   * @default false
   */
  autofocus: boolean;

  constructor({
    key,
    value,
    onChanged,
    onChangeStart,
    onChangeEnd,
    min,
    max,
    divisions,
    label,
    activeColor,
    inactiveColor,
    thumbColor,
    mouseCursor,
    semanticFormatterCallback,
    focusNode,
    autofocus,
  }: {
    key?: Key;
  } & Partial<ISliderProperties>) {
    super({ key });

    this.value = value;
    this.onChanged = onChanged;
    this.onChangeStart = onChangeStart;
    this.onChangeEnd = onChangeEnd;
    this.min = min;
    this.max = max;
    this.divisions = divisions;
    this.label = label;
    this.activeColor = activeColor;
    this.inactiveColor = inactiveColor;
    this.thumbColor = thumbColor;
    this.mouseCursor = mouseCursor;
    this.semanticFormatterCallback = semanticFormatterCallback;
    this.focusNode = focusNode;
    this.autofocus = autofocus;
  }
}
