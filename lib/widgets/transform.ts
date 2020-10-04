import { Widget } from ".";
import { double } from "../dart";

/**
 * https://api.flutter.dev/flutter/widgets/Transform-class.html
 */
// TODO - not implemented
export class Transform extends Widget {
    constructor() {
        super()
        throw `Transform not implemented yet.`
    }

    static rotate(args: {
        angle: double
        child?: Widget
    }): Transform {
        return new Transform().extendWithFactoryName("rotate")
    }
}