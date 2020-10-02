import { BuildableTree } from "../builder/buildable-widget";
import { BuildingTree } from "../builder/building-tree";
import { SnippetBuilder } from "../builder/snippet-builder";

export class Widget extends BuildableTree {

    private _defaultSnippet: string
    constructor(args?: {
        _defaultSnippet?: string
    }) {
        super()
        this._defaultSnippet = args?._defaultSnippet
    }

    static fromStatic(code: string): Widget {
        return new Widget({ _defaultSnippet: code });
    }

    build(): BuildingTree {
        // if (this._defaultSnippet) {
        //     return this._defaultSnippet
        // }
        return super.build()
    }
}
