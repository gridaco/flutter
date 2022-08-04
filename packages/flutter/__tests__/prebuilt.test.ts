import { formatCode } from "dart-style";
import { Opacity, Widget } from "../";

const prebuilt = Widget.prebuilt("UndifinedCustomWidget()");

const opacity = new Opacity({
  opacity: 0, // TODO: add test with 0.0, 0.01
  child: prebuilt,
});

test("prebuilt", () => {
  expect(formatCode(opacity.build().finalize()).code).toBe(
    `Opacity(
  opacity: 0,
  child: UndifinedCustomWidget(),
);`
  );
});
