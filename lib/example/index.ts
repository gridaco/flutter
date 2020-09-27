


import { TextStyle } from "../painting/text-style";
// build text

import { Text } from "../widgets";

const textWidget = new Text("hello world", {
    style: new TextStyle()
})

const dart = textWidget.build()

console.log(dart)
