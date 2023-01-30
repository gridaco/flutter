import { BuildableTree } from "../builder/buildable-tree";
import { BuildingTree } from "../builder/building-tree";
import { ignore } from "../decorations/params";
import { Key } from "../foundation/key";
import { removeLastSemicolon } from "../_utils";

export class Widget<__Meta extends object = {}> extends BuildableTree {
  readonly key?: Key | undefined;

  /**
   * meta for internal api use.
   * put any meta data you want to utilize here.
   */
  @ignore()
  private __meta?: __Meta | undefined = undefined;

  /**
   * meta for internal api use.
   * put any meta data you want to utilize here.
   */
  @ignore()
  get meta(): __Meta | undefined {
    return this.__meta;
  }

  /**
   * meta for internal api use.
   * put any meta data you want to utilize here.
   */
  // @ignore() - no need.
  set meta(value: __Meta) {
    this.__meta = value;
  }

  constructor({ key }: { key: Key | undefined }) {
    super();
    this.key = key;
  }

  build(): BuildingTree {
    return super.build();
  }

  static prebuilt(
    code: string,
    args?: {
      root: boolean;
    }
  ): Widget {
    if (!args?.root) {
      // remove last ';' if exists.
      code = removeLastSemicolon(code);
    }
    return new PrebuiltWidget(code);
  }
}

/**
 * this is used for containing prebuilt code snippet as an widget
 */
export class PrebuiltWidget extends Widget {
  widget: string | Widget;

  // accepts both types anonymously.
  constructor(widget: string | Widget) {
    super({ key: undefined });
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
  final: string;
  constructor(final: string) {
    super();
    this.final = final;
  }

  build() {
    return this;
  }

  lookup() {
    return this.final;
  }
}
