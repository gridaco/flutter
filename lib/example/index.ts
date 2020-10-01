import { FontWeight } from "../dart-ui/font-weight";
import { TextStyle } from "../painting/text-style";
// build text

import { Column, Row, Text } from "../widgets";
import { Center } from "../widgets/center";

const textWidget = new Text("hello world", {
    style: new TextStyle({
        fontWeight: FontWeight.w800,
        fontFamily: "Roboto",
        fontSize: 14
    })
})


const column = new Column({
    children: [
        new Center(
            {
                child: textWidget
            }
        ), textWidget
    ]
})

const dart = column.build().finalize()

console.log(dart)
