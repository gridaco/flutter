import { BuildableTree, Snippet } from "../builder/buildable-tree";
import { defaultParam } from "../decorations/params";

/**
 * https://api.flutter.dev/flutter/dart-ui/Color-class.html
 */
export class Color extends BuildableTree {
    @defaultParam()
    value: Snippet | number
    constructor(value: number) {
        super()
        this.value = Snippet.fromStatic("0x" + value.toString(16))
    }

    static fromHex(hex: string): Color {
        hex = hex.replace('#', '')
        return new Color(parseInt(hex, 16));
    }
}