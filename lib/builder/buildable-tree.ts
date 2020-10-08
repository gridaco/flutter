import { Buildable } from "./buildable";
import { ignore, paramMetadataKey, ignoreMetadataKey } from "../decorations/params";
import { BuildingTree } from "./building-tree";
import { Reflection as Reflect } from '@abraham/reflection';

export class BuildableTree implements Buildable {
    build(depth?: number): BuildingTree {

        // if no depth is provided, make it as 0, which is root treee
        depth = depth ?? 0;
        const target = this.targetObject ?? this
        // console.log("target", target)

        const defaultParamKeys: ReadonlyArray<string> = Reflect.getMetadata(paramMetadataKey, target) ?? [];
        const ignoreFeildKeys: ReadonlyArray<string> = Reflect.getMetadata(ignoreMetadataKey, target) ?? [];

        const result = new Map<any, PropertyDescriptor>();
        for (let key of Object.keys(target)) {
            // if key is from native node's field, ignore it.
            if (ignoreFeildKeys.includes(key)) {
            } else {
                result.set(key, Object.getOwnPropertyDescriptor(target, key))
            }
        }

        const tree = new BuildingTree(this.constructorName, depth)
        function registerOnParam(key: string, value: string) {
            // checker logic if default field or not
            const isDefault: boolean = checkIfDefault(key)
            // const isNamed: boolean = !defaultParamKeys.includes(key);
            if (isDefault) {
                tree.pushDefaultArgument(value)
            } else {
                tree.pushNamedArgument(key, value)
            }
        }


        /**
         * returns false if named
         * returns true if default argument
         */
        function checkIfDefault(key: string): boolean {
            // the field name contains __default__ is special character, recognized as default param by default
            if (key.includes("__default__")) {
                return true
            }
            if (defaultParamKeys.includes(key)) {
                return true
            }
            return false
        }


        let keys = Array.from(result.keys());
        for (const key of keys) {
            const fieldM = result.get(key)
            const field = fieldM.value
            // console.log(key, typeof field, field)
            if (field === undefined) {
                // ignore
            }
            else {
                switch (typeof (field)) {
                    case "string":
                        registerOnParam(key, `"${field}"`)
                        break;
                    case "number":
                        registerOnParam(key, `${field}`)
                        break;
                    case "object":
                        // handle null value
                        if (field == null) {
                            registerOnParam(key, `null`)
                        }
                        // handle undefined -> ignore field
                        else if (field == undefined) {
                            // ignore
                        }
                        // handle array
                        else if (Array.isArray(field)) {
                            const builds = []
                            field.forEach((f) => {
                                switch (typeof (f)) {
                                    case "string":
                                        builds.push(`"${f}"`)
                                        break;
                                    case "number":
                                        builds.push(`${f}`)
                                        break;
                                }
                                try {
                                    builds.push((f as any).build(depth + 1).lookup())
                                } catch (e) { }
                            })
                            tree.pushNamedArray(key, builds)
                        } else {
                            tryBuild(key, field)
                        }
                        break;
                }
            }
        }

        function tryBuild(key: string, field: BuildableTree) {
            try {
                registerOnParam(key, field.build(depth + 1).lookup())
            } catch (e) {
                console.error(key, "of type", typeof field, "does not support build()")
                console.error("failed object is ", field)
                console.error(e)
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
    private factoryName: string = null;
    extendWithFactoryName(name: string) {
        this.factoryName = name
        return this;
    }

    @ignore()
    private targetObject: BuildableTree
    overrideTarget(target: BuildableTree): BuildableTree {
        this.targetObject = target;
        return this;
    }

    // overrides full snippet, returns static string data on build()
    overrideSnippet(snippet: string): BuildableTree {
        return Snippet.fromStatic(snippet)
    }

    overrideArguments<T>(args: {}): BuildableTree | T {
        const target = <BuildableTree>{
            ...args
        }
        return this.overrideTarget(target)
    }

    get constructorName(): string {
        if (this.factoryName) {
            return `${this.constructor.name}.${this.factoryName}`;
        }
        return this.constructor.name;
    }
}




export class Snippet extends BuildableTree {
    _defaultSnippet: string;
    constructor(defaultSnippet?: string) {
        super();
        this._defaultSnippet = defaultSnippet;
    }

    static fromStatic(snippet: string): Snippet {
        return new Snippet(snippet);
    }

    build(depth?: number): BuildingTree {
        return new SnippetBuildingTree(this._defaultSnippet);
    }

    lookup(): string {
        return this._defaultSnippet;
    }

    get constructorName(): string {
        return this.constructor.name;
    }
}


export class SnippetBuildingTree extends BuildingTree {
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


