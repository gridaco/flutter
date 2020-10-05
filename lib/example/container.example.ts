import { Double } from "../dart";
import { Color } from "../dart-ui/color";
import { Border } from "../painting/border";
import { BoxDecoration } from "../painting/box-decoration";
import { BoxShape } from "../painting/box-shape";
import { Container } from "../widgets";



const container = new Container(
    {
        width: Double.infinity,
        height: null,
        decoration: new BoxDecoration({
            color: Color.fromHex("#AAAAAA"),
            border: Border.all({
                color: Color.fromHex("#BBBBBB"),
                width: 12
            }),
            shape: BoxShape.circle
        })
    }
);

const built = container.build()
// console.log(container)
console.log(built.finalize());
