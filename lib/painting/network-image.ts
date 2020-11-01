import { double } from "../dart";
import { ImageProvider } from "./image-provider";

/**
 * https://api.flutter.dev/flutter/painting/NetworkImage-class.html
 */
export class NetworkImage extends ImageProvider {
    scale?: double
    headers?: Map<string, string>


    constructor(readonly url, args?: {
        scale?: double
        headers?: Map<string, string>
    }) {
        super()

        this.scale = args?.scale
        this.headers = args?.headers
    }
}