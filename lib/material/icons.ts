import { icons } from "@bridged.xyz/remote-ui-core"
import { SnippetBuilder } from "../builder/snippet-builder"


/**
 * retrives the flutter `Icons.icon_name` code snippet via name of the material icon
 * @param name name of the material icon. i.e. add, person_add
 */

export class Icons extends SnippetBuilder {
    static fromName(name: string): Icons {
        if (icons.material[name] !== undefined) {
            return SnippetBuilder.fromStatic(`Icons.${name}`)
        }
        throw new Error(`the icon with name ${name} does not exists on bridged.xyz/dynamic. if you think this is a bug, please report on https://github.com/bridgedxyz/dynamic`)
    }
}