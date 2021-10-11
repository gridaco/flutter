import { Snippet, IconData } from "@flutter-builder/flutter";

/**
 * retrives the flutter `Icons.icon_name` code snippet via name of the material icon
 * uses dynamic tools/python_utils/material_icon_parser at https://github.com/bridgedxyz/dynamic
 * @param name name of the material icon. i.e. add, person_add
 * https://api.flutter.dev/flutter/material/Icons-class.html
 */
export class Icons extends Snippet {
  static [key]() {
    return new IconData().overrideSnippet("Icons." + key);
  }
}

const Icons = {
  [(k) => k]: Icons[k],
};
