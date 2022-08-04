import { formatCode } from "dart-style";
import { Color, Theme } from "../";

const textStyle = Theme.of().textTheme.headline1;

textStyle.copyWith({
  color: Color.fromHex("#ffffff"),
});

test("text-style", () => {
  expect(formatCode(textStyle.build().finalize()).code)
    .toEqual(`Theme.of().textTheme.headline1.copyWith(
  color: Color(
    0xffffffff,
  ),
);`);
});
