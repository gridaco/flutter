import type { Snippet } from "../builder/buildable-tree";
import { Color } from "./color";

test("color value matching test", () => {
  expect((Color.fromHex("#00000000").value as Snippet)._defaultSnippet).toBe(
    "0x00000000"
  );

  expect((Color.fromHex("#000").value as Snippet)._defaultSnippet).toBe(
    "0x000000"
  );

  expect((Color.fromHex("#000000").value as Snippet)._defaultSnippet).toBe(
    "0x000000"
  );

  expect((Color.fromHex("#fff").value as Snippet)._defaultSnippet).toBe(
    "0xffffff"
  );

  expect((Color.fromHex("#ffffff00").value as Snippet)._defaultSnippet).toBe(
    "0xffffff00"
  );
});
