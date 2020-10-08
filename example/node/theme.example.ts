import { Theme } from "@bridged.xyz/flutter-builder/dist/material/theme";

const textStyle = Theme.of().textStyle.button
console.log(textStyle.build().lookup())
