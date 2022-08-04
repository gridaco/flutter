import { RenderObjectWidget } from "./render-object-widget";
import assert from "assert";
import type { Widget } from "./widget";
import { Key } from "../foundation";
import { identifier } from "../decorations";

/**
 * https://api.flutter.dev/flutter/widgets/MultiChildRenderObjectWidget-class.html
 */
@identifier("MultiChildRenderObjectWidget")
export class MultiChildRenderObjectWidget extends RenderObjectWidget {
  children: Array<Widget>;

  constructor({ key, children = [] }: { key?: Key; children: Array<Widget> }) {
    super({ key });
    assert(children);
    assert(
      (() => {
        for (let index = 0; index < children.length; index++) {
          if (children[index] == null) {
            throw new FlutterError(
              [
                `children must not contain any null values, `,
                `but a null value was found at index ${index}`,
              ].join("\n")
            );
          }
        }
        return true;
      })()
    );
    this.children = children;
  }
}

class FlutterError extends Error {}
