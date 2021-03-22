import { double } from "../dart";
import { defaultParam } from "../decorations/params";
import { ImageProvider } from "./image-provider";

/**
 * https://api.flutter.dev/flutter/painting/NetworkImage-class.html
 */
export class NetworkImage extends ImageProvider {
    @defaultParam()
    url: string

    scale?: double
    headers?: Map<string, string>


    constructor(url: string, args?: {
        scale?: double
        headers?: Map<string, string>
    }) {
        super()
        this.url = url
        this.scale = args?.scale
        this.headers = args?.headers
    }
}