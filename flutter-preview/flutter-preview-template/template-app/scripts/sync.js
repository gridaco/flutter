// synced designated files from template_app/ to template-app/templates

const fs = require("fs");
const path = require("path");
const glob = require("glob");

const origin = path.join(__dirname, "../../template_app");
const target = path.join(__dirname, "../templates/v2");

/**
 * every file contains a seeded value for template, it is stated like this:
 *
 * ```dart
 * const FLUTTER_PREVIEW_TARGET_WIDGET_INITIAL_PROPERTIES = {
 *   // start_flutter_preview_template:initial_properties
 *   "name": "Flutter Preview",
 *   "radius": 10,
 *   "description":
 *       "Flutter Preview is a tool that allows you to preview your Flutter app in the browser.",
 *   "enabled": true,
 *   "color": const Color(0xFF000000),
 *   "alignment": 'start',
 *   // end_flutter_preview_template:initial_properties
 * };
 * ```
 *
 * the "start_flutter_preview_template:key" and "end_flutter_preview_template:key"
 * are used to identify the start and end of the seeded value.
 * (And there can be multiple in single file like this)
 *
 * the inbetween text needs to be transformed like this:
 *
 * ```mustache
 * const FLUTTER_PREVIEW_TARGET_WIDGET_INITIAL_PROPERTIES = {
 *  // start_flutter_preview_template:initial_properties
 * {{initial_properties}}
 * // end_flutter_preview_template:initial_properties
 * };
 * ```
 */
function transform_file_with_seeds_to_mustache_template_data(txt) {
  // get the keys
  const matches = txt.match(/start_flutter_preview_template:(\w+)/g);
  const keys = matches?.map((match) => match.split(":")[1]) ?? [];

  // validate if all keys have a start and end
  keys.forEach((key) => {
    if (!txt.includes(`end_flutter_preview_template:${key}`)) {
      throw new Error(`missing end for key: ${key}`);
    }
  });

  // transform the text between start and end
  // where start looks like: // start_flutter_preview_template:<key>
  // and end looks like: // end_flutter_preview_template:<key>
  // the replaced text looks like:
  // ```
  // // start_flutter_preview_template:<key>
  // {{ initial_properties }}
  // // end_flutter_preview_template:<key>
  // ```
  keys.forEach((key) => {
    const start = `// start_flutter_preview_template:${key}`;
    const end = `// end_flutter_preview_template:${key}`;

    const start_index = txt.indexOf(start);
    const end_index = txt.indexOf(end);

    const start_length = start.length;
    const end_length = end.length;

    const start_to_end = txt.slice(start_index + start_length, end_index);

    const transformed = `\n{{ ${key} }}\n`;

    txt = txt.replace(start_to_end, transformed);
  });

  return {
    content: txt,
    arguments: keys,
  };
}

/**
 * writes a .ts file with template data.
 *
 * the form is...
 *
 * ```ts
 * (args: { <key>: string }) => <content>
 * ```
 *
 * Where <key> is name of the argument (from argumnts)
 * e.g. -> {a: string, b: string, c: string, d: string}
 *
 * and the <content> is the transformed content from the file.
 * e.g. -> `original content with ${a} ${b} ${c} ${d}`
 */
function transformed_template_data_to_template_lambda({ content, arguments }) {
  const args_with_types = arguments.map((arg) => `${arg}: string`).join(", ");

  // replace "{{ args }}" with "${args.<arg>}"
  arguments.forEach((arg) => {
    content = content.replace(`{{ ${arg} }}`, `\${args.${arg}}`);
  });

  return `(args: {${args_with_types}}) => \`${content}\``;
}

function sync() {
  // read all .dart files from origin,
  // transform them to .ts files with template data
  // and write them to target template.ts file
  // the file name shall be transformed like this:
  // /path/to/<origin_file_name>.dart -> /path/to/<origin_file_name>.ts

  const files = glob
    .sync(`${origin}/**/*.dart`, {
      dot: true,
    })
    // exclude .dart_tool
    .filter((file) => !file.includes(".dart_tool"))
    .filter((file) => !file.includes("/samples"));

  const templates = files.map((file) => {
    const data = fs.readFileSync(file, "utf8");
    const transformedData =
      transform_file_with_seeds_to_mustache_template_data(data);
    const lambda =
      transformed_template_data_to_template_lambda(transformedData);
    const filename = file.replace(".dart", ".ts").replace(origin, target);
    return {
      filename,
      templateData: "export default " + lambda,
      arguments: transformedData.arguments,
    };
  });

  templates.forEach(({ filename, templateData, arguments }) => {
    try {
      const dir = path.dirname(filename);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filename, templateData);
    } catch (error) {
      console.error(
        `Error writing template file ${filename}: ${error.message}`
      );
    }
  });

  console.log(`Synced ${templates.length} templates to ${target}`);
}

sync();
