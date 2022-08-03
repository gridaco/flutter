import { BuildableTree } from "../builder";
import { defaultParam } from "../decorations/params";

/**
 * https://api.flutter.dev/flutter/foundation/Key-class.html
 */
export class Key extends BuildableTree {
  @defaultParam()
  readonly value: string;

  /**
   * https://api.flutter.dev/flutter/foundation/Key/Key.html
   */
  constructor(value: string) {
    super();
    this.value = value;
  }

  /**
   * https://api.flutter.dev/flutter/foundation/Key/Key.empty.html
   */
  protected static empty() {}
}
