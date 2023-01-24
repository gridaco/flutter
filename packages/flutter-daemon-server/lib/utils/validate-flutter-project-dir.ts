import fs from "fs";
import path from "path";
import { parse } from "yaml";

export function validateFlutterProject(
  dir: string
): FlutterProjectValidationResult {
  if (!fs.existsSync(dir)) {
    return {
      valid: false,
      error: ["Directory does not exist"],
    };
  }

  // check if pubspec.yaml exists
  if (!fs.existsSync(path.join(dir, "pubspec.yaml"))) {
    return {
      valid: false,
      error: ["pubspec.yaml does not exist"],
    };
  }

  // check if lib/main.dart exists
  if (!fs.existsSync(path.join(dir, "lib", "main.dart"))) {
    return {
      valid: false,
      error: ["lib/main.dart does not exist"],
    };
  }

  try {
    const pubspec = parse(
      fs.readFileSync(path.join(dir, "pubspec.yaml"), "utf8")
    );

    return {
      valid: true,
      pubspec,
      name: pubspec.name,
      description: pubspec.description,
      path: dir,
    };
  } catch (e) {
    return {
      valid: false,
      error: ["pubspec.yaml is not valid"],
    };
  }
}

interface FlutterProjectValidationResult {
  valid: boolean;
  error?: string[];
  name?: string;
  description?: string;
  pubspec?: any;
  path?: string;
}
