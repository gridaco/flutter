import { Buildable } from "./buildable";
import 'reflect-metadata';
import { getDefaultParamProperties, paramMetadataKey } from "../decorations/params";
import { SnippetBuilder } from "./snippet-builder";
import { TextStyle } from "../painting/text-style";
import { Double } from "../dart";
import { BuildingTree } from "./building-tree";

export class BuildableTree implements Buildable {
    build(depth?: number): string {

        // if no depth is provided, make it as 0, which is root treee
        depth = depth ?? 0;

        const defaultParamKeys: ReadonlyArray<string> = Reflect.getMetadata(paramMetadataKey, this) ?? [];

        const result = new Map<any, PropertyDescriptor>();
        for (let key of Reflect.ownKeys(this)) {
            result.set(key, Object.getOwnPropertyDescriptor(this, key))
        }

        const tree = new BuildingTree(this.widgetClassName, depth)
        function registerOnParam(name: string, value: string) {
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
                        try {
                            registerOnParam(key, field.build(depth + 1))
                        } catch (e) {
                            console.log(key, "of type", typeof field, "does not support build()")
                        }
                        break;
                }
            }
        }
        // region build params

        // endregion

        // return 
        return tree.build().finalize();
    }

    get widgetClassName(): string {
        return this.constructor.name;
    }
}


export class SnippetBuildableTree extends BuildableTree implements SnippetBuilder {
    _defaultSnippet: string;
    get widgetClassName(): string {
        return this.constructor.name;
    }
}