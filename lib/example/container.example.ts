import { Double } from "../dart";
import { Color } from "../dart-ui/color";
import { BoxDecoration } from "../painting/box-decoration";
import { Container } from "../widgets";



const container = new Container(
    {
        width: Double.infinity,
        height: null,
        decoration: new BoxDecoration({
            color: Color.fromHex("#FFFFFF")
        })
    }
);


console.log(container.build().finalize());
