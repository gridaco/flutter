// import { FlutterProject } from "..";
// import path from "path";
// import fs from "fs";
// import rimraf from "rimraf";

// test("create flutter project", async () => {
//   const proj = await FlutterProject.new({ cwd: __dirname, id: "test" });
//   const dir = proj.root;
//   const maindart = path.join(dir, "lib", "main.dart");
//   expect(fs.existsSync(maindart)).toBe(true);
//   expect(dir).toBe(__dirname + "/test");
//   // remove the project after test
//   rimraf(dir, () => {});
// });

// empty test
test("empty test", () => {});
