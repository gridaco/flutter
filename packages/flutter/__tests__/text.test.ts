import { formatCode } from "dart-style";
import { RichText, Text, TextSpan, Theme } from "../";

const text = new Text("", {
  style: Theme.of().textTheme.headline5,
});

const textRich = Text.rich(
  new TextSpan({ text: "hello", style: Theme.of().textTheme.headline5 })
);

const richText = new RichText({
  text: new TextSpan({
    text: "hello",
    style: Theme.of().textTheme.headline5,
    children: [
      new TextSpan({
        text: "world",
        style: Theme.of().textTheme.headline6,
      }),
    ],
  }),
});

test("text", () => {
  expect(formatCode(text.build().finalize()).code).toBe(`Text(
    "",
    style: Theme.of(context).textTheme.headline5);`);
});

test("text rich", () => {
  expect(formatCode(textRich.build().finalize()).code).toBe(`TextSpan(
    text: "hello",
    style: Theme.of(context).textTheme.headline5);
    `);
});

test("rich text", () => {
  expect(formatCode(richText.build().finalize()).code).toBe(`RichText(
    text: TextSpan(
      text: "hello",
      style: Theme.of(context).textTheme.headline5,
      children: [
        TextSpan(
          text: "world",
          style: Theme.of(context).textTheme.headline6,
          ),
        ],
      ),
    );`);
});
