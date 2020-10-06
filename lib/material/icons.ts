import { icons } from "@bridged.xyz/remote-ui-core"
import { Snippet } from "../builder/buildable-tree"


/**
 * retrives the flutter `Icons.icon_name` code snippet via name of the material icon
 * @param name name of the material icon. i.e. add, person_add
 */

export class Icons extends Snippet {
    static fromName(name: string): Icons {
        if (icons.material[name] !== undefined) {
            return Snippet.fromStatic(`Icons.${name}`)
        }
        throw new Error(`the icon with name ${name} does not exists on bridged.xyz/dynamic. if you think this is a bug, please report on https://github.com/bridgedxyz/dynamic`)
    }
}