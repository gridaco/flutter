import { Buildable } from "./buildable";
import { getDefaultParamProperties, ignore, paramMetadataKey, ignoreMetadataKey } from "../decorations/params";
import { SnippetBuilder } from "./snippet-builder";
import { TextStyle } from "../painting/text-style";
import { Double } from "../dart";
import { BuildingTree } from "./building-tree";
import { Reflection as Reflect } from '@abraham/reflection';

export class BuildableTree implements Buildable {
    build(depth?: number): BuildingTree {

        // if no depth is provided, make it as 0, which is root treee
        depth = depth ?? 0;

        const defaultParamKeys: ReadonlyArray<string> = Reflect.getMetadata(paramMetadataKey, this) ?? [];
        const ignoreFeildKeys: ReadonlyArray<string> = Reflect.getMetadata(ignoreMetadataKey, this) ?? [];

        const result = new Map<any, PropertyDescriptor>();
        for (let key of Object.keys(this)) {
            result.set(key, Object.getOwnPropertyDescriptor(this, key))
        }

        const tree = new BuildingTree(this.constructorName, depth)
        function registerOnParam(name: string, value: string) {
            // if key is from native node's field, ignore it.
            if (ignoreFeildKeys.includes(name)) {
                return;
            }

            // checker logic if default field or not
            const named: boolean = !defaultParamKeys.includes(name);
            if (named) {
                tree.pushNamedArgument(name, value)
            } else {
                tree.pushDefaultArgument(value)
            }
        }


        let keys = Array.from(result.keys());
        for (const key of keys) {
            const fieldM = result.get(key)
            const field = fieldM.value
            console.log(key, typeof field, field)

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
                console.log(key, "of type", typeof field, "does not support build()")
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
        this.factoryName = this.factoryName
        return this;
    }

    get constructorName(): string {
        if (this.factoryName) {
            return `${this.constructor.name}.${this.factoryName}`;
        }
        return this.constructor.name;
    }
}


export class SnippetBuildableTree extends BuildableTree implements SnippetBuilder {

    lookup() {
        return this._defaultSnippet;
    }
    _defaultSnippet: string;
    get constructorName(): string {
        return this.constructor.name;
    }
}