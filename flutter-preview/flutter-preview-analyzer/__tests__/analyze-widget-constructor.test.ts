import fs from "fs";
import path from "path";
import { Analyzer } from "../analyzer";

const sample_color_paleettes_screen = fs.readFileSync(
  path.join(__dirname, "./samples/color_palettes_screen.dart"),
  "utf-8"
);

const sample_elevation_card = fs.readFileSync(
  path.join(__dirname, "./samples/elevation_card.dart"),
  "utf-8"
);

const sample_elevation_screen = fs.readFileSync(
  path.join(__dirname, "./samples/elevation_screen.dart"),
  "utf-8"
);

test("analyze primary widget classes", () => {
  const analyzer = new Analyzer(sample_color_paleettes_screen);

  const widgets = analyzer.widgets();

  expect(widgets[0].name).toMatch("ColorPalettesScreen");
  expect(widgets[1].name).toMatch("ColorSchemeView");
  expect(widgets[2].name).toMatch("ColorGroup");
  expect(widgets[3].name).toMatch("ColorChip");
});

test("analyze constructor with required properties", () => {
  const analyzer = new Analyzer(sample_elevation_card);

  const widgets = analyzer.widgets();
  expect(widgets[0].constructors[0].analysis.requires_arguments).toBe(true);
});

test("analyze constructor with optional properties", () => {
  const analyzer = new Analyzer(sample_elevation_screen);

  const widgets = analyzer.widgets();
  expect(widgets[0].constructors[0].analysis.requires_arguments).toBe(false);
});
