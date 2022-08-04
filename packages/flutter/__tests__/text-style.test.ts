import { formatCode } from "dart-style";
import { Color, TextStyle } from "../";
const textStyle = new TextStyle().copyWith({
  color: Color.fromHex("#FFFFFF"),
});

test("text-style", () => {
  expect(formatCode(textStyle.build().finalize()).code).toBe(`TextStyle(
    color: Color(
      0xffffffff,
      ),
      );`);
});
