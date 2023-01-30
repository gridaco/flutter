import { formatCode } from "dart-style";
import { Key, Container } from "../lib/index";

test("key gen test", () => {
  expect(
    formatCode(
      new Container({
        key: new Key("test"),
      })
        .build()
        .finalize()
    ).code
  ).toBe(`Container(
  key: Key(
    "test",
  ),
);`);
});
