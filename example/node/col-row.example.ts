import { CrossAxisAlignment } from "@bridged.xyz/flutter-builder/dist/rendering/cross-axis-alignment";
import { Row } from "@bridged.xyz/flutter-builder/dist/widgets";

const row = new Row({
    children: [],
    crossAxisAlignment: CrossAxisAlignment.baseline
})

console.log(row.build().lookup())