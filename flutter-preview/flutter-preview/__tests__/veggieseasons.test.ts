import os from "os";
import fs from "fs";
import path from "path";
import { FlutterPreviewProject } from "../index";

const demo_proj_dir = path.join(
  // Users/<username>
  os.homedir(),
  // Path to project relative to user dir
  "./Documents/Github/samples/veggieseasons"
);

describe("veggieseasons", () => {
  if (!fs.existsSync(demo_proj_dir)) {
    // only run test if the demo project is available
    test("<pass>", () => {});
    return;
  }

  const porject = new FlutterPreviewProject({
    origin: demo_proj_dir,
    target: {
      path: "lib/widgets/veggie_card.dart",
      identifier: "VeggieCard",
      constructor: "VeggieCard",
    },
  });

  test("virtualized main.dart", () => {
    const maindart = fs.readFileSync(porject.main, "utf-8");
    const imports = maindart.split("\n").filter((l) => l.startsWith("import"));
    expect(imports).toEqual([
      "import 'package:flutter/material.dart';",
      "import 'widgets/veggie_card.dart';",
    ]);
  });

  // once test is complte, remove the project
  afterAll(() => {
    porject.rimraf();
  });
});
