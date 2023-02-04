import fs from "fs";
import path from "path";
import { FlutterPreviewProject } from "../index";
const demo_proj_dir = path.join(__dirname, "../../../examples/flutter_demo");

describe("initial project clone", () => {
  const porject = new FlutterPreviewProject({
    origin: demo_proj_dir,
    target: {
      path: "lib/src/preview_target_1.dart",
      identifier: "PreviewTarget1",
      constructor: "PreviewTarget1",
    },
  });

  test("src files", () => {
    expect(porject.srcfiles).toEqual([
      "pubspec.yaml",
      "lib/main.dart",
      "lib/src/dummy.dart",
      "lib/src/preview_target_1.dart",
    ]);
  });

  test("assets & fonts", () => {
    expect(porject.assets).toEqual([
      "images/a_dot_burr.jpeg",
      "images/a_dot_ham.jpeg",
    ]);
    expect(porject.fontFiles).toEqual([
      "fonts/Schyler-Regular.ttf",
      "fonts/Schyler-Italic.ttf",
      "fonts/TrajanPro.ttf",
      "fonts/TrajanPro_Bold.ttf",
    ]);

    expect(
      fs.existsSync(path.join(porject.root, "fonts/TrajanPro_Bold.ttf"))
    ).toEqual(true);
  });

  // once test is complte, remove the project
  afterAll(() => {
    porject.rimraf();
  });
});
