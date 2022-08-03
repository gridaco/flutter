import { Key, Container } from "../lib/index";

test("key gen test", () => {
  expect(
    new Container({
      key: new Key("test"),
    })
      .build()
      .finalize()
  ).toBe(`Container(key: Key("test"))`);
});
