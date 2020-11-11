// import { TextStyle } from "@bridged.xyz/flutter-builder"
import { Color, TextStyle } from "../../lib"
const textStyle = new TextStyle().copyWith({
    color: Color.fromHex('#FFFFFF')
})


console.log(textStyle.build().finalize())