import { FlutterProject } from "..";
import path from "path";
import fs from "fs";
import rimraf from "rimraf";

test("create flutter project", () => {
  const dir = new FlutterProject(__dirname, "test").root;
  const maindart = path.join(dir, "lib", "main.dart");
  expect(fs.existsSync(maindart)).toBe(true);
  expect(dir).toBe(__dirname + "/test");
  // remove the project after test
  rimraf(dir, () => {});
});
