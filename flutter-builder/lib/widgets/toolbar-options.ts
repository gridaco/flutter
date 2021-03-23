import { BuildableTree } from "../builder";

/**
 * https://api.flutter.dev/flutter/widgets/ToolbarOptions-class.html
 */
export class ToolbarOptions extends BuildableTree {
    copy?: boolean
    cut?: boolean
    paste?: boolean
    selectAll?: boolean
    /**
     * https://api.flutter.dev/flutter/widgets/ToolbarOptions/ToolbarOptions.html
     */
    constructor(args?: {
        copy?: boolean
        cut?: boolean
        paste?: boolean
        selectAll?: boolean
    }) {
        super()

        this.copy = args?.copy
        this.cut = args?.cut
        this.paste = args?.paste
        this.selectAll = args?.selectAll
    }
}