import { formatCode } from "dart-style";
import {
  Border,
  BorderRadius,
  BoxDecoration,
  BoxShape,
  Color,
  Container,
  Double,
  Key,
  LinearGradient,
  Radius,
} from "../";

const container = new Container({
  key: new Key("container"),
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

test("container", () => {
  expect(formatCode(container.build().finalize()).code).toBe(
    formatCode(`Container(
  key: Key(
    "container"
  ),
  width: double.infinity,
  height: null,
  decoration: BoxDecoration(
    border: Border.all(
      color: Color(
        0xbbbbbb,
      ),
      width: 12,
    ),
    borderRadius: BorderRadius.only(
      topLeft: Radius.circular(
        12,
      ),
    ),
    gradient: LinearGradient(
      colors: [
        Color(
          0xaaaaaa,
        ),
      ],
      stops: [
        1,
        2,
      ],
    ),
    shape: BoxShape.circle,
  ),
);`).code
  );
});
