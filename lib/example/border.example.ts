import { Color } from "../dart-ui/color";
import { Border } from "../painting/border";

const border = Border.all({
    color: Color.fromHex("#BBBBBB"),
    width: 12
})

console.log(border.build().finalize())