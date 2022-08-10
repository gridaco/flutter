import os from "os";
import path from "path";
import fs from "fs";
import rimraf from "rimraf";

export const HOMEDIR = os.homedir();
export const CACHEDIR_FLUTTER_BUILDER_SHARED = path.join(
  HOMEDIR,
  ".@flutter-builder"
);
export const CACHEDIR_FLUTTER_DAEMON = path.join(
  CACHEDIR_FLUTTER_BUILDER_SHARED,
  "daemon"
);

/**
 * directory used for creating new flutter apps.
 * run flutter create <appname> command in this directory.
 */
export const INSTANCES_ROOT_DIR = path.join(
  CACHEDIR_FLUTTER_DAEMON,
  "instances"
);
const _readme_content = `# \`@flutter-builder/daemon\` instances directory
Learn more at https://github.com/gridaco/flutter-builder/tree/main/packages/flutter-daemon`;

export function setup() {
  if (!fs.existsSync(CACHEDIR_FLUTTER_BUILDER_SHARED)) {
    fs.mkdirSync(CACHEDIR_FLUTTER_BUILDER_SHARED);
  }
  if (!fs.existsSync(CACHEDIR_FLUTTER_DAEMON)) {
    fs.mkdirSync(CACHEDIR_FLUTTER_DAEMON);
  }
  // create directory if not exists
  if (!fs.existsSync(INSTANCES_ROOT_DIR)) {
    fs.mkdirSync(INSTANCES_ROOT_DIR);
    // create README.md file for instances directory
    fs.writeFileSync(
      path.join(INSTANCES_ROOT_DIR, "README.md"),
      _readme_content
    );
  }
}

/**
 * create new instance dir (new project root dir) by id
 * @param id
 * @returns
 */
export function instancedir(id: string) {
  return path.join(INSTANCES_ROOT_DIR, id);
}

export function exists(id: string) {
  return fs.existsSync(instancedir(id));
}

export function clean() {
  rimraf.sync(INSTANCES_ROOT_DIR);
}
