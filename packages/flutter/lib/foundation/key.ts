import { BuildableTree } from "../builder";
import { identifier } from "../decorations";
import { defaultParam } from "../decorations/params";

/**
 * https://api.flutter.dev/flutter/foundation/Key-class.html
 */
@identifier("Key")
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
