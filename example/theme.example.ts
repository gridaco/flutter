import { Color, Theme } from "../../lib";

const textStyle = Theme.of().textTheme.headline1


textStyle.copyWith(
    {
        color: Color.fromHex('#ffffff')
    }
)
console.log(textStyle.build().lookup())
