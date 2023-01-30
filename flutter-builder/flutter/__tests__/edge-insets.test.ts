import { formatCode } from "dart-style";
import { EdgeInsets } from "../";

const insets = EdgeInsets.symmetric({
  horizontal: undefined,
  vertical: 1,
});

test("edge-insets", () => {
  expect(formatCode(insets.build().finalize()).code).toBe(
    formatCode(
      `EdgeInsets.symmetric(
  vertical: 1,
);`
    ).code
  );
});
