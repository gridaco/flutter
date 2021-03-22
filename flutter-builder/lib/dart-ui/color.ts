import { BuildableTree, Snippet } from "../builder/buildable-tree";
import { defaultParam } from "coli/lib/utils/decorations/params";

/**
 * https://api.flutter.dev/flutter/dart-ui/Color-class.html
 */
export class Color extends BuildableTree {
  @defaultParam()
  value: Snippet | number;
  constructor(value?: number) {
    super();
    if (value) {
      this.value = Snippet.fromStatic<Snippet>("0x" + value?.toString(16));
    } else {
      throw "the value:number provided must be a valid color value";
    }
  }

  static fromHex(hex: string): Color {
    try {
      hex = hex.replace("#", "");
      return new Color(parseInt(hex, 16));
    } catch (e) {
      return undefined;
    }
  }

  static fromRGBO(r: number, g: number, b: number, o: number): Color {
    throw "not implemented";
  }
}
