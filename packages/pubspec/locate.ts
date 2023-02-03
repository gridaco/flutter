//
// FROM https://github.com/gridaco/code/tree/main/cli/pub/index.ts
//

import path from "path";
import YAML from "yaml";
import fs from "fs";
import { find_in_cwd, find_in_parent } from "./path";
import type { Pubspec } from "./pubspec";

const _PUBSPEC_YAML = "pubspec.y{,a}ml";

interface PubspecSearchResult {
  base_dir: string;
  pubspec_yaml: string;
  manifest: Pubspec;
}

export function locatePubspec(cwd = process.cwd()): PubspecSearchResult | null {
  const pubspecyaml = find_in_cwd(_PUBSPEC_YAML, cwd, true);
  if (pubspecyaml) {
    return {
      base_dir: path.dirname(pubspecyaml),
      pubspec_yaml: pubspecyaml,
      manifest: read(pubspecyaml),
    };
  }
  const pubspecyaml_in_parent_dir = find_in_parent(
    _PUBSPEC_YAML,
    cwd,
    true,
    true
  );
  if (pubspecyaml_in_parent_dir) {
    return {
      base_dir: path.dirname(pubspecyaml_in_parent_dir),
      pubspec_yaml: pubspecyaml_in_parent_dir,
      manifest: read(path.join(pubspecyaml_in_parent_dir)),
    };
  }
  return null;
}

function read(pubspec: string): Pubspec {
  return YAML.parse(fs.readFileSync(pubspec, "utf8"));
}
