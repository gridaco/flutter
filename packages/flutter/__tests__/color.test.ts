import { Snippet } from "../lib/builder/buildable-tree";
import { Color } from "../lib/dart-ui/color";

test("color value matching test", () => {
  expect((Color.fromHex("#000000").value as Snippet)._defaultSnippet).toBe(
    "0xffffff"
  );
});
