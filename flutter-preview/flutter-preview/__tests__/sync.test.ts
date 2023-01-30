import path from "path";
import { FlutterPreviewProject } from "../index";
const demo_proj_dir = path.join(__dirname, "../../../examples/flutter_demo");

describe("initial project launch", () => {
  const porject = new FlutterPreviewProject({
    origin: demo_proj_dir,
  });

  test("watch targets", () => {
    expect(porject.watchTargets).toEqual([
      //
      "pubspec.yaml",
      "lib/main.dart",
    ]);
  });
});
