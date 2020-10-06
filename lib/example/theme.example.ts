import { Theme } from "../material/theme";

const textStyle = Theme.of().textStyle.button
console.log(textStyle.build().lookup())
