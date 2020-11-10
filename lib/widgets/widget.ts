import { BuildableTree } from "../builder/buildable-tree";
import { BuildingTree } from "../builder/building-tree";
import { removeLastSemicolon } from "../utils";

export class Widget extends BuildableTree {

    constructor() {
        super()
    }

    build(): BuildingTree {
        return super.build()
    }

    static prebuilt(code: string, args?: {
        root: boolean
    }): Widget {
        if (!args?.root) {
            // remove last ';' if exists.
            code = removeLastSemicolon(code)
        }
        return new PrebuiltWidget(code)
    }
}


/**
 * this is used for containing prebuilt code snippet as an widget
 */
export class PrebuiltWidget extends Widget {
    widget: string | Widget

    // accepts both types anonymously.
    constructor(widget: string | Widget) {
        super()
        this.widget = widget;
    }

    build(): BuildingTree {
        if (this.widget instanceof Widget) {
            return this.widget.build();
        } else {
            return new PrebuiltBuildingTree(this.widget);
        }
    }
}

class PrebuiltBuildingTree extends BuildingTree {
    final: string
    constructor(final: string) {
        super()
        this.final = final
    }

    build() {
        return this;
    }

    lookup() {
        return this.final;
    }
}