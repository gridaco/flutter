import { Theme } from "../material/theme";
import { Text } from "../widgets";


const text = new Text("", {
    style: Theme.of().textStyle.headline5
})

console.log(text.build().finalize())