import { BuildableTree } from "../builder/buildable-tree";
import { SnippetBuilder } from "../builder/snippet-builder";
import { defaultParam } from "../decorations/params";

/**
 * https://api.flutter.dev/flutter/dart-ui/Color-class.html
 */
export class Color extends BuildableTree {
    @defaultParam()
    value: SnippetBuilder | number
    constructor(value: number) {
        super()
        this.value = SnippetBuilder.fromStatic("0x" + value.toString(16))
    }

    static fromHex(hex: string): Color {
        hex = hex.replace('#', '')
        return new Color(parseInt(hex, 16));
    }
}