import { TextStyle } from "@bridged.xyz/remote-ui-core/dist/lib/widgets/text";
import { Buildable } from "./buildable";

export class BuildableWidget implements Buildable {
    build(): string {

        let final = ""

        const result = new Map<any, PropertyDescriptor>();
        for (let key of Reflect.ownKeys(this)) {
            result.set(key, Object.getOwnPropertyDescriptor(this, key))
        }

        let keys = Array.from(result.keys());
        for (const key of keys) {
            const fieldM = result.get(key)
            const field = fieldM.value
            if (key instanceof TextStyle) {
                final += JSON.stringify(field, null, 2)
            }

            switch (typeof (field)) {
                case "string":
                    final += `"${field}"`
            }
        }

        return final
    }
}