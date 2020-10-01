import { FontWeight } from "../dart-ui/font-weight";
import { TextStyle } from "../painting/text-style";
// build text

import { Text } from "../widgets";

const textWidget = new Text("hello world", {
    style: new TextStyle({
        fontWeight: FontWeight.w800,
        fontFamily: "Roboto",
        fontSize: 14
    })
})

const dart = textWidget.build()

console.log(dart)
