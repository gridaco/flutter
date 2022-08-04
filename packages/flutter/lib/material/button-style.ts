import { BuildableTree } from "../builder";
import { identifier } from "../decorations";
import { AlignmentGeometry } from "../painting";
import { MaterialTapTargetSize } from "./material-tap-target-size";

interface IButtonStyle {
  alignment: AlignmentGeometry | null;
  animationDuration;
  backgroundColor;
  elevation;
  enableFeedback;
  fixedSize;
  foregroundColor;
  maximumSize;
  minimumSize;
  mouseCursor;
  overlayColor;
  padding;
  shadowColor;
  shape;
  side;
  splashFactory;
  surfaceTintColor;
  tapTargetSize: MaterialTapTargetSize;
  textStyle;
  visualDensity;
}

/**
 * https://api.flutter.dev/flutter/material/ButtonStyle-class.html
 * 
 * 
| Type         | Flutter implementation  |
| ------------ | ----------------------- |
| Elevated     | `ElevatedButton`        |
| Filled       | Styled `ElevatedButton` |
| Filled Tonal | Styled `ElevatedButton` |
| Outlined     | `OutlinedButton`        |
| Text         | `TextButton`            |
 */
@identifier("ButtonStyle")
export class ButtonStyle extends BuildableTree {
  // TODO: implement

  /**
   * https://api.flutter.dev/flutter/material/ButtonStyle/ButtonStyle.html
   */
  constructor() {
    super();
  }

  static copyWith(style: IButtonStyle) {
    throw "ButtonStyle#copyWith not implemented";
  }
}
