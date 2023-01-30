import { EnumClass, EnumField } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/gestures/DragStartBehavior-class.html
 */
export class DragStartBehavior extends EnumClass {
  /**
   * Set the initial offset at the position where the first down event was detected.
   */
  static down: DragStartBehavior = EnumField.fromStatic(
    "DragStartBehavior.down"
  );
  /**
   * Set the initial position at the position where this gesture recognizer won the arena.
   */
  static start: DragStartBehavior = EnumField.fromStatic(
    "DragStartBehavior.start"
  );
}
