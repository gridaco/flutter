import { IconData } from "@flutter-builder/flutter";

/**
 * retrives the flutter `Icons.icon_name` code snippet via name of the material icon
 * uses dynamic tools/python_utils/material_icon_parser at https://github.com/bridgedxyz/dynamic
 * @param name name of the material icon. i.e. add, person_add
 * https://api.flutter.dev/flutter/material/Icons-class.html
 */
export const Icons = new Proxy(
  {},
  {
    get: function (target, property, receiver) {
      return new IconData().overrideSnippet("Icons." + property);
    },
  }
);

// Learn more about proxy
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
// - https://www.reddit.com/r/typescript/comments/q5zeph/possible_solution_for_dynamically_populating_the/
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable
