import { Color } from "@bridged.xyz/flutter-builder/dist/dart-ui/color";
import { Border } from "@bridged.xyz/flutter-builder/dist/painting/border";

const border = Border.all({
    color: Color.fromHex("#BBBBBB"),
    width: 12
})

console.log(border.build().finalize())