import { Text, Theme } from "@bridged.xyz/flutter-builder"

const text = new Text("", {
    style: Theme.of().textStyle.headline5
})

console.log(text.build().finalize())