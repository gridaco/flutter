import fs from "fs";
import path from "path";
import { Analyzer } from "../index";

const sample_color_paleettes_screen = fs.readFileSync(
  path.join(__dirname, "./samples/color_palettes_screen.dart.txt"),
  "utf-8"
);

test("analyze primary widget constructor", () => {
  const analyzer = new Analyzer(sample_color_paleettes_screen);

  const widgets = analyzer.widgets();

  console.log("widgets", widgets);

  widgets.forEach((w) => {
    w.constructors.forEach((c) => {
      console.log(c);
    });
  });
});
