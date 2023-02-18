import Axios from "axios";
import xpath from "xpath";
import xmldom from "xmldom";
import assert from "assert";
import fs from "fs";
import path from "path";
import ora from "ora";

const dom = xmldom.DOMParser;

const entry = [
  "animation",
  "cupertino",
  "foundation",
  "gestures",
  "material",
  "painting",
  "physics",
  "rendering",
  "scheduler",
  "semantics",
  "services",
  "widgets",
  "dart-ui",
  "dart-wasm",
  "dart-async",
  "dart-collection",
  "dart-convert",
  "dart-core",
  "dart-developer",
  "dart-math",
  "dart-typed_data",
  "dart-ffi",
  "dart-io",
  "dart-isolate",
  "dart-html",
  "dart-js",
  "dart-js_util",
  // "Android",
  // "iOS",
  // "flutter_test",
  // "flutter_driver",
  // "flutter_driver_extension",
  // "flutter_localizations",
  // "flutter_web_plugins",
  // "url_strategy",
  // "archive",
  // "archive_io",
  // "async",
  // "boolean_selector",
  // "characters",
  // "clock",
  // "collection",
  // "crypto",
];

const entry_urls = entry.map((item) => {
  return `/${item}/${item}-library.html`;
});

const client = Axios.create({
  baseURL: "https://api.flutter.dev/flutter/",
});

interface FlutterDocEnumDefinition {
  name: string;
  url: string;
  id: string;
  values?: Array<string>;
}

async function readdoc(url: string) {
  try {
    const { data: html } = await client.get(url);
    const doc = new dom({
      errorHandler: {
        warning: (w) => {},
        error: (e) => {},
        fatalError: (e) => {},
      },
    }).parseFromString(html);
    return doc;
  } catch (e) {
    return null;
  }
}

async function enums_from_library_doc(doc: Document) {
  assert(doc !== null, "doc is null");

  const enum_names = xpath.select(
    //
    "//section[@id='enums']//dt//a/text()",
    doc
  );

  const enum_urls = xpath.select(
    //
    "//section[@id='enums']//dt//a/@href",
    doc
  );

  const enums: Array<FlutterDocEnumDefinition> = [];

  for (let i = 0; i < enum_names.length; i++) {
    const name = enum_names[i]["data"];
    const _url = enum_urls[i]["value"];

    // remove .html suffix
    const id = _url.split(".html")[0];
    const url = `https://api.flutter.dev/flutter/${id}.html`;

    enums.push({
      name,
      url,
      id,
    });
  }

  return enums;
}

async function parse_enums_from_docs(...urls: Array<string>) {
  const enums: Array<FlutterDocEnumDefinition> = [];
  for (const url of urls) {
    const doc = await readdoc(url);
    if (doc) {
      enums.push(...(await enums_from_library_doc(doc)));
    }
  }

  // filter duplicates with id
  const uniques = enums.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );

  return uniques;
}

async function parse_enum_details_from_enum_doc({
  id,
  name,
  url,
}: FlutterDocEnumDefinition) {
  const doc = await readdoc(url);
  // values
  // //section[@id="values"]/dl[@class="properties"]/dt/span[1]/text()

  // description
  // //section[@id="values"]/dl[@class="properties"]/dd/text()

  const value_names = xpath
    .select(
      "//section[@id='values']/dl[@class='properties']/dt/span[1]/text()",
      doc
    )
    .map((item) => item["data"]);

  const values: string[] = [];

  for (let i = 0; i < value_names.length; i++) {
    const name = value_names[i];

    values.push(name);
  }

  return {
    id,
    url,
    name,
    values,
  };
}

async function main() {
  const targets = Array.from(new Set(entry_urls));
  const spinner = ora(
    "Parsing " + targets.length + " entries from flutter docs"
  ).start();
  const defs: Array<FlutterDocEnumDefinition> = await parse_enums_from_docs(
    ...targets
  );

  spinner.succeed("Parsed");

  const enums: Array<FlutterDocEnumDefinition> = [];

  // parse details
  spinner.start("Parsing details");
  for (const enum_ of defs) {
    spinner.text = `Parsing details of ${enum_.name}`;
    const detail = await parse_enum_details_from_enum_doc(enum_);
    enums.push(detail);
  }

  spinner.succeed("Parsed details");

  fs.writeFileSync(
    path.join(__dirname, "enums.json"),
    JSON.stringify(enums, null, 2)
  );

  console.log('wrote "enums.json" to disk with ' + defs.length + " entries");
}

main();
