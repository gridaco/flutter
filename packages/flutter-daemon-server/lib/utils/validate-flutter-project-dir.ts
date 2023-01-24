import fs from "fs";
import path from "path";

export function validateFlutterProjectDirectory(dir: string): boolean {
  return (
    fs.existsSync(path.join(dir, "pubspec.yaml")) &&
    fs.existsSync(path.join(dir, "lib", "main.dart"))
  );
}
