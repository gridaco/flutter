import { TextStyle } from "@bridged.xyz/remote-ui-core/dist/lib/widgets/text";
import { Widget } from "../widgets";
import { Buildable } from "./buildable";
import 'reflect-metadata';
import { paramMetadataKey } from "../decorations/params";

export class BuildableWidget implements Buildable {
    build(): string {

        let final = ""

        const result = new Map<any, PropertyDescriptor>();
        for (let key of Reflect.ownKeys(this)) {
            result.set(key, Object.getOwnPropertyDescriptor(this, key))
        }

        const defaultArguments: Array<string> = Array<string>()

        let keys = Array.from(result.keys());
        for (const key of keys) {
            const fieldM = result.get(key)
            const field = fieldM.value

            // TODO add checker logic if default field or not

            if (key instanceof Widget) {
                final += (field as Widget).build()
            }

            if (key instanceof TextStyle) {
                final += JSON.stringify(field, null, 2)
            }

            switch (typeof (field)) {
                case "string":
                    final += `"${field}"`
            }
        }

        // return 
        return `${this.widgetClassName}(
    ${final}
)
`
    }

    get widgetClassName(): string {
        return this.constructor.name;
    }
}


function getDecorators(target: any, propertyName: string | symbol): string[] {
    // get info about keys that used in current property
    const keys: any[] = Reflect.getMetadataKeys(target, propertyName);
    console.log(keys)
    const decorators = keys
        // filter your custom decorators
        .filter(key => key.toString().startsWith("custom:anotations"))
        .reduce((values, key) => {
            // get metadata value.
            const currValues = Reflect.getMetadata(key, target, propertyName);
            return values.concat(currValues);
        }, []);

    return decorators;
}


function getFilteredProperties(origin: object): object {
    const properties: string[] = Reflect.getMetadata(paramMetadataKey, origin);
    const result = {};
    properties.forEach(key => result[key] = origin[key]);
    return result;
}