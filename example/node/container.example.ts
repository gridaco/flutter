import { Double } from "flutter-builder/dist/dart";
import { Color } from "flutter-builder/dist/dart-ui/color";
import { Radius } from "flutter-builder/dist/dart-ui/radius";
import { Border } from "flutter-builder/dist/painting/border";
import { BorderRadius } from "flutter-builder/dist/painting/border-radius";
import { BoxDecoration } from "flutter-builder/dist/painting/box-decoration";
import { BoxShape } from "flutter-builder/dist/painting/box-shape";
import { LinearGradients } from "flutter-builder/dist/painting/linear-gradient";
import { Container } from "flutter-builder/dist/widgets";



const container = new Container(
  {
    width: Double.infinity,
    height: null,
    decoration: new BoxDecoration({
      border: Border.all({
        color: Color.fromHex("#BBBBBB"),
        width: 12
      }),
      shape: BoxShape.circle,
      borderRadius: BorderRadius.only({ topLeft: Radius.circular(12) }),
      gradient: new LinearGradients({
        colors: [
          Color.fromHex("#AAAAAA"),
        ]
      })
    }),
  }
);

const built = container.build()
// console.log(container)
console.log(built.finalize());



/**
 Container(
  width: double.infinity,
  height: null,
  decoration: BoxDecoration(
    border: Border.all(
      color: Color(
        0xbbbbbb,
      ),
      width: 12,
    ),
    borderRadius: BorderRadius.circular(
      topLeft: Radius.circular(
        12,
      ),
    ),
    gradient: LinearGradients(
      colors: [
        Color(
          0xaaaaaa,
        ),
      ],
    ),
    shape: BoxShape.circle,
  ),
);
 */