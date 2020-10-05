import { Double } from "../dart";
import { Color } from "../dart-ui/color";
import { Radius } from "../dart-ui/radius";
import { Border } from "../painting/border";
import { BorderRadius } from "../painting/border-radius";
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
            shape: BoxShape.circle,
            borderRadius: BorderRadius.only({ topLeft: Radius.circular(12) })
        })
    }
);

const built = container.build()
// console.log(container)
console.log(built.finalize());
