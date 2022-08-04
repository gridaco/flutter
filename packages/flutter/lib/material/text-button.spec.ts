import { TextButton } from "./text-button";
import { formatCode } from "dart-style";
import { Text } from "../widgets";
import { EdgeInsets } from "../painting";
test("textbutton", () => {
  expect(
    formatCode(
      new TextButton({
        style: TextButton.styleFrom({
          padding: EdgeInsets.symmetric({
            vertical: 20,
            horizontal: 30,
          }),
        }),
        child: new Text("Hello"),
        onPressed: () => {},
      })
        .build()
        .finalize()
    ).code
  ).toBe(
    `TextButton(
  style: TextButton.styleFrom(
    padding: EdgeInsets.symmetric(
      vertical: 20,
      horizontal: 30,
    ),
  ),
  child: Text(
    ""
  ),
);`
  );
});
