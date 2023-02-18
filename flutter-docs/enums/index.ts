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
  "paiting",
  "physics",
  "rendering",
  "scheduler",
  "semantics",
  "services",
  "widgets",
  "dart-ui",
  "dart:wasm",
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
  "Android",
  "iOS",
  "flutter_test",
  "flutter_driver",
  "flutter_driver_extension",
  "flutter_localizations",
  "flutter_web_plugins",
  // "url_strategy",
  "archive",
  "archive_io",
  "async",
  // "boolean_selector",
  "characters",
  "clock",
  "collection",
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

async function enums_from_doc(doc: Document) {
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

async function parseEnums(...urls: Array<string>) {
  const enums: Array<FlutterDocEnumDefinition> = [];
  for (const url of urls) {
    const doc = await readdoc(url);
    if (doc) {
      enums.push(...(await enums_from_doc(doc)));
    }
  }

  // filter duplicates with id
  const ids = enums.map((item) => item.id);
  const unique_ids = [...new Set(ids)];
  const unique_enums = enums.filter((item) => {
    return unique_ids.includes(item.id);
  });

  return unique_enums;
}

async function main() {
  const enums: Array<FlutterDocEnumDefinition> = [];
  const spinner = ora("Parsing").start();
  for (const url of entry_urls) {
    spinner.text = `Parsing ${url}`;
    const doc = await readdoc(url);
    if (doc) {
      enums.push(...(await enums_from_doc(doc)));
    }
  }

  spinner.succeed("Parsed");

  fs.writeFileSync(
    path.join(__dirname, "enums.json"),
    JSON.stringify(enums, null, 2)
  );

  console.log('wrote "enums.json" to disk with ' + enums.length + " entries");
}

main();
