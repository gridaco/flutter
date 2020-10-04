import { BuildableTree } from "../builder/buildable-widget";
import { BuildingTree } from "../builder/building-tree";
import { SnippetBuilder } from "../builder/snippet-builder";

export class Widget extends BuildableTree {

    constructor() {
        super()
    }

    build(): BuildingTree {
        // if (this._defaultSnippet) {
        //     return this._defaultSnippet
        // }
        return super.build()
    }
}
