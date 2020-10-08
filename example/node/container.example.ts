import { Double } from "@bridged.xyz/flutter-builder/dist/dart";
import { Color } from "@bridged.xyz/flutter-builder/dist/dart-ui/color";
import { Radius } from "@bridged.xyz/flutter-builder/dist/dart-ui/radius";
import { Border } from "@bridged.xyz/flutter-builder/dist/painting/border";
import { BorderRadius } from "@bridged.xyz/flutter-builder/dist/painting/border-radius";
import { BoxDecoration } from "@bridged.xyz/flutter-builder/dist/painting/box-decoration";
import { BoxShape } from "@bridged.xyz/flutter-builder/dist/painting/box-shape";
import { LinearGradient } from "@bridged.xyz/flutter-builder/dist/painting/linear-gradient";
import { Container } from "@bridged.xyz/flutter-builder/dist/widgets";



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
      gradient: new LinearGradient({
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