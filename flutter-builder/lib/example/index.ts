import { Color } from "../dart-ui";
import { Theme } from "../material/theme";
import { Column, Row, Text } from "../widgets";
import { Center } from "../widgets/center";

const textWidget = new Text("hello world", {
    style: Theme.of().textTheme.headline1.copyWith({
        color: Color.fromHex('#FFFFFF')
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
