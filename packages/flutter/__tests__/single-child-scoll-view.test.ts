import { formatCode } from "dart-style";
import { SingleChildScrollView } from "../";

test("single-child-scroll-view", () => {
  expect(
    formatCode(
      new SingleChildScrollView({
        child: undefined,
      })
        .build()
        .finalize()
    ).code
  ).toBe(`SingleChildScrollView()`);
});
