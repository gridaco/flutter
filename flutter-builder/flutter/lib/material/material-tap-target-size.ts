import { Snippet } from "../builder/buildable-tree";

/**
 * https://api.flutter.dev/flutter/material/MaterialTapTargetSize.html
 */
export class MaterialTapTargetSize {
  /**
   * Expands the minimum tap target size to 48px by 48px.
   */
  static padded = Snippet.fromStatic(
    "MaterialTapTargetSize.padded"
  ) as MaterialTapTargetSize;

  /**
   * Shrinks the tap target size to the minimum provided by the Material specification.
   */
  static shrinkWrap = Snippet.fromStatic(
    "MaterialTapTargetSize.shrinkWrap"
  ) as MaterialTapTargetSize;
}
