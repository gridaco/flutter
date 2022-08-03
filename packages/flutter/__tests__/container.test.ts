import {
  Border,
  BorderRadius,
  BoxDecoration,
  BoxShape,
  Color,
  Container,
  Double,
  LinearGradient,
  Radius,
} from "../";

const container = new Container({
  width: Double.infinity,
  height: null,
  decoration: new BoxDecoration({
    border: Border.all({
      color: Color.fromHex("#BBBBBB"),
      width: 12,
    }),
    shape: BoxShape.circle,
    borderRadius: BorderRadius.only({ topLeft: Radius.circular(12) }),
    gradient: new LinearGradient({
      colors: [Color.fromHex("#AAAAAA")],
      stops: [1, 2],
    }),
  }),
});

const built = container.build();
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
