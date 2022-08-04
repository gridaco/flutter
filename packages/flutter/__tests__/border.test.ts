import { Border, Color } from "../";
import { formatCode as format } from "dart-style";
const border = Border.all({
  color: Color.fromHex("#BBBBBB"),
  width: 12,
});

test("border", () => {
  expect(format(border.build().finalize()).code).toBe(
    format(`Border.all(
  color: Color(
    0xbbbbbb,
  ),
  width: 12,
);`).code
  );
});
