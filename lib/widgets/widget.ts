import { BuildableTree } from "../builder/buildable-tree";
import { BuildingTree } from "../builder/building-tree";
import { SnippetBuilder } from "../builder/snippet-builder";

export class Widget extends BuildableTree {

    constructor() {
        super()
    }

    build(): BuildingTree {
        return super.build()
    }
}
