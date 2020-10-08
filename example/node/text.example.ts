import { Theme } from "@bridged.xyz/flutter-builder/dist/material/theme";
import { Text } from "@bridged.xyz/flutter-builder/dist/widgets";


const text = new Text("", {
    style: Theme.of().textStyle.headline5
})

console.log(text.build().finalize())