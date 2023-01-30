import path from "path";
import { FlutterPreviewProject } from "../index";
const demo_proj_dir = path.join(__dirname, "../../../examples/flutter_demo");

describe("initial project launch", () => {
  const porject = new FlutterPreviewProject({
    origin: demo_proj_dir,
    target: {
      path: "lib/src/preview_target_1.dart",
      identifier: "PreviewTarget1",
    },
  });

  test("watch targets", () => {
    expect(porject.watchTargets).toEqual([
      "pubspec.yaml",
      "lib/main.dart",
      "lib/src",
      "lib/src/dummy.dart",
      "lib/src/preview_target_1.dart",
    ]);
  });
});
