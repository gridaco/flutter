import { Row, CrossAxisAlignment } from "@bridged.xyz/flutter-builder"

const row = new Row({
    children: [],
    crossAxisAlignment: CrossAxisAlignment.baseline
})

console.log(row.build().lookup())