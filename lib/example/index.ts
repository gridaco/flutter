import { FontWeight } from "../dart-ui/font-weight";
import { Theme } from "../material/theme";
import { TextStyle } from "../painting/text-style";
// build text

import { Column, Row, Text } from "../widgets";
import { Center } from "../widgets/center";

const textWidget = new Text("hello world", {
    style: Theme.of().textStyle.headline1
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
