import { composeSimpleApplication, Row } from "@bridged.xyz/flutter-builder"

const component = new Row({
    children: []
})

const app = composeSimpleApplication(component)

console.log(app)