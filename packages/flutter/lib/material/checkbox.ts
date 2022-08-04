import { double } from "../dart";
import { Color } from "../dart-ui";
import { identifier } from "../decorations";
import { BorderSide, OutlinedBorder } from "../painting";
import { Key, Widget } from "../widgets";
import { MaterialTapTargetSize } from "./material-tap-target-size";

interface ICheckbox {
  value: boolean | undefined;
  tristate: boolean;
  onChanged?;
  mouseCursor?;
  activeColor?: Color;
  fillColor?; // MaterialStateProperty<Color?>?
  checkColor?: Color;
  focusColor?: Color;
  hoverColor?: Color;
  overlayColor?; // MaterialStateProperty<Color?>?
  splashRadius?: double;
  materialTapTargetSize?: MaterialTapTargetSize;
  visualDensity?;
  focusNode?;
  autofocus?: boolean;
  shape?: OutlinedBorder;
  side?: BorderSide;
}

/**
 *
 * https://api.flutter.dev/flutter/material/Checkbox-class.html
 *
 *
 * @example
 * ```dart
 * Checkbox(
 *  checkColor: Colors.white,
 *  value: isChecked,
 *  onChanged: (bool? value) {
 *    setState(() {
 *      isChecked = value!;
 *    });
 *  },
 * ),
 * ```
 */
@identifier("Checkbox")
export class Checkbox extends Widget implements ICheckbox {
  value: boolean | undefined;
  tristate: boolean;
  onChanged?;
  mouseCursor?;
  activeColor?: Color;
  fillColor?; // MaterialStateProperty<Color?>?
  checkColor?: Color;
  focusColor?: Color;
  hoverColor?: Color;
  overlayColor?; // MaterialStateProperty<Color?>?
  splashRadius?: double;
  materialTapTargetSize?: MaterialTapTargetSize;
  visualDensity?;
  focusNode?;
  autofocus?: boolean;
  shape?: OutlinedBorder;
  side?: BorderSide;

  constructor({
    key,
    value,
    tristate,
    onChanged,
    mouseCursor,
    activeColor,
    fillColor,
    checkColor,
    focusColor,
    hoverColor,
    overlayColor,
    splashRadius,
    materialTapTargetSize,
    visualDensity,
    focusNode,
    autofocus,
    shape,
    side,
  }: { key?: Key } & Partial<ICheckbox>) {
    super({ key });

    this.value = value;
    this.tristate = tristate;
    this.onChanged = onChanged;
    this.mouseCursor = mouseCursor;
    this.activeColor = activeColor;
    this.fillColor = fillColor;
    this.checkColor = checkColor;
    this.focusColor = focusColor;
    this.hoverColor = hoverColor;
    this.overlayColor = overlayColor;
    this.splashRadius = splashRadius;
    this.materialTapTargetSize = materialTapTargetSize;
    this.visualDensity = visualDensity;
    this.focusNode = focusNode;
    this.autofocus = autofocus;
    this.shape = shape;
    this.side = side;
  }
}
