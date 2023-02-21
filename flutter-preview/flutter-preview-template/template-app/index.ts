import type { DartProperty } from "flutter-ast";
import mustache from "mustache";
import * as templates from "./templates";

interface FlutterTemplateArgs {
  /**
   * The has is used for making the artifacts directory unique, so it won't conflict with user's src files
   * This can be also used as an id.
   *
   * e.g. if the hash is "123", the artifacts directory will be ".flutter_preview_artifacts_123"
   *
   * @type {string}
   * @default ""
   */
  hash?: string;
  target: {
    identifier: string;
    initializationName: string;
    import: string;
    properties: DartProperty[];
  };
}

interface IFileEntry {
  path: string;
  content: string;
}

interface TemplateData {
  main: IFileEntry;
  artifacts: IFileEntry[];
}

export default function template({
  hash = "",
  target,
}: FlutterTemplateArgs): TemplateData {
  return {
    main: {
      path: "lib/main.dart",
      content: buildMainContent(target),
    },
    artifacts: [],
  };
}

function buildMainContent({
  identifier,
  initializationName,
  import: _import,
}: FlutterTemplateArgs["target"]) {
  const _seed_imports = new Set([
    // default imports
    "package:flutter/material.dart",
    // TODO: add main imports later... (disabling it to test the speed of initial compilation)
    // ...imports,
  ]);

  // add the target import from main.dart
  _seed_imports.add(_import);

  // render the template
  const main_dart_src = mustache.render(templates.main_dart_mustache, {
    imports: Array.from(_seed_imports),
    title: "Preview - " + identifier,
    widget: initializationName,
  });

  return main_dart_src;
}

function buildInitialProperties() {
  //
}

function buildPropertyConnectors() {}
