import { BuildableTree } from "./buildable-tree";
import { BuildingTree } from "./building-tree";

export class Snippet extends BuildableTree {
    _defaultSnippet: string
    constructor(defaultSnippet?: string) {
        super()
        this._defaultSnippet = defaultSnippet;
    }

    static fromStatic(snippet: string): Snippet {
        return new Snippet(snippet);
    }

    build(depth?: number): BuildingTree {
        return new SnippetBuildingTree(this._defaultSnippet)
    }

    lookup(): string {
        return this._defaultSnippet;
    }

    get constructorName(): string {
        return this.constructor.name;
    }
}

class SnippetBuildingTree extends BuildingTree {
    snippet: string
    constructor(snippet: string) {
        super()
        this.snippet = snippet;
    }

    build() {
        return this;
    }

    lookup() {
        return this.snippet;
    }
}



export class SnippetBuildableTree extends BuildableTree implements Snippet {

    lookup() {
        return this._defaultSnippet;
    }
    _defaultSnippet: string;
    get constructorName(): string {
        return this.constructor.name;
    }
}