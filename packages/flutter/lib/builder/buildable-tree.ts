import { Buildable } from "./buildable";
import {
  ignore,
  paramMetadataKey,
  ignoreMetadataKey,
} from "../decorations/params";
import { BuildingTree } from "./building-tree";
import { Reflection as Reflect } from "@abraham/reflection";
import type { IIdentifier } from "../_utils/identifier";

export class BuildableTree implements Buildable, IIdentifier {
  /**
   * you can set this with `@identifier` decorator
   */
  @ignore()
  readonly __identifier: string;

  constructor(identifier?: string) {
    if (identifier) {
      this.__identifier = identifier;
    }
  }

  build(depth?: number): BuildingTree {
    // if no depth is provided, make it as 0, which is root treee
    depth = depth ?? 0;
    const target = this.targetObject ?? this;
    // console.log("target", target)

    const defaultParamKeys: ReadonlyArray<string> =
      Reflect.getMetadata(paramMetadataKey, target) ?? [];
    const ignoreFeildKeys: ReadonlyArray<string> =
      Reflect.getMetadata(ignoreMetadataKey, target) ?? [];

    const result = new Map<any, PropertyDescriptor>();
    for (let key of Object.keys(target)) {
      // if key is from native node's field, ignore it.
      if (ignoreFeildKeys.includes(key)) {
      } else {
        result.set(key, Object.getOwnPropertyDescriptor(target, key));
      }
    }

    // =========================
    // create a building tree
    const tree = new BuildingTree({
      name: this.name,
      depth: depth,
      extensions: this.extensions,
      overrideSnippet: this.overridenSnippet,
      comments: this.comments,
    });
    // =========================

    function registerOnParam(key: string, value: string) {
      // checker logic if default field or not
      const isDefault: boolean = checkIfDefault(key);
      // const isNamed: boolean = !defaultParamKeys.includes(key);
      if (isDefault) {
        tree.pushDefaultArgument(value);
      } else {
        tree.pushNamedArgument(key, value);
      }
    }

    /**
     * returns false if named
     * returns true if default argument
     */
    function checkIfDefault(key: string): boolean {
      // the field name contains __default__ is special character, recognized as default param by default
      if (key.includes("__default__")) {
        return true;
      }
      if (defaultParamKeys.includes(key)) {
        return true;
      }
      return false;
    }

    let keys = Array.from(result.keys());
    for (const key of keys) {
      const fieldM = result.get(key);
      const field = fieldM.value;
      // console.log(key, typeof field, field)
      if (field === undefined) {
        // ignore
      } else {
        switch (typeof field) {
          case "string":
            registerOnParam(key, `"${field}"`);
            break;
          case "boolean":
            registerOnParam(key, `${field}`);
          case "number":
            registerOnParam(key, `${field}`);
            break;
          case "object":
            // handle null value
            if (field == null) {
              registerOnParam(key, `null`);
            }
            // handle undefined -> ignore field
            else if (field == undefined) {
              // ignore
            }
            // handle array
            else if (Array.isArray(field)) {
              const builds = [];
              field.forEach((f) => {
                switch (typeof f) {
                  case "string":
                    builds.push(`"${f}"`);
                    break;
                  case "number":
                    builds.push(`${f}`);
                    break;
                }
                try {
                  builds.push((f as any).build(depth + 1).lookup());
                } catch (e) {}
              });
              tree.pushNamedArray(key, builds);
            } else {
              trySingleFieldBuild(key, field);
            }
            break;
        }
      }
    }

    /**
     * try building the givven field, if failed, ignore.
     * @param key
     * @param field
     */
    function trySingleFieldBuild(key: string, field: BuildableTree) {
      try {
        registerOnParam(key, field.build(depth + 1).lookup());
      } catch (e) {
        console.error(key, "of type", typeof field, "does not support build()");
        console.error("failed object is ", field);
        console.error(e);
      }
    }
    // region build params

    // endregion

    // return
    return tree.build();
  }

  /**
   * I.E "Transform" is default class name, when you want to make "Transform.rotate()", override with this.
   * @param name new name for the class invocation
   */
  @ignore()
  private _factoryName: string = null;

  @ignore()
  private get _factoryExtended(): boolean {
    return this._factoryName !== null;
  }
  extendWithFactory(name: string): this {
    this._factoryName = name;
    return this;
  }

  // region extensions
  @ignore()
  private extensions: Array<BuildableTree> = [];
  extendWithExtensionFunction<T>(name: string, args: {}): this | T {
    const extension = new BuildableTree(name).overrideArguments<this>(args);
    this.extensions.push(extension);
    return this;
  }

  extendWithAccessor<T extends BuildableTree>(accessor: string): T {
    const extension = Snippet.fromStatic<T>(accessor);
    this.extensions.push(extension);
    return extension as T;
  }

  // endregion extensions

  @ignore()
  private targetObject: BuildableTree;
  overrideTarget(target: BuildableTree): this {
    this.targetObject = target;
    return this;
  }

  // overrides full snippet, returns static string data on build()
  @ignore()
  private overridenSnippet: Snippet;
  overrideSnippet(snippet: string): this {
    this.overridenSnippet = Snippet.fromStatic(snippet) as any;
    return this;
  }

  overrideArguments<T>(args: {}): this | T {
    const target = <BuildableTree>{
      ...args,
    };
    return this.overrideTarget(target);
  }

  @ignore()
  comments = Array<string>();
  addComment(comment: string): this {
    this.comments.push(comment);
    return this;
  }

  get name(): string {
    if (this._factoryExtended) {
      return `${this.__identifier}.${this._factoryName}`;
    }
    return this.__identifier;
  }
}

export class Snippet extends BuildableTree {
  _defaultSnippet: string;
  constructor(defaultSnippet?: string) {
    super();
    this._defaultSnippet = defaultSnippet;
  }

  static fromStatic<T extends BuildableTree>(snippet: string): Snippet | T {
    // dangerously cast type
    return new Snippet(snippet) as any as T;
  }

  build(depth?: number): BuildingTree {
    return new SnippetBuildingTree(this._defaultSnippet);
  }

  lookup(): string {
    return this._defaultSnippet;
  }
}

export class EnumClass extends Snippet {}

export class EnumField extends Snippet {}

export class SnippetBuildingTree extends BuildingTree {
  snippet: string;
  constructor(snippet: string) {
    super();
    this.snippet = snippet;
  }

  build() {
    return this;
  }

  lookup() {
    return this.snippet;
  }
}
